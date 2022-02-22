import React from 'react';
import useFetch from './hooks/useFetch';
import Card from './components/Card';
import style from "./assets/css/getRicks.module.css";

function App() {
  const [arrayRicks] = useFetch();

  return (
    <div className={style.contentCards}>
      {
        arrayRicks.map(data => {
          const {image, name} = data;
          return <Card key={name} image={image} name={name} />
        })
      }
    </div>
  )
}

export default App;
