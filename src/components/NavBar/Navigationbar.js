import { Link } from "react-router-dom";
import MobileNavBarList from "./MobileNavBarList";
import NavBarList from "./NavBarList";

export default function Navigationbar() {
  return (
    <div className="!sticky top-0 bg-gray-100 z-40">
      <nav className="">
        <div className="px-1 mx-auto border">
          <div className="flex justify-between px-4">
            <Link to={"/#home"} id="navLogo">
              <img src="assets/Logo.png" className="w-64 h-16" />
            </Link>
            <NavBarList />
          </div>
          <MobileNavBarList />
        </div>
      </nav>
    </div>
  );
}
