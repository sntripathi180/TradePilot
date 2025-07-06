import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handelMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handelProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";
  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "5%" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handelMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              //   onClick={() => handelMenuClick(1)}
            >
              <p
              //   className={selectedMenu === 1 ? activeMenuClass : menuClass}
              >
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              // onClick={()}
            >
              <p>Holdings</p>
            </Link>
          </li>
          <li>
            <Link 
            style={{ textDecoration: "none" }}
             to="/positions">
              <p>Positions</p>
            </Link>
          </li>
          <li>
            <Link 
            style={{textDecoration:"none"}}
            to="/funds"

            >
              <p>Funds</p>
            </Link>
          </li>
          <li>
            <Link 
            style={{textDecoration:"none"}}
            to="/apps"
            >
              <p>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile">
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
