import React, { useState } from "react";
import {
	Box,
	Button,
	IconButton,
	InputAdornment,
	Modal,
	Paper,
	Tab,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TablePagination,
	TableRow,
	Tabs,
	TextField,
	TableSortLabel,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Delete, Edit } from "@mui/icons-material";
import HeaderMenu from "./HeaderMenu";
import { Link, useNavigate } from "react-router-dom";

function CustomTabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && <Box sx={{ p: 3 }}>{children}</Box>}
		</div>
	);
}

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}

function Albums() {
	const navigate = useNavigate();
	const [value, setValue] = useState(0);
	const [open, setOpen] = useState(false);
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(6);
	const [order, setOrder] = useState("asc");
	const [orderBy, setOrderBy] = useState("name");
	const [searchQuery, setSearchQuery] = useState("");
	const [data, setData] = useState([
		{ id: 1, name: "Album 1", year: "2024", owner: "User A", totalPhotos: 15, url: "https://picsum.photos/150?random=19" },
		{ id: 2, name: "Album 2", year: "2024", owner: "User B", totalPhotos: 25, url: "https://picsum.photos/150?random=12" },
		{ id: 3, name: "Album 3", year: "2024", owner: "User C", totalPhotos: 10, url: "https://picsum.photos/150?random=94" },
		{ id: 4, name: "Album 4", year: "2024", owner: "User D", totalPhotos: 12, url: "https://picsum.photos/150?random=88" },
	]);
	const [editRowId, setEditRowId] = useState(null);
	const [editedData, setEditedData] = useState({});
	const [albumName, setAlbumName] = useState("");
	const [year, setYear] = useState("");

	const handleChange = (event, newValue) => setValue(newValue);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const handleClickAlbum = (name) => {
		navigate(`/upload?name=${name}`);
	};

	const handleCreateAlbum = () => {
		const newId = data.length ? Math.max(...data.map((row) => row.id)) + 1 : 1;
		const randomNumber = Math.floor(Math.random() * 100) + 1;
		const newEntry = {
			id: newId,
			name: albumName,
			year: year,
			owner: "User",
			totalPhotos: 0,
			url: `https://picsum.photos/150?random=${randomNumber}`,
		};
		setData([...data, newEntry]);
		setAlbumName("");
		setYear("");
		setOpen(false);
	};

	const handleEditChange = (event, field) => {
		setEditedData({
			...editedData,
			[field]: event.target.value,
		});
	};

	const handleEditClick = (row) => {
		setEditRowId(row.id);
		setEditedData(row);
	};

	const handleSaveClick = () => {
		setData((prevData) =>
			prevData.map((row) => (row.id === editRowId ? editedData : row))
		);
		setEditRowId(null);
	};

	const handleCancelClick = () => {
		setEditRowId(null);
		setEditedData({});
	};

	const handleDeleteClick = (id) => {
		setData((prevData) => prevData.filter((row) => row.id !== id));
	};

	const handleRequestSort = (event, property) => {
		const isAsc = orderBy === property && order === "asc";
		setOrder(isAsc ? "desc" : "asc");
		setOrderBy(property);
	};

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	const handleSearchChange = (event) => {
		setSearchQuery(event.target.value);
		setPage(0);
	};

	const filteredData = data.filter(
		(row) =>
			row.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
			row.owner.toLowerCase().includes(searchQuery.toLowerCase()) ||
			row.year.includes(searchQuery)
	);

	const descendingComparator = (a, b, orderBy) => {
		if (b[orderBy] < a[orderBy]) return -1;
		if (b[orderBy] > a[orderBy]) return 1;
		return 0;
	};

	const getComparator = (order, orderBy) => {
		return order === "desc"
			? (a, b) => descendingComparator(a, b, orderBy)
			: (a, b) => -descendingComparator(a, b, orderBy);
	};

	const stableSort = (array, comparator) => {
		const stabilizedThis = array.map((el, index) => [el, index]);
		stabilizedThis.sort((a, b) => {
			const order = comparator(a[0], b[0]);
			if (order !== 0) return order;
			return a[1] - b[1];
		});
		return stabilizedThis.map((el) => el[0]);
	};

	return (
		<div className="min-h-screen bg-white">
			<HeaderMenu />
			<div className="w-[75%] m-auto mt-8">
				<div className="text-center text-4xl font-bold text-custom-maroon">
					ALBUMS
				</div>
				<Box
					sx={{ borderBottom: 1, borderColor: "divider" }}
					className="flex justify-between"
				>
					<Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
						<Tab label="Grid View" {...a11yProps(0)} />
						<Tab label="List View" {...a11yProps(1)} />
					</Tabs>
					<TextField
						id="input-with-icon-textfield"
						className="!rounded-lg px-4 bg-gray-100 !mb-2"
						value={searchQuery}
						onChange={handleSearchChange}
						slotProps={{
							input: {
								startAdornment: (
									<InputAdornment position="start">
										<SearchIcon />
									</InputAdornment>
								),
							},
						}}
						variant="outlined"
						size="small"
						placeholder="Search"
					/>
				</Box>
				<div className="flex justify-end">
					<Button
						className="!mt-3 !mr-8 !bg-custom-maroon"
						variant="contained"
						onClick={handleOpen}
					>
						Create Album
					</Button>
				</div>
				<CustomTabPanel value={value} index={0}>
					<div className="grid grid-cols-4 gap-2 p-4">
						{filteredData.map((image) => (
							<div
								key={image.id}
								className="relative p-2 rounded cursor-pointer"
								onClick={() => handleClickAlbum(image.name)}
							>
								<img
									src={image.url}
									alt={`Image ${image.id}`}
									className="w-[250px] h-[150px] object-cover rounded"
								/>
								<span className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white text-xs p-1">
                  {image.name}
                </span>
							</div>
						))}
					</div>
					<div className="mt-4 flex justify-between items-center">
						<Button variant="outlined" className="!mr-4">
							&larr; Previous
						</Button>
						<span>Pages 1/10</span>
						<Button variant="outlined" className="!ml-4">
							Next &rarr;
						</Button>
					</div>
				</CustomTabPanel>
				<CustomTabPanel value={value} index={1}>
					<TableContainer component={Paper} className="shadow-lg rounded-lg mb-8">
						<Table>
							<TableHead className="bg-custom-maroon">
								<TableRow>
									<TableCell className="!text-white">
										<TableSortLabel
											active={orderBy === "name"}
											direction={orderBy === "name" ? order : "asc"}
											onClick={(event) => handleRequestSort(event, "name")}
											sx={{
												color: "white !important",
												"&.MuiTableSortLabel-root:hover": {
													color: "white !important",
												},
												"& .MuiTableSortLabel-icon": {
													color: "white !important",
												},
											}}
										>
											Name
										</TableSortLabel>
									</TableCell>
									<TableCell className="!text-white">
										<TableSortLabel
											active={orderBy === "year"}
											direction={orderBy === "year" ? order : "asc"}
											onClick={(event) => handleRequestSort(event, "year")}
											sx={{
												color: "white !important",
												"&.MuiTableSortLabel-root:hover": {
													color: "white !important",
												},
												"& .MuiTableSortLabel-icon": {
													color: "white !important",
												},
											}}
										>
											Year
										</TableSortLabel>
									</TableCell>
									<TableCell className="!text-white">
										<TableSortLabel
											active={orderBy === "owner"}
											direction={orderBy === "owner" ? order : "asc"}
											onClick={(event) => handleRequestSort(event, "owner")}
											sx={{
												color: "white !important",
												"&.MuiTableSortLabel-root:hover": {
													color: "white !important",
												},
												"& .MuiTableSortLabel-icon": {
													color: "white !important",
												},
											}}
										>
											Owner
										</TableSortLabel>
									</TableCell>
									<TableCell className="!text-white">
										<TableSortLabel
											active={orderBy === "totalPhotos"}
											direction={orderBy === "totalPhotos" ? order : "asc"}
											onClick={(event) => handleRequestSort(event, "totalPhotos")}
											sx={{
												color: "white !important",
												"&.MuiTableSortLabel-root:hover": {
													color: "white !important",
												},
												"& .MuiTableSortLabel-icon": {
													color: "white !important",
												},
											}}
										>
											Total Photos
										</TableSortLabel>
									</TableCell>
									<TableCell className="!text-white !text-center">Actions</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{stableSort(filteredData, getComparator(order, orderBy))
									.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
									.map((row) => (
										<TableRow key={row.id}>
											<TableCell>
												{editRowId === row.id ? (
													<TextField
														value={editedData.name || ""}
														onChange={(event) => handleEditChange(event, "name")}
													/>
												) : (
													<Link to={`/upload?name=${row.name}`} className="text-blue-600 hover:underline">
														{row.name}
													</Link>
												)}
											</TableCell>
											<TableCell>
												{editRowId === row.id ? (
													<TextField
														value={editedData.year || ""}
														onChange={(event) => handleEditChange(event, "year")}
													/>
												) : (
													row.year
												)}
											</TableCell>
											<TableCell>{row.owner}</TableCell>
											<TableCell>{row.totalPhotos}</TableCell>
											<TableCell>
												{editRowId === row.id ? (
													<div className="flex justify-center">
														<Button color="inherit" size="small" onClick={handleCancelClick}>
															Cancel
														</Button>
														<Button color="success" size="small" onClick={handleSaveClick}>
															Save
														</Button>
													</div>
												) : (
													<div className="flex justify-center">
														<IconButton onClick={() => handleEditClick(row)}>
															<Button className="!bg-green-800" variant="contained" size="small">
																<Edit /> EDIT
															</Button>
														</IconButton>
														<IconButton onClick={() => handleDeleteClick(row.id)}>
															<Button className="!bg-red-600" variant="contained" size="small">
																<Delete /> DELETE
															</Button>
														</IconButton>
													</div>
												)}
											</TableCell>
										</TableRow>
									))}
							</TableBody>
						</Table>
					</TableContainer>
					<TablePagination
						component="div"
						count={filteredData.length}
						page={page}
						onPageChange={handleChangePage}
						rowsPerPage={rowsPerPage}
						onRowsPerPageChange={handleChangeRowsPerPage}
						rowsPerPageOptions={[5, 10, 25]}
						labelRowsPerPage="Rows per page"
						className="mt-4"
					/>
				</CustomTabPanel>
				<Modal
					open={open}
					onClose={handleClose}
					aria-labelledby="create-album-modal"
					aria-describedby="modal-for-creating-new-album"
				>
					<Box
						className="bg-white p-4 shadow-lg"
						sx={{
							position: "absolute",
							top: "50%",
							left: "50%",
							transform: "translate(-50%, -50%)",
							width: 400,
							borderRadius: 2,
						}}
					>
						<h2 id="create-album-modal" className="mb-4 text-lg font-bold">
							Create New Album
						</h2>
						<TextField
							label="Album Name"
							fullWidth
							value={albumName}
							onChange={(e) => setAlbumName(e.target.value)}
						/>
						<TextField
							label="Year"
							className="!mt-2"
							fullWidth
							value={year}
							onChange={(e) => setYear(e.target.value)}
						/>
						<div className="flex justify-end">
							<Button
								className="!mt-4 !bg-custom-maroon !text-white"
								variant="contained"
								onClick={handleCreateAlbum}
								disabled={!albumName || !year}
							>
								Submit
							</Button>
						</div>
					</Box>
				</Modal>
			</div>
		</div>
	);
}

export default Albums;