import React, {useState} from "react";
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
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {Delete, Edit} from "@mui/icons-material";
import HeaderMenu from "./HeaderMenu";

function CustomTabPanel(props) {
	const {children, value, index, ...other} = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
		>
			{value === index && <Box sx={{p: 3}}>{children}</Box>}
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
	const [value, setValue] = useState(0);
	const [open, setOpen] = useState(false);

	const handleChange = (event, newValue) => setValue(newValue);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<div className="min-h-screen bg-white">
			<HeaderMenu/>
			<div className="w-[75%] m-auto mt-8">
				<div className="text-center text-4xl font-bold text-custom-maroon">
					ALBUMS
				</div>
				<Box
					sx={{borderBottom: 1, borderColor: "divider"}}
					className="flex justify-between"
				>
					<Tabs
						value={{value}}
						onChange={handleChange}
						aria-label="basic tabs example"
					>
						<Tab label="Grid View" {...a11yProps(0)} />
						<Tab label="List View" {...a11yProps(1)} />
					</Tabs>
					<TextField
						id="input-with-icon-textfield"
						className="!rounded-lg px-4 bg-gray-100 !mb2"
						slotProps={{
							input: {
								startAdornment: (
									<InputAdornment position="start">
										<SearchIcon/>
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
						<div className="relative p-2 rounded cursor-pointer">
							<img
								src="https://picsum.photos/150?random=1"
								alt="Album"
								className="w-[250px] h-[150px] object-cover rounded"
							/>
							<span className="absolute bottom-0 left-0 bg-black bg-opacity-50 text white text-xs p-1">
                Album Name
              </span>
						</div>
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
				{/*List View*/}
				<CustomTabPanel value={value} index={1}>
					<TableContainer
						component={Paper}
						className="shadow-lg rounded-lg mb-8"
					>
						<Table>
							<TableHead className="bg-custom-maroon">
								<TableRow>
									<TableCell className="!text-white">Name</TableCell>
									<TableCell className="!text-white">Year</TableCell>
									<TableCell className="!text-white">Owner</TableCell>
									<TableCell className="!text-white">Total Photos</TableCell>
									<TableCell className="!text-white !text-center">
										Actions
									</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								<TableRow>
									<TableCell>Album 1</TableCell>
									<TableCell>2024</TableCell>
									<TableCell>User A</TableCell>
									<TableCell>10</TableCell>
									<TableCell className="flex justify-center">
										<IconButton>
											<Button
												className="!bg-green-800"
												variant="contained"
												size="small"
											>
												<Edit/>
												Edit
											</Button>
										</IconButton>
										<IconButton>
											<Button
												className="!bg-red-600"
												variant="contained"
												size="small"
											>
												<Delete/>
												DELETE
											</Button>
										</IconButton>
									</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</TableContainer>
					<TablePagination
						component="div"
						count={10}
						page={0}
						rowsPerPage={5}
						onPageChange={() => {
						}}
						onRowsPerPageChange={() => {
						}}
						labelRowsPerPage="Rows per page"
						rowsPerPageOptions={[5, 10, 25]}
						className="mt-4"
					/>
				</CustomTabPanel>
				{/*Modal for creating a new album*/}
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
						<TextField label="Album Name" fullWidth/>
						<TextField label="Year" className="!mt-2" fullWidth/>
						<div className="flex justify-center">
							<Button
								className="!mt-4 !bg-custom-maroon !text-white"
								variant="contained"
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
