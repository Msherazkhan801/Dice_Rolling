import React, { useState } from 'react';
import "../../App.css"
import DiceFaces from '../DiceFaces/index';
const Dice = () => {
  const [isRolling, setIsRolling] = useState(false)
  const [rollValue, setRollValue] = useState(1)
  const rollDice = () => {
    setRollValue(null);
    setIsRolling(true);

    setTimeout(() => {
      const newValue = Math.floor(Math.random() * 6) + 1;
      setRollValue(newValue)
      setIsRolling(false)
    }, 2000)


  }
  return (
    <div className="container mx-auto m-8   my-20px">
      <div className='mx-auto'>
        <DiceFaces rollValue={rollValue} isRolling={isRolling} />

      </div>
      <div className="ml-4">
        <div>
          <button className="text-center w-32 border btn btn-primary  my-5" disabled={isRolling} onClick={rollDice}>Throw dice</button>
        </div>
        <p className="result">Last throw:<span className="span"> {rollValue}</span></p>
        <div>
        </div>
      </div>
    </div>
  )
}
export default Dice

