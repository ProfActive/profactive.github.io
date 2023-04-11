import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

import "./LinkButton.styles.css";

interface LinkButtonProps {
  linkTo: string;
  caption: string;

  disabled?: boolean;
  isNew?: boolean;
  blank?: boolean;
}

const LinkButton: FunctionComponent<LinkButtonProps> = ({
  linkTo,
  caption,
  disabled,
  isNew,
  blank,
}) => {
  const classList = `link-card ${disabled && "disables"}`;

  return (
    <Link to={disabled ? "#" : linkTo} target={blank ? "_blank" : undefined}>
      <div className={classList}>
        {disabled && <p style={{ color: "red" }}>(скоро)</p>}
        {isNew && <p style={{ color: "green" }}>(new)</p>}
        <h1>{caption}</h1>
      </div>
    </Link>
  );
};

export default LinkButton;
