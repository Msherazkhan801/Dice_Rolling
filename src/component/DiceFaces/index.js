import { array } from "../Dice_Sides_data";
import { Preloader, Oval } from 'react-preloader-icon';
import "../../App.css"
import Dots from "./Dots";
const DiceFaces = ({ rollValue, isRolling }) => {
    const current = array.find((item) => item.rollValue === rollValue);
    return (
        <div className="card">

            {isRolling ? <Preloader
                use={Oval}
                size={60}
                strokeWidth={15}
                strokeColor="#0066ff"
                duration={2000}
                className='spiner'
            />
                :
                <table className="border border-black rounded-md p-48  mx-auto " >
                    <tbody >
                        <Dots data={current?.bits} />
                    </tbody>
                </table>}
        </div>
    )
}



export default DiceFaces






