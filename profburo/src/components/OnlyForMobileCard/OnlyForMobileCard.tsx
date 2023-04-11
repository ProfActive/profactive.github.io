import React, { FunctionComponent } from "react";

import "./OnlyForMobileCard.styles.css";

const OnlyForMobileCard: FunctionComponent = () => {
  return (
    <div className="only-for-mobile-card-wrapper">
      <div className="only-for-mobile-card">
        <h2>Сторінку не знайдено</h2>
        <p>Сайт працює тільки на мобільних пристроях</p>
      </div>
    </div>
  );
};

export default OnlyForMobileCard;
