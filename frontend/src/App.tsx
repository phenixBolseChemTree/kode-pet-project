import axios from 'axios';
import './App.css';
import Main from './components/mainPage/Main';

function App() {
  
const fetchData = async () => {
  const url = "https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=all";

  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  try {
    const response = await axios.request({
      url,
      ...options,
    });
    
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

// Call the async function
fetchData();

  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
