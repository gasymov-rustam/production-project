import { FC } from "react";
import { AppLink, AppLinkTheme, classNames } from "../../../shared";
import { ThemeSwitcher } from "../../ThemeSwitcher";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = (prop) => {
  const { className } = prop;

  return (
    <div className={classNames({ cls: cls.Navbar, additional: [className] })}>
      <ThemeSwitcher />

      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={"/"} className={cls.mainLink}>
          Main
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>
          About
        </AppLink>
      </div>
    </div>
  );
};
