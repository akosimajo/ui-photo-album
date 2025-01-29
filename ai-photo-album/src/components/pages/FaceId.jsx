import { Avatar, Box, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import HeaderMenu from "./HeaderMenu";
import { useState } from "react";

function FaceId() {
	const [searchQuery, setSearchQuery] = useState(''); // State for managing search input

	const images = [
		{
			id: 1,
			src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
			alt: "Person 1",
		},
		{
			id: 2,
			src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
			alt: "Person 2",
		},
		{
			id: 3,
			src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
			alt: "Person 3",
		},
		{
			id: 4,
			src: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
			alt: "Person 4",
		},
		{
			id: 5,
			src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
			alt: "Person 5",
		},
		{
			id: 6,
			src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
			alt: "Person 6",
		},
		{
			id: 7,
			src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
			alt: "Person 7",
		},
		{
			id: 8,
			src: "https://images.unsplash.com/photo-1502767089025-6572583495b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
			alt: "Person 8",
		},
		{
			id: 9,
			src: "https://images.unsplash.com/photo-1552058544-f2b08422138a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
			alt: "Person 9",
		},
		{
			id: 10,
			src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
			alt: "Person 10",
		},
		{
			id: 11,
			src: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
			alt: "Person 11",
		},
		{
			id: 12,
			src: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
			alt: "Person 12",
		},
		{
			id: 13,
			src: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
			alt: "Person 13",
		},
		{
			id: 14,
			src: "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
			alt: "Person 14",
		},
		{
			id: 15,
			src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
			alt: "Person 15",
		},
	];

	// Function to handle the search query change
	const handleSearchChange = (event) => {
		setSearchQuery(event.target.value.toLowerCase());
	};

	// Filter images based on the search query (case insensitive)
	const filteredImages = images.filter((image) =>
		image.alt.toLowerCase().includes(searchQuery)
	);

	return (
		<div className="min-h-screen bg-white">
			<HeaderMenu />
			<div className="w-[75%] m-auto mt-8">
				<div className="text-center text-4xl font-bold text-custom-red">Faces</div>
				<Box sx={{ borderBottom: 1, borderColor: "divider" }} className="flex justify-end">
					<TextField
						id="input-with-icon-textfield"
						className="!rounded-lg px-4 bg-gray-100 !mb-2"
						value={searchQuery} // Set value to search query
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
						placeholder="Search"
					/>
				</Box>

				<div className="!w-[80%] m-auto my-8">
					<div className="grid grid-cols-5 gap-4">
						{filteredImages.map((face) => (
							<div
								key={face.id}
								className="flex justify-center items-center flex-col cursor-pointer"
							>
								<Avatar
									alt={face.alt}
									src={face.src}
									sx={{ width: 90, height: 90 }}
									className="border-2 border-gray-300 m-4"
								/>
								<span className="text-sm text-center text-custom-red">
                  {face.alt}
                </span>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default FaceId;
