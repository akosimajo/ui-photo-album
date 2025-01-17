import {useState} from "react";
import {useNavigate} from "react-router-dom";
import logo from "../../assets/ublogo.png";
import {Avatar, Menu, MenuItem} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function HeaderMenu() {
	const navigate = useNavigate();
	const [anchorEl, setAnchorEl] = useState();
	const open = Boolean(anchorEl);

	const handleProfileClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = (type) => {
		switch (type) {
			case "home":
				navigate("/dashboard");
				break;
			case "tags":
				navigate("/tags");
				break;
			case "profile":
				navigate("/profile");
				break;
			case "albums":
				navigate("/albums");
				break;
			case "faces":
				navigate("/faces");
				break;
			case "logout":
				navigate("/");
				break;
			default:
				break;
		}
		setAnchorEl(null);
	};

	return (
		<header className="bg-custom-maroon text-white py-3 flex justify-between items-center">
			<div className="flex items-center">
				<img src={logo} alt="University Logo" className="w-12 h-12 ms-5"/>
				<span className="text-xl ms-5">University of Batangas</span>
			</div>
			<Avatar
				className="bg-black cursor-pointer mr-4"
				onClick={handleProfileClick}
				sx={{bgcolor: "black"}}
			>
				<AccountCircleIcon/>
			</Avatar>
			<Menu
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "right",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
				sx={{
					"& .MuiPaper-root": {
						backgroundColor: "#f9fafb",
						boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
						borderRadius: "12px",
						padding: "8px",
					},
				}}
			>
				<MenuItem
					sx={{
						padding: "10px 20px",
						fontSize: "16px",
						"&:hover": {
							borderBottom: "1px solid #991b1b",
						},
					}}
					onClick={() => handleClose("home")}
				>
					{" "}
					Home
				</MenuItem>
				<MenuItem
					sx={{
						padding: "10px 20px",
						fontSize: "16px",
						"&:hover": {
							borderBottom: "1px solid #991b1b",
						},
					}}
					onClick={() => handleClose("profile")}
				>
					{" "}
					Profile
				</MenuItem>
				<MenuItem
					sx={{
						padding: "10px 20px",
						fontSize: "16px",
						"&:hover": {
							borderBottom: "1px solid #991b1b",
						},
					}}
					onClick={() => handleClose("tags")}
				>
					{" "}
					Tags
				</MenuItem>
				<MenuItem
					sx={{
						padding: "10px 20px",
						fontSize: "16px",
						"&:hover": {
							borderBottom: "1px solid #991b1b",
						},
					}}
					onClick={() => handleClose("albums")}
				>
					{" "}
					Albums
				</MenuItem>
				<MenuItem
					sx={{
						padding: "10px 20px",
						fontSize: "16px",
						"&:hover": {
							borderBottom: "1px solid #991b1b",
						},
					}}
					onClick={() => handleClose("faces")}
				>
					{" "}
					Faces
				</MenuItem>
				<MenuItem
					sx={{
						padding: "10px 20px",
						fontSize: "16px",
						"&:hover": {
							borderBottom: "1px solid #991b1b",
						},
					}}
					onClick={() => handleClose("logout")}
				>
					{" "}
					Logout
				</MenuItem>
			</Menu>
		</header>
	);
}

export default HeaderMenu;
