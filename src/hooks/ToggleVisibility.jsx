import { useState } from "react"

function VisibilityToggle(){
    const [visibility, setVisibility] = useState({display: 'none'})

    const toggleVisibility = () => {

        if(visibility.display == 'none'){
            setVisibility({display: 'flex'})
        }else{
            setVisibility({display: 'none'})
        }}

        return { visibility, toggleVisibility }
}


export default VisibilityToggle