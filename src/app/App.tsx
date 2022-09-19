import { Suspense } from "react";
import { classNames } from "../shared";
import { Navbar, Sidebar } from "../widgets";
import { useTranslation } from "react-i18next";
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
      <Suspense fallback="">
        <Navbar />

        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
