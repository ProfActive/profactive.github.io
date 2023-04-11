import { FunctionComponent } from "react";

import "./LeftInformCard.styles.css";

interface LeftInformCardProps {
  step: number;
  children?: JSX.Element;
}

const LeftInformCard: FunctionComponent<LeftInformCardProps> = ({
  step,
  children,
}) => {
  return (
    <div className="instruction-card">
      <div className="card-header">
        <div className="circle">
          <div className="number">{step}</div>
          <p>крок</p>
        </div>
      </div>
      <div className="card-content">{children}</div>
    </div>
  );
};

export default LeftInformCard;
