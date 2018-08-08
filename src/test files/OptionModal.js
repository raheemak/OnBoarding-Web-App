import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) =>  (//implicit return 
        <Modal 
            isOpen={props.selected}
        //    onRequestClode={functionName}
            contentLabel ={"selected option"}
        >
        <h2>omg </h2>
        </Modal>
)


export default OptionModal; 