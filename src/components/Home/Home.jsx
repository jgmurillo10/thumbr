import React, { Component } from 'react';
import Pope from './../Pope';
import Message from './../Message';
import CelebritiesContainer from './../Celebrities';
import { withFirebase } from '../Firebase';

const Home = () => (
  <div>
    <Pope />
    <div className="home">
      <Message />
      <Celebrities />
    </div>
  </div>
  
);

const Celebrities = withFirebase(CelebritiesContainer);
console.log(Celebrities);
export default Home;
