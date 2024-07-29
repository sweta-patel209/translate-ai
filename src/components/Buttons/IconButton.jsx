import react from "react";

const IconButton = ({Icon, onClick}) => (
    <span className="cousor-pointer flex items-center space-x-2" onClick={onClick}>
     <Icon size={22}/>
    </span>
)

export default IconButton