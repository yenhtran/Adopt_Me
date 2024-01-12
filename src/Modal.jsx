import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const elRef = useRef(null);
  // ^a "ref" is a piece of 'somthing' and need that same thing back every single time
  if (!elRef.current) {
    elRef.current = document.createElement('div')
    // think of ref as a container to give yourself back the same thing every single time
  }

  useEffect(() => {
    const modalRoot = document.getElementById('modal');
    modalRoot.appendChild(elRef.current);

    // we need a way to remove modal after user clicks yes/no...
    return () => modalRoot.removeChild(elRef.current); // ===> similar to componentWillUnmount in class components
  }, []);

  return createPortal(<div>{children}</div>, elRef.current)
}

export default Modal;