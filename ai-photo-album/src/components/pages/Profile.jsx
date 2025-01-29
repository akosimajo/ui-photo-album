import React, { useState } from 'react';
import HeaderMenu from './HeaderMenu';
import { Box, Button, InputAdornment, Tab, Tabs, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Delete } from '@mui/icons-material';

// Tab Panel Component
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

// Accessibility Props for Tabs
function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

function Profile() {
	// State hooks
	const [searchQuery, setSearchQuery] = useState('');
	const [value, setValue] = useState(0);
	const [images, setImages] = useState(getInitialImages());
	const [selectedImages, setSelectedImages] = useState([]);
	const [selectAll, setSelectAll] = useState(false);

	// Handle Tab Change
	const handleChange = (event, newValue) => setValue(newValue);

	// Handle Search Query Change
	const handleSearchChange = (event) => setSearchQuery(event.target.value.toLowerCase());

	// Filter Images Based on Search Query
	const filteredImages = images.filter(image =>
		image.name.toLowerCase().includes(searchQuery)
	);

	// Handle Image Selection (Individual Checkbox)
	const handleCheckboxChange = (event, index) => {
		if (event.target.checked) {
			setSelectedImages([...selectedImages, index]);
		} else {
			setSelectedImages(selectedImages.filter(selected => selected !== index));
		}
	};

	// Handle "Select All" Checkbox
	const handleSelectAllChange = (event) => {
		if (event.target.checked) {
			setSelectedImages(images.map((_, index) => index)); // Select all images
		} else {
			setSelectedImages([]); // Deselect all images
		}
		setSelectAll(event.target.checked);
	};

	// Handle Deleting Selected Images
	const handleDeleteSelected = () => {
		setImages(prevImages => prevImages.filter((_, index) => !selectedImages.includes(index)));
		setSelectedImages([]); // Clear selected images after deletion
	};

	return (
		<div className="min-h-screen bg-white">
			{/* Header */}
			<HeaderMenu />

			<div className="w-[75%] m-auto mt-8">
				{/* Profile Title */}
				<div className="text-center text-4xl font-bold text-custom-red">PROFILE</div>

				{/* Tabs and Search Bar */}
				<Box sx={{ borderBottom: 1, borderColor: 'divider' }} className="flex justify-between">
					<Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
						<Tab label="Photos of You" {...a11yProps(0)} />
						<Tab label="Photos Uploaded" {...a11yProps(1)} />
					</Tabs>

					{/* Search Input */}
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

				{/* Tab Panels */}
				{/* Tab 1: Photos of You */}
				<CustomTabPanel value={value} index={0}>
					<ImageGallery
						images={filteredImages}
						selectedImages={selectedImages}
						handleCheckboxChange={handleCheckboxChange}
						handleSelectAllChange={handleSelectAllChange}
						handleDeleteSelected={handleDeleteSelected}
						selectAll={selectAll}
					/>
				</CustomTabPanel>

				{/* Tab 2: Photos Uploaded */}
				<CustomTabPanel value={value} index={1}>
					<ImageGallery
						images={filteredImages}
						selectedImages={selectedImages}
						handleCheckboxChange={handleCheckboxChange}
						handleSelectAllChange={handleSelectAllChange}
						handleDeleteSelected={handleDeleteSelected}
						selectAll={selectAll}
					/>
				</CustomTabPanel>
			</div>
		</div>
	);
}

// Helper function to generate initial image data
function getInitialImages() {
	return [
		{ id: 1, name: 'Sample Image 1', url: 'https://picsum.photos/150?random=1' },
		{ id: 2, name: 'Sample Image 2', url: 'https://picsum.photos/150?random=2' },
		{ id: 3, name: 'Sample Image 3', url: 'https://picsum.photos/150?random=3' },
		{ id: 4, name: 'Sample Image 4', url: 'https://picsum.photos/150?random=4' },
		{ id: 5, name: 'Sample Image 5', url: 'https://picsum.photos/150?random=5' },
		{ id: 6, name: 'Sample Image 6', url: 'https://picsum.photos/150?random=6' },
		{ id: 7, name: 'Sample Image 7', url: 'https://picsum.photos/150?random=7' },
		{ id: 8, name: 'Sample Image 8', url: 'https://picsum.photos/150?random=8' },
		{ id: 9, name: 'Sample Image 9', url: 'https://picsum.photos/150?random=9' },
		{ id: 10, name: 'Sample Image 10', url: 'https://picsum.photos/150?random=10' },
		{ id: 11, name: 'Sample Image 11', url: 'https://picsum.photos/150?random=11' },
		{ id: 12, name: 'Sample Image 12', url: 'https://picsum.photos/150?random=12' },
	];
}

// Image Gallery Component (Reusable)
function ImageGallery({
	                      images,
	                      selectedImages,
	                      handleCheckboxChange,
	                      handleSelectAllChange,
	                      handleDeleteSelected,
	                      selectAll,
                      }) {
	return (
		<div>
			{/* Select All and Delete Button */}
			<div className="flex justify-between mb-4">
				<div className="flex items-center">
					<input
						type="checkbox"
						className="mr-2"
						checked={selectAll}
						onChange={handleSelectAllChange}
					/>
					<label className="text-sm">Select All</label>
				</div>
				<Button variant="text" className="!text-custom-red" onClick={handleDeleteSelected}>
					<Delete />
					Delete
				</Button>
			</div>

			{/* Image Grid */}
			<div className="grid grid-cols-4 gap-4">
				{images.map((image, index) => (
					<div key={index} className="relative p-2 rounded">
						<img
							src={image.url}
							alt={`Image ${index}`}
							className="w-[260px] h-[150px] object-cover rounded"
						/>
						{/* Checkbox for selecting the image */}
						<input
							type="checkbox"
							className="absolute top-2 left-2"
							checked={selectedImages.includes(index)}
							onChange={(event) => handleCheckboxChange(event, index)}
						/>
						{/* Image Name */}
						<span className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white text-xs p-1">
							{image.name}
						</span>
					</div>
				))}
			</div>

			{/* Pagination */}
			<div className="mt-4 flex justify-between items-center">
				<Button variant="outlined" className="!mr-4">
					&larr; Previous
				</Button>
				<span>Pages 1/10</span>
				<Button variant="outlined" className="!ml-4">
					Next &rarr;
				</Button>
			</div>
		</div>
	);
}

export default Profile;
