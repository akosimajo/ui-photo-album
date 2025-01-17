import {Box, IconButton} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function MyPhotos() {
	// Sample images data
	const images = [
		{
			id: 1,
			name: "Sample Image 1",
			url: "https://picsum.photos/150?random=1",
		},
		{
			id: 2,
			name: "Sample Image 2",
			url: "https://picsum.photos/150?random=2",
		},
		{
			id: 3,
			name: "Sample Image 3",
			url: "https://picsum.photos/150?random=3",
		},
	];

	return (
		<div className="min-h-screen bg-white">
			<div className="w-[75%] m-auto mt-8">
				<div className="text-center text-4xl font-bold text-custom-red">
					NAME HERE
				</div>

				{/* Back Icon */}
				<Box className="mt-4">
					<IconButton
						onClick={() => navigate(-1)} // This will navigate back
						className="!text-custom-red !p-2"
					>
						<ArrowBackIcon/>
						Back
					</IconButton>
				</Box>

				<div className="grid grid-cols-4 gap-2 p-4">
					{images.map((image) => (
						<div key={image.id} className="relative p-2 rounded">
							<img
								src={image.url}
								alt={image.name}
								className="w-[250px] h-[150px] object-cover rounded"
							/>
							<span className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white text-xs p-1">
                {image.name}
              </span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default MyPhotos;
