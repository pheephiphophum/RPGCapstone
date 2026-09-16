import { createPortal } from "react-dom";

function modal({children}){
    return createPortal(
        children,
        document.getElementById('modal-root')
    )
}

export default modal