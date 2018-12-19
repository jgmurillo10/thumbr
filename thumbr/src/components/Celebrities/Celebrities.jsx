import React from 'react';
import CelebrityBase from './../Celebrity';
import { withFirebase } from '../Firebase';

const Celebrities = ({ celebrities }) =>  (
  <div className="celebrities">
    <h1 className="celebrities__title">Previous Rulings</h1>
    <div className="celebrities__container">
      {
        celebrities.map(celebrity => {
          const { id, img, name, description, date, category, votes } = celebrity;
          return (
            <Celebrity
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

const Celebrity = withFirebase(CelebrityBase);

export default Celebrities;