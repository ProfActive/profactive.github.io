import React, { FunctionComponent } from "react";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";

import "./Home.styles.css";
import LinkButton from "../../components/LinkButton/LinkButton";
import { Routers } from "../../types/Routers";

const Home: FunctionComponent = () => {
  return (
    <div className="home-wrapper">
      <Header pageName="Факультет" caption="математики та інформатики" />
      <div className="divs">
        <LinkButton linkTo={Routers.Eduroam} caption="Eduroam" />
        <LinkButton linkTo={Routers.Prof} caption="Команда профбюро" />
        <LinkButton
          linkTo={Routers.blank}
          caption="Склад студпарламенту"
          disabled
        />
        <LinkButton
          linkTo={Routers.MathDepartmentSite}
          caption="Сайт факультету"
          blank
        />
        <LinkButton linkTo={Routers.YouTube} caption="YouTube" blank />
        <LinkButton linkTo={Routers.Discord} caption="Discord" />
      </div>
    </div>
  );
};

export default Home;
