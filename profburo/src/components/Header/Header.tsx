import { FunctionComponent } from "react";

import "./Header.styles.css";

interface IProps {
  pageName: string;
  caption: string;
}

const Header: FunctionComponent<IProps> = ({ pageName, caption }) => {
  return (
    <div className="header">
      <div className="container">
        <div className="header-inner">
          <div className="header-ic">
            <img src="img/cat.svg" alt="" />
          </div>
          <h1 className="header-title">
            {pageName}
            <p>{caption}</p>
          </h1>
          <div className="header-ic">
            <img src="img/fmi.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
