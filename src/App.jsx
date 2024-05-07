import { useState } from 'react'
import './App.css'
import Card from './Components/Card'

function App() 
{
  const [data, ] = useState(
    [
      { contentFront: "Badminton is my identity", contentBack: "Keshava" },
      { contentFront: "Taking casual piano lessons", contentBack: "Ken Jo" },
      { contentFront: "Nature Walks", contentBack: "Junmei" },
      { contentFront: "SPEC", contentBack: "Lian Hau" },
      { contentFront: "WFS", contentBack: "Kar Poh" },
      { contentFront: "Indoor plants, documentaries", contentBack: "Ping Chan" },
      { contentFront: "BAC", contentBack: "Li San" },
      { contentFront: "May the force be with you", contentBack: "Pek Yong" },
      { contentFront: "Like to cook new recipes", contentBack: "Priya" }
    ]
  );

  const [names, ] = useState(
    [
      "Li San", "Pek Yong", "Junmei", "Priya", "Lian Hau", "Ken Jo",
      "Ping Chan", "Amogh", "Keshava", "Wei Xiang", "Kar Poh"
    ]
  );

  return (
    <div class ='main-app'>
      <div class ='main-app-background' />
      <div className='names'>
        <h1>Names</h1>
        {names.map((name, i) =>
            <names-font>{name}</names-font>
        )}
      </div>
      <div class ='grid-parent'>
        <h1>Marcus & Leadership Bingo Game</h1>
        <div class='grid'>
            {data.map((cardEntry, i) => <Card 
                key={i}
                contentFront={cardEntry.contentFront}
                contentBack={cardEntry.contentBack}
                index={i+1}
            />)}
        </div>
      </div>
    </div>
  )
}

export default App
