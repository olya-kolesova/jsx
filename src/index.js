import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText() {
  return 'Click on me!';
}

const App = () => {
  return (
    <div>
      <label className="label" htmlFor="">Enter name:</label>
      <input id="name" type="text" />
      <button style={{backgroundColor: 'blue', color: 'white'}}>
        {getButtonText()}
      </button>
    </div>
  );
};

ReactDOM.render(<App/>, document.querySelector('#root'));
