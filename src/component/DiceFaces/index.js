import { array } from "../Dice_Sides_data";
import "../../App.css"
import Dots from "./Dots";
const DiceFaces = ({ rollValue, isRolling }) => {
    const current = array.find((item) => item.rollValue === rollValue);
    return ( 
        <div className="card mx-auto " >
                <table className="border border-black rounded-md p-48  mx-auto " >
                    <tbody >
                        <Dots data={current?.arrbits} />
                    </tbody>
                </table>
                </div>          
    )
}



export default DiceFaces






