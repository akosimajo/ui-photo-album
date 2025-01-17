import {Box, Button, TextField, Typography} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import Header from "./Header";
import Images from "./pages/Images";
import {useState} from "react";
import { toast } from 'react-hot-toast';

const Login = () => {
	const navigate = useNavigate();
	    const  [formData, setFormData] = useState({
		    email: "",
		    password: "",
	    });
		const [errors, setErrors] = useState({
			email:"",
			password:"",
		});

		const handleInputChange = (e) => {
			const {name, value} = e.target;
			setFormData({
				...formData,
				[name]: value,
			});
		};

		const validateForm = () => {
			let isValid = true;
			let newErrors = { email: "", password: ""};

			if (!formData.email) {
				newErrors.email = "Email address is required";
				isValid = false;
			} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
				newErrors.email = "Email address format is invalid"
				isValid = false;
			}
			if (!formData.password) {
				newErrors.password = "Password is required";
				isValid = false;
			} else if (formData.password.length < 6) {
				newErrors.password = "Password must be at least 6 characters.";
				isValid = false;
			}

			setErrors(newErrors);
			return isValid;

		};


		const handleSubmit = async (e) => {
			e.preventDefault();

			if (validateForm()) {
				const isAuthenticated = await authenticateUser(formData.email, formData.password);

				if (isAuthenticated) {
					localStorage.setItem('token', 'yourAuthToken'); // store authentication token

					console.log("Form Submitted!", formData);

					toast.success("Login successful!");

					// Navigate to the dashboard after logging in
					setTimeout(() => {
						navigate('/dashboard');
					}, 1000);
				} else {
					localStorage.removeItem('token');
					console.error('Login failed');
					toast.error("Login failed");
				}
			}

		};
		// hardcode log in user
		const authenticateUser = async (email, password) => {
			return email === 'admin@ub.edu.ph' && password === 'password';
		};


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
				{/* Login Form Modal */}
				<div className="w-full max-w-md p-8 bg-white bg-opacity-90 rounded-lg shadow-md backdrop-blur-sm">
					<Typography
						variant="h5"
						className="text-center pb-4 text-custom-maroon"
					>
						Log In
					</Typography>
					<Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
						<div className="space-y-4">
							<TextField
								label="Email"
								name="email"
								variant="outlined"
								placeholder="username@ub.edu.ph"
								fullWidth
								value={formData.email}
								onChange={handleInputChange}
								error={!!errors.email}
								helperText={errors.email}
							/>
							<TextField
								label="Password"
								name="password"
								variant="outlined"
								placeholder="password"
								fullWidth
								value={formData.password}
								onChange={handleInputChange}
								error={!!errors.password}
								helperText={errors.password}
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
								color: "#fff",
								marginTop: "10px",
							}}
						>
							Sign In
						</Button>
					</Box>

					{/* Forgot password and Register Links */}
					<div className="flex justify-between text-sm mt-4">
						<Link
							to="/forgot-password"
							className="text-gray-600 hover:underline"
						>
							Forgot password?
						</Link>
						<Link to="/register" className="text-gray-600 hover:underline">
							Register
						</Link>
					</div>
				</div>

				{/* Title Below the Login Form with Subtle Blur Effect */}
				<div className="mt-6 bg-white/20 backdrop-blur-sm p-2 rounded-lg z-20">
					<Typography variant="h3" className="text-center text-custom-maroon">
						University of Batangas
						<br/>
						Legacy
					</Typography>
				</div>
			</div>
		</div>
	);
};

export default Login;
