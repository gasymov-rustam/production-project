import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { AboutPage, MainPage } from "../pages";
import { classNames } from "../shared";

import { AppRouter, useTheme } from "./providers";
import "./styles/index.scss";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={classNames({
        regularClassName: "app",
        additional: [theme],
      })}
    >
      <button onClick={toggleTheme}>TOGGLE</button>

      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О сайте</Link>

      <AppRouter />
    </div>
  );
};
