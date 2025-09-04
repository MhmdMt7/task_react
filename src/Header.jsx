import "./Header.css";
import logo from "./assets/logo.png";
export default function Header() {
  return (
    <div className=" dad col-12 ">
      <header className=" container col-12 d-flex align-items-center justify-content-around p-4 gap-3">
        <img src={logo} alt="logo" />
        {/* <h1 className="">medo</h1> */}
        <nav className=" d-flex align-items-center justify-content-center gap-5">
          <a
            className=" text-decoration-none text-white text-white-500"
            href="#"
          >
            HOME
          </a>
          <a
            className=" text-decoration-none text-white text-white-500"
            href="#"
          >
            HEADPHONES
          </a>
          <a
            className=" text-decoration-none text-white text-white-500"
            href="#"
          >
            SPEAKERS
          </a>
          <a
            className=" text-decoration-none text-white text-white-500"
            href="#"
          >
            EARPHONES
          </a>
        </nav>
        <i className="bi bi-cart"></i>
      </header>
      <div className=" spess col-12 "></div>
    </div>
  );
}



