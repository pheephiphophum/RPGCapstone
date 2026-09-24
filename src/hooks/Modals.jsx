import { createPortal } from "react-dom";
import { useState } from "react";
import '../styles/modal.css'

function Modal({open, children}){
    console.log('isopen', open)
    if (!open) return null;
    

    return createPortal(
        <div className="modalContainer" >
            {children}
        </div>,
        document.body
    )
}

export default Modal