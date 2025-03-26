import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";
import Cookies from "js-cookie";

const App = () => {
  console.log(import.meta.env.VITE_BACKEND_URI);

  return (
    <>
      <Header />
      <Outlet />
      {Cookies.get("token") && <Footer />}
    </>
  );
};

export default App;
