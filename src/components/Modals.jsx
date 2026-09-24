import { createPortal } from "react-dom";
import { useState } from "react";

function Modal({open, children}){
    console.log('isopen', open)
    if (!open) return null;
    

    return createPortal(
        <div className="modalContainer">
            {children}
        </div>,
        document.body
    )
}

export default Modal