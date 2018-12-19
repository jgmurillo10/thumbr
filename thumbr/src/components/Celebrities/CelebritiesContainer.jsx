import React, { Component } from 'react';
import Celebrities from './Celebrities';
class CelebritiesContainer extends Component {
  state = {
    celebrities: []
  }

  componentDidMount() {
    this.updateCelebs();
  }

  updateCelebs() {
    let celebs = [];
    this.props.firebase.db.collection("celebrities").get().then((query) => {
      query.forEach((snap) => {
        let current = Object.assign({}, snap.data(), {id: snap.id})
        celebs.push(current);
      });
      this.setState({ celebrities: celebs});
    });
  }

  render() {
    return  (
      <Celebrities update={() => this.updateCelebs()} celebrities={this.state.celebrities} />
    )
  }
}

export default CelebritiesContainer;