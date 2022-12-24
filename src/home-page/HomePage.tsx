import React from 'react';
import homePageStyles from './HomePage.module.scss';

function HomePage() {
  return (
    <div className={homePageStyles.page}>
      <div className={homePageStyles.container}>
        <div className={homePageStyles.textWrapper}>
          <p className={homePageStyles.headerText}> Zachary Hollmann </p>
          <p className={homePageStyles.bodyText}> Front-end developer</p>
        </div>
        <div className={homePageStyles.blob1}></div>
      </div>
    </div>
  );
}

export default HomePage;
