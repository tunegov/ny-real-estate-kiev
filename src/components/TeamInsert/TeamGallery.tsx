import React, { useEffect, useState } from 'react';

import './node_modules/@styles/pages/team/TeamGallery.scss';

interface Props {
  img1?: string;
  img2?: string;
  img3?: string;
  img4?: string;
}

const TeamMember = () => {};

const TeamGallery = (props: Props) => {
  return (
    <div className="cssSlider">
      <ul className="slides">
        <li id="slide1">
          <img src="/static/images/PhotoWorkers/worker1.png" alt="" />
          <h3>ФИО</h3>
          <h5>Основатель компании. Должность</h5>
        </li>
        <li id="slide2">
          <img src="/static/images/PhotoWorkers/worker2.png" alt="" />
          <h3>ФИО</h3>
          <h5>Основатель компании. Должность</h5>
        </li>
        <li id="slide3">
          <img src="/static/images/PhotoWorkers/worker3.png" alt="" />
          <h3>ФИО</h3>
          <h5>Основатель компанwqeqwии. Должность</h5>
        </li>
      </ul>
      <ul className="thumbnails">
        <li>
          <a href="#slide1">
            <img src="/static/images/PhotoWorkers/worker1.png" />
          </a>
          <h3>ФИО</h3>
        </li>
        <li>
          <a href="#slide2">
            <img src="/static/images/PhotoWorkers/worker2.png" />
          </a>
          <h3>ФИО</h3>
        </li>
        <li>
          <a href="#slide3">
            <img src="/static/images/PhotoWorkers/worker3.png" />
          </a>
          <h3>ФИО</h3>
        </li>
      </ul>
    </div>
  );
};

export default TeamGallery;
