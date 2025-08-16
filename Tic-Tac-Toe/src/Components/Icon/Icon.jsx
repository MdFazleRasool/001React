
/* eslint-disable no-unused-vars */
/* https://react-icons.github.io/react-icons/ */
import { FaAddressBook, FaRegCircle, FaTimes } from 'react-icons/fa';

function Icon ({name}){
    if(name === "circle"){
        return <FaRegCircle />
    }
    else if(name === "cross")
        return <FaTimes />
    else 
        return <FaAddressBook />
}
export default Icon;