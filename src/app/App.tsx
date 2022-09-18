import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { AboutPage, MainPage } from "../pages";
import { classNames } from "../shared";
import { Navbar } from "../widgets";

import { AppRouter, useTheme } from "./providers";
import "./styles/index.scss";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={classNames({
        cls: "app",
        additional: [theme],
      })}
    >
      <Navbar />
      <AppRouter />
      <button onClick={toggleTheme}>TOGGLE</button>
    </div>
  );
};
