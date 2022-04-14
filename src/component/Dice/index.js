import React, {  useState } from 'react';
import "../../App.css"
import DiceFaces from '../DiceFaces/index';
const Dice = () => {
  const [isRolling, setIsRolling] = useState(false)
  const [rollValue, setRollValue] = useState(1)
  const rollDice = () => {
    setIsRolling(true);
    const interval = setInterval(() => {
      setRollValue(Math.floor(Math.random() * 6) + 1)
    }, 500)

    setTimeout(() => {
      clearInterval(interval)
      setIsRolling(false)
    }, 5000)
  }
  return (
    <div className="container mx-auto m-8   my-20px">
      <div className='mx-auto'>
        <DiceFaces rollValue={rollValue} isRolling={isRolling} />
      </div>
      <div className="ml-4">
        <div>
          <button className="text-center w-32 border btn btn-primary  my-5" disabled={isRolling} onClick={rollDice}>
            {isRolling ? `isRolling ...` : `Throw dice`}
          </button>
        </div>
        <p className="result">Current RollValue:<span className="span"> {isRolling ? <></> : rollValue}</span></p>
        <div>
        </div>
      </div>
    </div>
  )
}
export default Dice

