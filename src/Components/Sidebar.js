import React, { useState } from "react";
import "../App.css";
import { Sidebardata } from "./Sidebardata";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <div className="Sidebar">
      <ul className="sidebarlist">
        {Sidebardata.map((val, index) => (
          <div key={index}>

            <li
              className="row"
              onClick={() => {
                if (val.submenu) {
                  setOpenDropdown(openDropdown === index ? null : index);
                } else {
                  navigate(val.link)
                }
              }}
            >
              <div className="Icon">{val.icon}</div>
              <div>{val.title}</div>
              {val.submenu && <span className="arrow">▼</span>}
            </li>

            {val.submenu && openDropdown === index && (
              <ul className="dropdown">
                {val.submenu.map((sub, i) => (
                  <li
                    key={i}
                    className="dropdown-row"
                    onClick={() => {
                      navigate(sub.link)

                    }}
                  >
                    <span className="Icon" >{sub.icon}</span>
                    <div className="submenu_title">{sub.title}</div>
                  </li>
                ))}
              </ul>
            )}

          </div>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
