import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { AboutPage, MainPage } from "../pages";
import { classNames } from "../shared";
import { Navbar, Sidebar } from "../widgets";

import { AppRouter, useTheme } from "./providers";
import "./styles/index.scss";

export const App = () => {
  const { theme } = useTheme();

  return (
    <div
      className={classNames({
        cls: "app",
        additional: [theme],
      })}
    >
      <Navbar />

      <div className="content-page">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
};
