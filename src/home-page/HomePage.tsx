import Blob1 from '../components/blobs/blob1/Blob1';
import React from 'react';
import homePageStyles from './HomePage.module.scss';
import Blob2 from '../components/blobs/blob2/Blob2';

function HomePage() {
  return (
    <div className={homePageStyles.page}>
      <div className={homePageStyles.container}>
        <div className={homePageStyles.textWrapper}>
          <p className={homePageStyles.headerText}> Zachary Hollmann </p>
          <p className={homePageStyles.bodyText}> Front-end developer</p>
          <button className={homePageStyles.aboutMeLink}>About me</button>
        </div>
        <Blob1 />
        <Blob2 />
      </div>
    </div>
  );
}

export default HomePage;
