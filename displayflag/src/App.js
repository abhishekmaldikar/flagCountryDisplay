import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const API = "https://restcountries.com/v3.1/all"
  const [flagData , setFlagData] = useState([])
  useEffect(() => {
    dataFetcher()
  },[]);
  let maindiv = {
    display : "flex",
    flexWrap: "wrap",
    gap : "1rem"
  }
  async function dataFetcher(){
    try {
      const response = await fetch(API);
      const data = await response.json();
      const arrMap = data.map((obj) => {
        let obj1 = {};
        obj1.name = obj.name.common;
        obj1.img = obj.flags.svg
        return obj1
      }); 
      setFlagData(arrMap);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="App" style={maindiv}>
      {flagData.map((obj) => (
        <div style={{display : "flex" , flexDirection : "column" , justifyContent : "center", alignItems: "center" ,padding : "10px" ,border: "0.5px solid grey",borderRadius : "3px"}}>
          <img src={obj.img} alt={obj.name} style={{width : "100px"}}/>
          <h6>{obj.name}</h6>
        </div>
      ))}
    </div>
  );
}

export default App;
