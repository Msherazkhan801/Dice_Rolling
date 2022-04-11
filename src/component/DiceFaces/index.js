import React from "react";
import { array } from "../Dice_Sides_data";
const DiceFaces = ({ rollValue, isRolling }) => {
    const current = array.find((item) => item.rollValue === rollValue);
    console.log(current)
    return (
        <div className="card">
        <table className="border border-black rounded-md p-48  mx-auto " >
            <tbody >
                {current?.result}
            </tbody>
        </table>
        </div>
    )
}



export default DiceFaces






