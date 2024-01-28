import React from 'react';
import './App.css';
import Main from './components/mainPage/Main';

function App() {
  // const options = {
  //   method: "GET",
  //   headers: { "Content-Type": "application/json" },
  // };
  // fetch(
  //   "https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=all",
  //   options
  // )
  //   .then((response) => response.json())
  //   .then((response) => console.log(response))
  //   .catch((err) => console.error(err));

  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
