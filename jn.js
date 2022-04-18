import React from 'react';
import ReactDOM from 'react-dom'


const App = () => {
  return <h1>My first component</h1>
}

ReactDOM.render(<><App/>
  <App2/>
  <App3/>
</>, document.querySelector('#root'))