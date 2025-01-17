import {Box, Button, TextField, Typography} from "@mui/material";
import Header from "./Header";
import Images from "./pages/Images.jsx";

const ForgotPassword = () => {
	return (
		<div className="min-h-screen flex flex-col relative overflow-hidden">
			{/* Full-screen background images */}
			<div className="absolute inset-0 z-0">
				<Header/>
				<Images/>
			</div>

			{/* Overlay for Subtle Blur Effect */}
			<div className="absolute inset-0 bg-white/20 backdrop-blur-sm z-10"/>

			{/* Centered Login Form with Subtle Blur Effect */}
			<div className="flex-grow flex flex-col items-center justify-center relative z-20">
				{/*Forgot password form*/}
				<div className="z-10 w-full max-w-md p-8 bg-white bg-opacity-95 rounded-lg shadow-md">
					<Typography
						variant="h5"
						className="text-center pb-4 text-custom-maroon"
					>
						Reset your password
					</Typography>
					<Box component="form" NoValidate autoComplete="off">
						<div className="space-y-4">
							<TextField
								label="Email"
								name="email"
								variant="outlined"
								fullWidth
							/>
						</div>
						<Button
							fullWidth
							type="submit"
							variant="contained"
							sx={{
								backgroundColor: "#872434",
								"&:hover": {
									backgroundColor: "#7f1d1d",
								},
								color: "#fff", // White text color
								marginTop: "10px",
							}}
						>
							Submit
						</Button>
					</Box>
					{/*Back to Sign in*/}
					<div className="flex justify-center text-sm mt-4">
						<a href="/" className="text-custom-maroon hover:underline">
							Sign in
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ForgotPassword;
