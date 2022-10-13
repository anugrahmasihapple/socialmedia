import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
	//const user = localStorage.getItem("token");

	return (
		<Routes>
			<Route path="/main"  element={<Main />} />
			<Route path="/signup"  element={<Signup />} />
			<Route path="/"  element={<Login />} />
			{/* <Route path="/" element={<Navigate replace to="/login" />} /> */}
		</Routes>
	);
}

export default App;