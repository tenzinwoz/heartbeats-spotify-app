import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import LogoutModal from "../logoutModal/LogoutModal";
import logo from "../../assets/images/logo.png";
import axios from "axios";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";
import DropDopwnImg from "../../assets/images/dropdown.png";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey);

  return (
    <div
      className="d-flex justify-content-between"
      onClick={decoratedOnClick}
      type="button"
      style={{ padding: "10px" }}
    >
      <p>{children}</p>
      <img src={DropDopwnImg} alt="dropdown" />
    </div>
  );
}

export default function Sidebar() {
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [logout, setLogout] = useState(false);
  const [menuList, setMenuList] = useState([]);

  let location = useLocation();

  useEffect(() => {
    setActiveMenu(location.pathname);
  }, [location]);

  useEffect(() => {
    async function handleMenuStructure() {
      const res = await axios.get(`https://api.spotify.com/v1/me/playlists`);
      const subMenu = res?.data?.items.map((item) => ({
        path: `playlist/${item?.id}`,
        text: item?.name,
      }));
      const menu = [
        { path: "/dashboard", text: "Home", icon: "Icon" },
        {
          path: "/",
          text: "Playlist",
          icon: "Icon",
          submenu: subMenu,
        },
        { path: "/dashboard/about", text: "About Us", icon: "Icon" },
      ];
      setMenuList(menu);
    }
    handleMenuStructure();
  }, []);

  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="Sound" />
      </div>
      <hr className="divider" />
      <div className="menu">
        <ul>
          {menuList.map((menu, index) => (
            <li
              key={index}
              className={`${activeMenu === menu.path ? "active" : ""}`}
            >
              {menu.submenu ? (
                <div className="dropdown ">
                  <Accordion>
                    <CustomToggle eventKey="0">{menu.text}</CustomToggle>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        {menu.submenu.map((subMenu, subIndex) => (
                          <Link
                            key={subIndex}
                            to={`${subMenu.path}`}
                            style={{ marginLeft: "10px" }}
                          >
                            {subMenu.text}
                          </Link>
                        ))}
                      </Card.Body>
                    </Accordion.Collapse>
                  </Accordion>
                </div>
              ) : (
                <Link to={`${menu.path}`}>{menu.text}</Link>
              )}
            </li>
          ))}
          <Link onClick={() => setLogout(true)}>Logout</Link>
        </ul>
      </div>
      <LogoutModal show={logout} onHide={() => setLogout(false)} />
    </div>
  );
}
