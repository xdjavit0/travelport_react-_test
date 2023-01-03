import axios from "axios"
import { useState, useEffect } from 'react'


const useFetch = (url = null) => {
  const [apiData, setApiData] = useState(null)
  useEffect(() => {
    axios.get(url).then((response) => {
      setApiData(response.data)
    });
  }, [url]);
  return apiData
}
export default useFetch