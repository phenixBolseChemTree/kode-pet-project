import axios from "axios";

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

export default fetchData; // перенести этот вызов в redux