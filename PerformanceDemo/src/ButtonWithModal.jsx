
import useModalDialog from './hooks/useModalDialog';
import Modal from './modal';
export default function ButtonWithModal(){
    const {isOpen , open , close} = useModalDialog();

    return(
        <>
            {/*     this way ensures that slow components does not get re render again beacuse slow components is called in app.jsx which is a parent of button_with_modal,jsx(this file) 
                    and in react re-render of child does affect parent .

            */}
            <button onClick={open}> Open modal</button>
            {isOpen && <Modal close={close} />}

        </>
    );
}