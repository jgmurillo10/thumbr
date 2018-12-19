import React from 'react';

const CelebrityBig = ({ name, description, link }) => (
  <div>
    <div className="big-box">
      <p className="light">What's your opinion on</p>
      <h1 className="big-box__name">{ name }?</h1>
      <p className="big-box__description">{ description }</p>
      <div className="big-box__info">
        <a href={link}> More information</a>
      </div>
      <p>What's your veredict?</p>
    </div>
    <div className="big-box__votes">
      <div className="big-box__up">
        <img src={require('./../../assets/imgs/up.png')} alt="upvote"/>
      </div>
      <div className="big-box__down">
        <img src={require('./../../assets/imgs/down.png')} alt="upvote"/>
      </div>
    </div>
  </div>
);

export default CelebrityBig;