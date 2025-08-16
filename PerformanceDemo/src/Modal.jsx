function Modal({close}){
    return(

        <div  className="modal">
            <h2>Modal</h2>
            <p>This is a modal</p>
            <button onClick={close}>close</button>
        </div>
        

    );
}
export default Modal;