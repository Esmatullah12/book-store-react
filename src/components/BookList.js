import React from 'react';

function BookList() {
  return (
    <div>
      <div>
        <h2>The Bezos Letters</h2>
        <p>
          Author:
          Steve Anderson
        </p>
        <button type="button">Delete</button>
      </div>
      <div>
        <h2>TED Talks</h2>
        <p>
          Author:
          Chris Anderson
        </p>
        <button type="button">Delete</button>
      </div>
      <div>
        <h2>Brave not Perfect</h2>
        <p>
          Author:
          Reshma Saugani
        </p>
        <button type="button">Delete</button>
      </div>
      <div>
        <h2>Kite Runner</h2>
        <p>
          Author:
          Khaled hosseini
        </p>
        <button type="button">Delete</button>
      </div>
    </div>
  );
}

export default BookList;
