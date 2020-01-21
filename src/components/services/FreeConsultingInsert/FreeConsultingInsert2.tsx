import React, { useEffect, useState } from 'react';

import '@styles/pages/services/FreeConsultingInsert/FreeConsultingInsert2.scss';

interface Props {
  subtitle?: string;
}

const FreeConsultingInsert2 = (props: Props) => {
  return (
    <div className="free-consulting-insert2">
      <div className="free-consulting-insert2-text">
        <p className="free-consulting-insert2-subtitle">{props.subtitle}</p>
      </div>
    </div>
  );
};

export default FreeConsultingInsert2;
