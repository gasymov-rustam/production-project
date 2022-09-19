import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Button, classNames, ThemeButton } from "../../../shared";
import cls from "./LangSwitcher.module.scss";

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = (props) => {
  const { t, i18n } = useTranslation();
  const { className } = props;

  const toggle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames({ cls: cls.LangSwitcher, additional: [className] })}
      onClick={toggle}
    >
      {t("LANG")}
    </Button>
  );
};
