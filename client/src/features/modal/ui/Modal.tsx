import React, { FC } from 'react'
import cl from './Modal.module.scss';

interface ModalProps {
    visible: any
    setVisible: any
    children: React.ReactNode
}

export const Modal: FC<ModalProps> = ({ visible, setVisible, children }) => {
    return (
        <div className={`${cl['modal']} ${visible ? cl[`modal-active`] : ''}`} onClick={() => setVisible(false)}>
            <div className={cl['modal__content']} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}
