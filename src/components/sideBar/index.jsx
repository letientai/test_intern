import React from "react";
import "./SideBar.scss";
export const SideBar = () => {
  const data = [
    {title : "Home"},
    {title : "Service"},
    {title : "News"},
    {title : "Blog"},
    {title : "Contact"},
  ];
  return (
    <div className="SideBar">
      {data.map((item, index) => (
        <div className="item" key={index}>
          <p>{item.title}</p>
        </div>
      ))}

    </div>
  );
};
