import React, { Component } from 'react';
import ContentLoader from 'react-content-loader'
import CelebrityBase from './../Celebrity';
import { withFirebase } from '../Firebase';
import Modal from './../Modal';
import AddCelebrity from './AddCelebrity';

const MyLoader = props => (
	<ContentLoader 
		height={475}
		speed={2}
		primaryColor="#f3f3f3"
		secondaryColor="#ecebeb"
		{...props}
	>
		<circle cx="155.12" cy="136.18" r="96.57" /> 
		<rect x="181.55" y="419.61" rx="0" ry="0" width="113.12" height="48" /> 
		<rect x="7.55" y="420.61" rx="0" ry="0" width="164.51" height="47" /> 
		<rect x="49.55" y="361.61" rx="0" ry="0" width="25.35" height="23.6" /> 
		<rect x="79.55" y="361.61" rx="0" ry="0" width="26.4" height="23.6" /> 
		<rect x="115.55" y="360.61" rx="0" ry="0" width="82.65" height="24.42" /> 
		<rect x="49.55" y="333.61" rx="0" ry="0" width="209.88" height="13" /> 
		<rect x="48.55" y="302.61" rx="0" ry="0" width="210.38" height="18" /> 
		<rect x="7.55" y="299.61" rx="0" ry="0" width="30" height="21.08" />
	</ContentLoader>
);
const loaders = new Array(5).fill(0);

class Celebrities extends Component {
  state = {
    open: false
  }
  showModal = () => {
    this.setState({ show: true });
  }
  
  hideModal = () => {
    this.setState({ show: false });
  }
  render() {
    const { celebrities, update } = this.props;
    return (
      <div className="celebrities">
        <h1 className="celebrities__title">Votes</h1>
        <div className="celebrities__container">
          {
            celebrities.length ? 
            celebrities.map(celebrity => {
              const { id, img, name, description, date, category, votes } = celebrity;
              return (
                <Celebrity
                  update={update}
                  key={id}
                  id={id}
                  name={name}
                  description={description}
                  img={img}
                  date={date}
                  category={category}
                  up={votes.up}
                  down={votes.down}
                />
              )
            })
            : 
            loaders.map((d, i) => (
              <MyLoader key={i} />
            ))
          }
        </div>
        <div className="celebrities__background">
          <div className="celebrities__footer">
            <Modal show={this.state.show} handleClose={this.hideModal} >
              <AddCelebrity update={this.props.update} />
            </Modal>
            <div className="celebrities__footer__title">
              Is there anyone else yoy would want ud to add?
            </div>
            <button onClick={this.showModal} className="celebrities__footer__button">Submit a Name</button>
          </div>
        </div>
      </div>
    )
  }
} ;

const Celebrity = withFirebase(CelebrityBase);

export default Celebrities;
