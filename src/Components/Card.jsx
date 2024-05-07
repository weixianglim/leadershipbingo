import { useState } from 'react'
import ReactCardFlip from 'react-card-flip'

function Card(props) {
  const [ isFlipped, setIsFlipped ] = useState(false);
  const [ isWrong, setIsWrong ] = useState(false);
  const { contentFront, contentBack, index } = props;

  const flipCard = () => {
    setIsWrong(false)
    setIsFlipped(!isFlipped);
  };

  const rightClick = (e) => {
    flipCard()
    e.preventDefault()
    setIsWrong(true)
  }

  let cardBack;
  if (isWrong)
  {
    cardBack = 
        <div className='card card-back-wrong' onClick={flipCard} onContextMenu={rightClick}>
            <card-content>{contentBack}</card-content>
        </div>
  }
  else
  {
    cardBack = 
        <div className='card card-back' onClick={flipCard} onContextMenu={rightClick}>
            <card-content>{contentBack}</card-content>
        </div>
  }

  return (
    <div>
        <ReactCardFlip flipDirection='vertical' isFlipped={isFlipped}>
          <div className='card' onClick={flipCard} onContextMenu={rightClick}>
            <card-content>{index}.</card-content>
            <card-content>{contentFront}</card-content>
          </div>
          {cardBack}
        </ReactCardFlip>
    </div>
  )
}

export default Card