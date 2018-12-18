import React, { Component } from 'react';

const Pope = () => (
  <div className="pope">
      {/* <img src={require('./../../assets/imgs/pope.png')} alt=""/> */}
      <BigBox
        name="Pope Francis"
        description="He’s talking tough on clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)"
      />
  </div>
)

const BigBox = ({ name, description, link, upvotes, downvotes }) => (
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

class Home extends Component {
  state = {
    celebrities: [
      {
        "id": "1",
        "name": "Kanye West",
        "img": "kanye.png",
        "description": "Vestibulum diam ante, pottitor a odio eget, rhoncus neque. Aenean eu velit libero.",
        "category": "Entertainment",
        "date": "1 month ago",
        "upvotes": 64 ,
        "downvotes": 36
      },
      {
        "id": "2",
        "name": "Mark Zuckerberg",
        "img": "mark.png",
        "description": "Vestibulum diam ante, pottitor a odio eget, rhoncus neque. Aenean eu velit libero.",        
        "category": "Business",
        "date": "1 month ago",
        "upvotes": 36 ,
        "downvotes": 64
      },
      {
        "id": "3",
        "name": "Cristina Fernández de Kirchner",
        "img": "cristina.png",
        "description": "Vestibulum diam ante, pottitor a odio eget, rhoncus neque. Aenean eu velit libero.",        
        "category": "Politics",
        "upvotes": 36 ,
        "downvotes": 64
      },
      {
        "id": "4",
        "name": "Malala Yousafzai",
        "img": "malala.png",
        "description": "Vestibulum diam ante, pottitor a odio eget, rhoncus neque. Aenean eu velit libero.",        
        "category": "Entertainment",
        "upvotes": 36 ,
        "downvotes": 64
      }
    ]
  }
  render(){ 
  return (
  <div>
    <Pope />
    <div className="home">
      <Message />
      <Celebrities celebrities={this.state.celebrities} />
    </div>
  </div>
  
)}};

const Celebrities = ({ celebrities }) =>  (
  <div className="celebrities">
    <h1 className="celebrities__title">Previous Rulings</h1>
    <div className="celebrities__container">
      {
        celebrities.map(celebrity => {
          const { id, img, name, description, date, category, upvotes, downvotes } = celebrity;
          return (
            <Celebrity
              key={id}
              name={name}
              description={description}
              img={img}
              date={date}
              category={category}
              upvotes={upvotes}
              downvotes={downvotes}
            />
          )
        })
      }
    </div>
    <div className="celebrities__footer">
      <div>
        Is there anyone else yoy would want ud to add?
      </div>
      <div>
        <button>Submit a Name</button>
      </div>
    </div>
  </div>
);
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

class Message extends Component {
  state = {
    open: true
  }
  render() {
    if (!this.state.open ) return '';
    return (
      <div className="message">
        <div className="message__titles">
          <h2 className="message__title-1">Speak out. Be heard.</h2>
          <h1 className="message__title-2">Be counted</h1>
        </div>
        <div className="message__text">
          <p>
            Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely.
            It's easy: You share your opinion, we analyze and put the data in public report.
          </p>
        </div>
        <div className="message__button" onClick={(e) => this.setState({ open: false })}>
          <img src={require('./../../assets/imgs/close.png')} alt=""/>
        </div>
        
      </div>
)}}

export default Home;
