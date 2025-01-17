import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
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

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Login/>}/>
				<Route path="/forgot-password" element={<ForgotPassword/>}/>
				<Route path="/register" element={<Register/>}/>
				<Route path="/dashboard" element={<Dashboard/>}/>
				<Route path="/profile" element={<Profile/>}/>
				<Route path="/faces" element={<FaceId/>}/>
				<Route path="/albums" element={<Albums/>}/>
				<Route path="/myphotos" element={<MyPhotos/>}/>
				<Route path="/tags" element={<Tags/>}/>
				<Route path="/upload" element={<Upload/>}/>
			</Routes>
		</Router>
	);
}

export default App;

// import React, { Suspense, lazy } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//
// // Lazy load components for better performance
// const Login = lazy(() => import("./components/Login"));
// const ForgotPassword = lazy(() => import("./components/ForgotPassword"));
// const Register = lazy(() => import("./components/Register"));
// const Dashboard = lazy(() => import("./components/pages/Dashboard"));
// const FaceId = lazy(() => import("./components/pages/FaceId"));
// const Profile = lazy(() => import("./components/pages/Profile"));
// const Albums = lazy(() => import("./components/pages/Albums"));
// const MyPhotos = lazy(() => import("./components/pages/MyPhotos"));
// const Tags = lazy(() => import("./components/pages/Tags"));
// const Upload = lazy(() => import("./components/pages/Upload"));
//
// const routes = [
//   { path: "/", element: <Login /> },
//   { path: "/forgot-password", element: <ForgotPassword /> },
//   { path: "/register", element: <Register /> },
//   { path: "/dashboard", element: <Dashboard /> },
//   { path: "/profile", element: <Profile /> },
//   { path: "/faces", element: <FaceId /> },
//   { path: "/albums", element: <Albums /> },
//   { path: "/myphotos", element: <MyPhotos /> },
//   { path: "/tags", element: <Tags /> },
//   { path: "/upload", element: <Upload /> },
// ];
//
// function App() {
//   return (
//       <Router>
//         <Suspense fallback={<div>Loading...</div>}>
//           <Routes>
//             {routes.map(({ path, element }, index) => (
//                 <Route key={index} path={path} element={element} />
//             ))}
//           </Routes>
//         </Suspense>
//       </Router>
//   );
// }
//
// export default App;
