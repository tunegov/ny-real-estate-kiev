import React, { useEffect, useState } from 'react';

import '@styles/pages/team/TeamGallery.scss';

interface Props {
  img1?: string;
  img2?: string;
  img3?: string;
  img4?: string;
}

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
    // <div className="team-gallery">
    //   <div className="team-gallery-box">

    //     <p className="team-gallery-img">{props.img}</p>
    //     <p className="team-gallery-name">{props.surname}</p>
    //     <p className="team-gallery-position">{props.position}</p>
    //   </div>
    // </div>

    //     <div className="cssSlider">
    //       <ul className="slides">
    //         <li id="slide1">
    //           <p id="slide1" className="team-gallery-img1">
    //             {/* {props.img1} */}
    //           </p>
    //         </li>
    //         <li id="slide2">
    //           <p id="slide1" className="team-gallery-img2">
    //             {/* {props.img2} */}
    //           </p>
    //         </li>
    //         <li id="slide3">
    //           <p className="team-gallery-img3">{/* {props.img3} */}</p>
    //         </li>
    //       </ul>
    //       <ul className="thumbnails">
    //         <li>
    //           <a href="#slide1">
    //             <p className="team-gallery-img-big1">{props.img1}</p>
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#slide2">
    //             <p className="team-gallery-img-big2">{props.img2}</p>
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#slide3">
    //             <p className="team-gallery-img-big3">{props.img3}</p>
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
  );
};

export default TeamGallery;
