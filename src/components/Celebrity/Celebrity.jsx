import React, { Component } from 'react';
class Celebrity extends Component {
  state = {
    selected: '',
    voted: false,
  }

  vote(id, up, down) {
    this.state.selected === 'up' ? up++ : down++;
    console.log(this.state.selected, up, down);
    if (this.state.selected) {
      this.setState({ selected: '', voted: true });
      let docData = {
        votes: {
          up,
          down
        }
      }
      this.props.firebase.db.collection("celebrities").doc(id).update(docData).then(function(){
        console.log('doc written');
      })
      this.props.update();
    }
  }

  resetVote() {
    this.setState({ voted: false });
  }
  
  render() {
    const { id, name, img, description, date, category, up, down } = this.props;
    const upPercentage = Math.round(up / (up+down)*100 * 100) / 100;
    const downPercentage = Math.round(down / (up+down)*100 * 100) / 100;
    
    return (
      <div className="celebrity" style={{ backgroundImage : `linear-gradient( to bottom, rgba(0,0,0,0) 0%, rgba(51,51,51,0.52941) 49%, rgba(0,0,0,0.8) 100%), url(${img})`, backgroundSize: 'cover' }}>
        <div className="celebrity__icon-result">
          {
            upPercentage >= 50 
            ?
            <img className="celebrity__icon-result__up" src={require('./../../assets/imgs/up.png')} alt="upvote"/>
            :
            <img className="celebrity__icon-result__down" src={require('./../../assets/imgs/down.png')} alt="downvote"/>
          }
          
        </div>
        <h3 className="celebrity__name">{ name }</h3>
        <p className="celebrity__date-category"><span className="bold">{ date }</span> in { category }</p>
        <p className="celebrity__description light">{description}</p>
        {
          this.state.voted ?
          <div className="celebrity__vote">
            <button className="celebrity__vote__vote" onClick={() => this.resetVote()}>Vote again</button>
          </div>
          :
          <div className="celebrity__vote">
            <div className={`celebrity__vote__upvote ${this.state.selected === 'up' ? 'celebrity__vote--selected' : ''}`} onClick={() => this.setState({selected: 'up'})}>
              <img src={require('./../../assets/imgs/up.png')} alt="upvote"/>
            </div>
            <div className={`celebrity__vote__downvote ${this.state.selected === 'down' ? 'celebrity__vote--selected' : ''}`} onClick={() => this.setState({selected: 'down'})}>
              <img src={require('./../../assets/imgs/down.png')} alt="downvote"/>
            </div>
            <div>
              <button className="celebrity__vote__vote" onClick={(e) => this.vote(id, up, down)}>Vote now</button>
            </div>
          </div>
        }
        
        <div className="celebrity__results">
          <div className="celebrity__up" style={{ width: `${upPercentage}%`}}>
            <img className="celebrity__icon" src={require('./../../assets/imgs/up.png')} alt="upvote"/>
            { upPercentage }%
          </div>
          <div className="celebrity__down" style={{ width: `${downPercentage}%`}}>
            { downPercentage }%
            <img className="celebrity__icon" src={require('./../../assets/imgs/down.png')} alt="upvote"/>
          </div>
        </div>
      </div>
    )
  }
}
export default Celebrity;
