import React from 'react';

const Celebrity = ({ name, img, description, date, category, upvotes, downvotes }) => (
  <div className="celebrity">
    <div className="celebrity__icon-result">
      <img src={require('./../../assets/imgs/up.png')} alt="upvote"/>
    </div>
    <h3 className="celebrity__name">{ name }</h3>
    <p className="celebrity__date-category"><span className="bold">{ date }</span> in { category }</p>
    <p className="celebrity__description light">{description}</p>
    <div className="celebrity__vote">
      <div className="celebrity__vote__upvote">
        <img src={require('./../../assets/imgs/up.png')} alt="upvote"/>
      </div>
      <div className="celebrity__vote__downvote">
        <img src={require('./../../assets/imgs/down.png')} alt="upvote"/>
      </div>
      <div>
        <button className="celebrity__vote__vote">Vote now</button>
      </div>
    </div>
    <div className="celebrity__results">
      <div className="celebrity__up">
        <img className="celebrity__icon" src={require('./../../assets/imgs/up.png')} alt="upvote"/>
        { upvotes }%
      </div>
      <div className="celebrity__down">
        { downvotes }%
        <img className="celebrity__icon" src={require('./../../assets/imgs/down.png')} alt="upvote"/>
      </div>
    </div>
      
  </div>
);

export default Celebrity;