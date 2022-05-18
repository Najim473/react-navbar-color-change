import { useEffect, useState } from "react";
import SquareDiv from "../SquareDiv/SquareDiv";
import "./Nav.Style.scss";
function Navbar() {
  let red = "text";
  let black = "logo";
  const [navbar, setNavbar] = useState(false);
  const [navlogo, setNavlogo] = useState(black);
  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });
  const changeLogo = () => {
    if (window.scrollY >= 60) {
      setNavlogo(red);
    } else {
      setNavlogo(black);
    }
  };
  useEffect(() => {
    changeLogo();
    // adding the event when scroll change Logo
    window.addEventListener("scroll", changeLogo);
  });

  return (
    <div>
      <nav className={navbar ? "navbar active" : "navbar"}>
        <div className="wrapper">
          <div className={navlogo}>Nav</div>
          <ul>
            <li>About</li>
            <li>Feature</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
      <SquareDiv />
      <SquareDiv />
      <SquareDiv />
      <SquareDiv />
    </div>
  );
}
export default Navbar;
