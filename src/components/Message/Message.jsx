import React, { Component } from 'react';

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

export default Message;