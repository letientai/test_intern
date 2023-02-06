import React from "react";
import "./ContentHome.scss";
import logo from "../../assets/images/logoNCC 1.png";
import cssIcon from "../../assets/images/css-icon 1.png";
import htmlIcon from "../../assets/images/html-icon 1.png";
import urlIcon from "../../assets/images/url-icon 1.png";

export const ContentHome = () => {
  const data = [
    {
      title: "Lorem ipsum dolor sit asmet?",
      img: cssIcon,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at",
      bt: " ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis",
    },
    {
      title: "Lorem ipsum dolor sit asmet?",
      img: htmlIcon,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at",
      bt: " ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis",
    },
    {
      title: "Lorem ipsum dolor sit asmet?",
      img: urlIcon,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at.",
      bt: " ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis",
    },
  ];
  return (
    <div className="contentHome">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="content">
        <div className="title">Lorem ipsum dolor sit asmet?</div>
        <div className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique
          consequat placerat. Vestibulum auctor pellentesque sem, eu posuere
          erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis,
          ligula in mattis sodales, augue justo tristique nulla, sed lacinia
          ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh
          auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque
          suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet
          luctus augue tristique eu. Donec vulputate odio neque, sed semper
          turpis pellentesque a.
        </div>
      </div>
      <div className="list_item">
        {data.map((item, index) => (
          <div className="card" key={index}>
            <div className="card_title">{item.title}</div>
            <div className="card_content">
              <img src={item.img} alt="" />
              <div className="text">{item.text}</div>
            </div>
            <div className="card_bt">{item.bt}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
