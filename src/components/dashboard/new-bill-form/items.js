// import "./items.css"
import React, {useState} from 'react'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ItemsTable from "./table-items";

export default function CostItems(){
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
      };
    return(
    <div>
        <ItemsTable />
        <img src='add-button.png' width="30px" height="30px" alt="Add Button"></img>
    </div>
    );
}
