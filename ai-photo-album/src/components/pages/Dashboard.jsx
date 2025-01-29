import { Avatar, Box, Button, Card, CardContent, Typography } from "@mui/material";
import Images from "./Images";
import HeaderMenu from "./HeaderMenu";

const Dashboard = () => {
	const albums = [
		"Christmas Party 2023",
		"Summer Outing 2024",
		"Outreach 2024",
		"At the Room 202",
		"Dinner at 7/11",
	];
	const tags = [
		"Investiture",
		"Outreach program",
		"Etesep defense",
		"Graduation 2022",
	];
	const faces = ["Leogin", "Majo", "Mykel", "John", "Patrick", "Alfred"];

	const splitToColumn = (arr, chunkSize) => {
		const result = [];
		for (let i = 0; i < arr.length; i += chunkSize) {
			result.push(arr.slice(i, i + chunkSize));
		}
		return result;
	};

	const faceRows = splitToColumn(faces, 3);

	const buttonStyles = {
		backgroundColor: "#872434",
		"&:hover": { backgroundColor: "#7f1d1d" },
		color: "#fff",
	};

	const CardSection = ({ title, items, renderItem }) => (
		<Card className="bg-white shadow-lg !rounded-lg">
			<CardContent>
				<Button fullWidth type="submit" variant="contained" sx={buttonStyles}>
					{title}
				</Button>
				{items.map((item, index) => (
					<Box key={index}>{renderItem(item)}</Box>
				))}
			</CardContent>
		</Card>
	);

	return (
		<div className="min-h-screen bg-white">
			<HeaderMenu />
			<Images />
			<div className="p-4 grid grid-cols-1 lg:grid-cols-4 gap-12 w-[75%] max-w-full" style={{ margin: "0px auto" }}>
				{/* Albums */}
				<CardSection
					title="Albums"
					items={albums}
					renderItem={(album) => (
						<Typography variant="body2" className="p-1">
							{album}
						</Typography>
					)}
				/>

				{/* Tags */}
				<CardSection
					title="Tags"
					items={tags}
					renderItem={(tag) => (
						<Typography variant="body2" className="p-1">
							{tag}
						</Typography>
					)}
				/>

				{/* Faces */}
				<Card className="bg-white shadow-lg !rounded-lg">
					<CardContent>
						<Button fullWidth type="submit" variant="contained" sx={buttonStyles}>
							Faces
						</Button>
						{faceRows.map((row, rowIndex) => (
							<Box key={rowIndex} className="flex justify-around mb-2 pt-2">
								{row.map((face, index) => (
									<div key={index} className="flex flex-col items-center">
										<Avatar className="bg-red-800">{face[0]}</Avatar>
										<Typography variant="caption">{face}</Typography>
									</div>
								))}
							</Box>
						))}
					</CardContent>
				</Card>

				{/* Upload Photos */}
				<Card className="bg-white shadow-lg !rounded-lg">
					<CardContent>
						<Button fullWidth type="submit" variant="contained" sx={buttonStyles}>
							Upload Photos
						</Button>
					</CardContent>
				</Card>
			</div>
		</div>
	);
};

export default Dashboard;