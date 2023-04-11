import { FunctionComponent } from "react";

import "./RightInformCard.styles.css";

interface Props {
  step: number;
  children?: JSX.Element;
}

const RightInformCard: FunctionComponent<Props> = ({ step, children }) => {
  return (
    <div className="instruction-card-r">
      <div className="card-header-r">
        <div className="circle">
          <div className="number">{step}</div>
          <p>крок</p>
        </div>
      </div>
      <div className="card-content">{children}</div>
    </div>
  );
};

export default RightInformCard;
