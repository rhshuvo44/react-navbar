import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./Component/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;
