import React from "react";
import NavLink from "./NavLink";

const MenuToggle = ({ links }) => {
  return (
    <ui className="flex flex-col py-4 items-center list-none">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ui>
  );
};
export default MenuToggle;
