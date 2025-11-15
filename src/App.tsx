import "./App.css";
import Nav from "./Nav";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <Nav />
      <div>This is the App page</div>
      <Outlet />
    </>
  );
}

export default App;
