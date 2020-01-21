import React, { useEffect, useState } from 'react';

import '@styles/pages/team/TeamInsert.scss';

interface Props {
  title?: string;
  subtitle?: string;
}

const TeamInsert = (props: Props) => {
  return (
    <div className="team-insert">
      <div className="team-insert-text">
        <div className="team-insert-text-title">{props.title}</div>
        <p className="team-insert-text-subtitle">{props.subtitle}</p>
      </div>
    </div>
  );
};

export default TeamInsert;
