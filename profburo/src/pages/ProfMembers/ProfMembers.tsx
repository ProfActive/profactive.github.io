import React, { FunctionComponent } from "react";
import Header from "../../components/Header/Header";
import MembersCard from "../../components/MembersCard/MembersCard";
import { members } from "../../constants/ProfMembers";

import "./ProfMembers.styles.css";

const ProfMembers: FunctionComponent = () => {
  return (
    <>
      <Header
        pageName="Команда профбюро"
        caption="факультету математики та інформатики"
      />
      <div className="container">
        {members.map((member) => (
          <MembersCard member={member} key={member.name} />
        ))}
      </div>
    </>
  );
};

export default ProfMembers;
