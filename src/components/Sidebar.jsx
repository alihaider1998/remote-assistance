import { useState } from "react";
import { Link } from "react-router-dom";
import {
  LeftChevron,
  RightChevron,
  BussSvg,
  MapSvg,
  BellSvg,
  Logout,
} from "../assets/svgs/index";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className={`bg-gray-800 text-white transition-all duration-300 ${
        isOpen ? "w-48" : "w-13"
      }`}
    >
      <div className="p-4">
        <button onClick={toggleSidebar} className="mb-4">
          {isOpen ? <LeftChevron /> : <RightChevron />}
        </button>
        <nav>
          <ul className="mt-5">
            <li className="px-2 py-3 rounded-lg hover:bg-gray-700">
              <Link
                to="/"
                className={`flex items-center ${
                  isOpen ? "justify-start" : "justify-center"
                }`}
              >
                <MapSvg />
                <span className={`${isOpen ? "ml-2" : "hidden"}`}>Map</span>
              </Link>
            </li>
            <li className="px-2 py-3 rounded-lg hover:bg-gray-700">
              <Link
                to="/alerts"
                className={`flex items-center  ${
                  isOpen ? "justify-start" : "justify-center"
                }`}
              >
                <BellSvg />
                <span className={`${isOpen ? "ml-2" : "hidden"}`}>Alerts</span>
              </Link>
            </li>
            <li className="px-2 py-3 rounded-lg hover:bg-gray-700">
              <Link
                to="/vehicles"
                className={`flex items-center  ${
                  isOpen ? "justify-start" : "justify-center"
                }`}
              >
                <BussSvg />
                <span className={`${isOpen ? "ml-2" : "hidden"}`}>
                  Vehicles
                </span>
              </Link>
            </li>
            <li
              onClick={handleSignOut}
              className="px-2 py-3 rounded-lg hover:bg-gray-700"
            >
              <Link
                to=""
                className={`flex items-center  ${
                  isOpen ? "justify-start" : "justify-center"
                }`}
              >
                <Logout />
                <span className={`${isOpen ? "ml-2" : "hidden"}`}>Logout</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
