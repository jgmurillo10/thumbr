import React, { Component } from 'react';
import { withFirebase } from './../Firebase';
import Modal from './../Modal';
const INITIAL_STATE = {
  name: '',
  category: '',
  date: '',
  img: '',
  description: '',
  show: false,
}

class AddCelebrityBase extends Component {
  
  state = { ...INITIAL_STATE };

  onSubmit = (e) => {
    const { name, category, date, img, description } = this.state;
    this.props.firebase.db.collection("celebrities").add({
      name,
      category,
      date,
      img,
      description,
      votes: {
        down: 0,
        up: 0,
      }
    }).then((docRef) =>  {
      console.log("Document written with ID: ", docRef.id);
      this.props.update();
    }).catch(function(error) {
      console.error("Error adding document: ", error);
  });
    this.setState({ show: true })
    setTimeout(
        function() {
            this.setState({show: false});
        }
        .bind(this),
        1000
    );
    e.preventDefault();
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClose = () => {
    this.setState({ show: false });
  }

  render() {
    const {
      name,
      category,
      date,
      img,
      description,
    } = this.state;
    const isInvalid = name === "" || category === "" || date === "" || img === "" || description === "";

    return (
      <div className="add-celebrity">
        <Modal show={this.state.show} handleClose={this.hideModal} >
          <p className="celebrity__message">Thank you for voting!</p>
        </Modal>
        <h1 className="add-celebrity__title">Add a celebrity</h1>
        <form className="add-celebrity__form" onSubmit={this.onSubmit}>
          <label htmlFor="name">Name</label>
          <input
            name="name"
            value={name}
            onChange={this.onChange}
            type="text"
            placeholder="Full Name"
          />
          <label htmlFor="category">Category</label>
          <input
            name="category"
            value={category}
            onChange={this.onChange}
            type="text"
            placeholder="Category"
          />
          <label htmlFor="date">Date</label>
          <input
            name="date"
            value={date}
            onChange={this.onChange}
            type="text"
            placeholder="Date"
          />
          <label htmlFor="img">Image</label>
          <input
            name="img"
            value={img}
            onChange={this.onChange}
            type="text"
            placeholder="Image URL"
          />
          <label htmlFor="description">Description</label>
          <input
            name="description"
            value={description}
            onChange={this.onChange}
            type="text"
            placeholder="Description"
          />
          <button className="add-celebrity__button" disabled={isInvalid} type="submit">Add</button>
        </form>
      </div>
    );
  }
}
const AddCelebrity = withFirebase(AddCelebrityBase);

export default AddCelebrity;