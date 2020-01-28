import React from 'react';
import Button from '@components/Button';

import '@styles/pages/jobs/JobsInsert.scss';

export interface JobProps {
  vacancy: string;
  condition: string;
  text_conditional: string;
  salary: string;
  functional: string;
  text_functional: string;
  button: string;
}

const JobsInsert = (props: JobProps) => {
  const onSend = () => {};

  return (
    <div className="jobs-insert">
      <div className="jobs-insert-block">
        <p className="jobs-insert-block-vacancy">{props.vacancy}</p>
        <div className="jobs-insert-block-line" />
        <p className="jobs-insert-block-title">{props.condition}</p>
        <p className="jobs-insert-block-subtitle">{props.text_conditional}</p>
        <p className="jobs-insert-block-salary">{props.salary}</p>
        <p className="jobs-insert-block-title">{props.functional}</p>
        <p className="jobs-insert-block-subtitle">{props.text_functional}</p>
        <a href="mailto:an.newyork.kiev@gmail.com">
          <Button title={props.button} onClick={onSend} />
        </a>
      </div>
    </div>
  );
};

export default JobsInsert;
