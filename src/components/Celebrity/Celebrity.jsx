import React, { Component } from 'react';
import Modal from './../Modal';

class Celebrity extends Component {
  state = {
    selected: '',
    voted: false,
    show: false,
  }
  hideModal = () => {
    this.setState({ show: false });
  }

  vote(id, up, down) {
    this.state.selected === 'up' ? up++ : down++;
    if (this.state.selected) {
      this.setState({ selected: '', voted: true });
      let docData = {
        votes: {
          up,
          down
        }
      }
      this.props.firebase.db.collection("celebrities").doc(id).update(docData)
      .then(() => this.setState({ show: true }))
      .catch(function(){
        console.log('error voting');
      })
      this.props.update();
    }
  }

  getPercentage(item, total) {
    if (total === 0){
      return 50;
    }
    return Math.round(item / (total)*100 * 100) / 100;
  }

  resetVote() {
    this.setState({ voted: false });
  }
  
  render() {
    const { id, name, img, description, date, category, up, down } = this.props;
    const upPercentage = this.getPercentage(up, up+down);
    const downPercentage = this.getPercentage(down, up+down);
    
    return (
      <div className="celebrity" style={{ backgroundImage : `linear-gradient( to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 49%, rgba(0,0,0,0.8) 100%), url(${img})`, backgroundSize: 'cover' }}>
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
        <Modal show={this.state.show} handleClose={this.hideModal} >
          <p className="celebrity__message">Thank you for voting!</p>
        </Modal>
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
