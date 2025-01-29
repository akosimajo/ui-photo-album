// App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login.jsx";
import ForgotPassword from "./components/ForgotPassword";
import Register from "./components/Register";
import Dashboard from "./components/pages/Dashboard";
import FaceId from "./components/pages/FaceId";
import Profile from "./components/pages/Profile";
import Albums from "./components/pages/Albums";
import MyPhotos from "./components/pages/MyPhotos";
import Tags from "./components/pages/Tags";
import Upload from "./components/pages/Upload";

// Define route paths as constants
const ROUTES = {
	LOGIN: "/",
	FORGOT_PASSWORD: "/forgot-password",
	REGISTER: "/register",
	DASHBOARD: "/dashboard",
	PROFILE: "/profile",
	FACES: "/faces",
	ALBUMS: "/albums",
	MY_PHOTOS: "/myphotos",
	TAGS: "/tags",
	UPLOAD: "/upload",
};

// Define all routes in an array
const routes = [
	{ path: ROUTES.LOGIN, element: <Login /> },
	{ path: ROUTES.FORGOT_PASSWORD, element: <ForgotPassword /> },
	{ path: ROUTES.REGISTER, element: <Register /> },
	{ path: ROUTES.DASHBOARD, element: <Dashboard /> },
	{ path: ROUTES.PROFILE, element: <Profile /> },
	{ path: ROUTES.FACES, element: <FaceId /> },
	{ path: ROUTES.ALBUMS, element: <Albums /> },
	{ path: ROUTES.MY_PHOTOS, element: <MyPhotos /> },
	{ path: ROUTES.TAGS, element: <Tags /> },
	{ path: ROUTES.UPLOAD, element: <Upload /> },
];

function App() {
	return (
		<Router>
			<Routes>
				{routes.map((route, index) => (
					<Route key={index} path={route.path} element={route.element} />
				))}
			</Routes>
		</Router>
	);
}

export default App;