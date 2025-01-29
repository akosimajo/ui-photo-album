import React, { useState } from 'react';
import HeaderMenu from './HeaderMenu';
import { Avatar, Box, Button, Grid, Grid2, InputAdornment, Paper, Tab, Tabs, TextField, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Delete } from '@mui/icons-material';
import { useNavigate, useSearchParams } from 'react-router-dom';

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
		'aria-controls': `simple-tabpanel-${index}`,
	};
}


function MyPhotos() {

	const [searchQuery, setSearchQuery] = useState('');
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};




	const [images, setImages] = useState([
		// Initial sample data with image URLs
		{ id: 1, name: 'Sample Image 1', url: 'https://picsum.photos/150?random=1' , tags : [
				{ id: 1, name: 'Tag 1'},
				{ id: 2, name: 'Tag 2'},
				{ id: 3, name: 'Tag 3'},
				// Add more rows here
			]},
		{ id: 2, name: 'Sample Image 2', url: 'https://picsum.photos/150?random=2', tags : [
				{ id: 1, name: 'Tag 1'},
				{ id: 2, name: 'Tag 2'},
				{ id: 3, name: 'Tag 3'},
				// Add more rows here
			] },
		{ id: 3, name: 'Sample Image 3', url: 'https://picsum.photos/150?random=3', tags : [
				{ id: 1, name: 'Tag 1'},
				{ id: 2, name: 'Tag 2'},
				{ id: 3, name: 'Tag 3'},
				// Add more rows here
			] },
		{ id: 4, name: 'Sample Image 4', url: 'https://picsum.photos/150?random=4', tags : [
				{ id: 1, name: 'Tag 1'},
				{ id: 2, name: 'Tag 2'},
				{ id: 3, name: 'Tag 3'},
				// Add more rows here
			] },
		{ id: 5, name: 'Sample Image 5', url: 'https://picsum.photos/150?random=5', tags : [
				{ id: 1, name: 'Tag 1'},
				{ id: 2, name: 'Tag 2'},
				{ id: 3, name: 'Tag 3'},
				// Add more rows here
			] },
		{ id: 6, name: 'Sample Image 6', url: 'https://picsum.photos/150?random=6', tags : [
				{ id: 1, name: 'Tag 1'},
				{ id: 2, name: 'Tag 2'},
				{ id: 3, name: 'Tag 3'},
				// Add more rows here
			] },
		{ id: 7, name: 'Sample Image 7', url: 'https://picsum.photos/150?random=7', tags : [
				{ id: 1, name: 'Tag 1'},
				{ id: 2, name: 'Tag 2'},
				{ id: 3, name: 'Tag 3'},
				// Add more rows here
			] },
		{ id: 8, name: 'Sample Image 8', url: 'https://picsum.photos/150?random=8', tags : [
				{ id: 1, name: 'Tag 1'},
				{ id: 2, name: 'Tag 2'},
				{ id: 3, name: 'Tag 3'},
				// Add more rows here
			] },
		{ id: 9, name: 'Sample Image 9', url: 'https://picsum.photos/150?random=9', tags : [
				{ id: 1, name: 'Tag 1'},
				{ id: 2, name: 'Tag 2'},
				{ id: 3, name: 'Tag 3'},
				// Add more rows here
			] },
		{ id: 10, name: 'Sample Image 10', url: 'https://picsum.photos/150?random=10', tags : [
				{ id: 1, name: 'Tag 1'},
				{ id: 2, name: 'Tag 2'},
				{ id: 3, name: 'Tag 3'},
				// Add more rows here
			] },
		{ id: 11, name: 'Sample Image 11', url: 'https://picsum.photos/150?random=11', tags : [
				{ id: 1, name: 'Tag 1'},
				{ id: 2, name: 'Tag 2'},
				{ id: 3, name: 'Tag 3'},
				// Add more rows here
			] },
		{ id: 12, name: 'Sample Image 12', url: 'https://picsum.photos/150?random=12', tags : [
				{ id: 1, name: 'Tag 1'},
				{ id: 2, name: 'Tag 2'},
				{ id: 3, name: 'Tag 3'},
				// Add more rows here
			] },
		{ id: 13, name: 'Sample Image 12', url: 'https://picsum.photos/150?random=13', tags : [
				{ id: 1, name: 'Tag 1'},
				{ id: 2, name: 'Tag 2'},
				{ id: 3, name: 'Tag 3'},
				// Add more rows here
			] },
		{ id: 14, name: 'Sample Image 12', url: 'https://picsum.photos/150?random=14', tags : [
				{ id: 1, name: 'Tag 1'},
				{ id: 2, name: 'Tag 2'},
				{ id: 3, name: 'Tag 3'},
				// Add more rows here
			] },
		{ id: 15, name: 'Sample Image 12', url: 'https://picsum.photos/150?random=15', tags : [
				{ id: 1, name: 'Tag 1'},
				{ id: 2, name: 'Tag 2'},
				{ id: 3, name: 'Tag 3'},
				// Add more rows here
			] },
		{ id: 16, name: 'Sample Image 12', url: 'https://picsum.photos/150?random=16', tags : [
				{ id: 1, name: 'Tag 1'},
				{ id: 2, name: 'Tag 2'},
				{ id: 3, name: 'Tag 3'},
				// Add more rows here
			] },
	]);
	const handleSearchChange = (event) => {
		setSearchQuery(event.target.value.toLowerCase());
	};



	// Filter the data based on the search query
	const filteredData = images.filter((row) =>
		row.name.toLowerCase().includes(searchQuery.toLowerCase())
	);

	const [searchParams] = useSearchParams();
	const navigate = useNavigate();
	const person = searchParams.get('name'); // Retrieve the 'name' query parameter

	const goBack = () => {
		navigate(-1); // Go back to the previous page
	}

	return (
		<div className="min-h-screen bg-white">

			<HeaderMenu/>

			<div className='w-[75%] m-auto mt-8'>
				<div className='text-center text-4xl font-bold text-custom-red'>example_tag_name</div>
				<Box sx={{ borderBottom: 1, borderColor: 'divider' }} className="flex justify-end">

					<TextField
						id="input-with-icon-textfield"
						className='!rounded-lg px-4 bg-gray-100 !mb-2'
						value={searchQuery} // Set the value to the search query
						onChange={handleSearchChange} // Handle input change
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
						placeholder='Search'
					/>
				</Box>


				<div  className="!w-[80%] m-auto my-8">

					<div className='!flex  w-[100%] mb-2 justify-between '>

						<Button variant='outlined' className='!bg-gray-200 !text-black' onClick={goBack}>Back</Button>
						<div className='flex m-1 p-1' >
							<Typography className='!text-left !font-bold text-custom-red'>{person}</Typography>
						</div>

					</div>
					<div className="grid grid-cols-4 gap-2 p-4 ">
						{filteredData.map(image => (
							<div key={image.id} className="relative p-2 rounded">
								<img src={image.url} alt={`Image ${image.id}`} className="w-[250px] h-[150px] object-cover rounded" />
								<span className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white text-xs p-1">
                    {image.name}
                </span>
							</div>
						))}

					</div>
				</div>
				{/* Pagination */}
				{/* <div className="mt-4 flex justify-between items-center">
              <Button variant="outlined" className='!mr-4'>&larr; Previous</Button>
              <span>Pages 1/10</span>
              <Button variant="outlined"className='!ml-4'>Next &rarr;</Button>
            </div>  */}



			</div>
		</div>
	);
}

export default MyPhotos;
