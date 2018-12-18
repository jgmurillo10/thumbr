import React, { Component } from 'react';
import Pope from './../Pope';
import Message from './../Message';
import Celebrities from './../Celebrities';

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

export default Home;
