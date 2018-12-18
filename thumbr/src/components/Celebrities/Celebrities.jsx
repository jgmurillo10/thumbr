import React from 'react';
import Celebrity from './../Celebrity';

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

export default Celebrities;