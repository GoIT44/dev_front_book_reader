import React, { useEffect }  from 'react'
import styles from './Modal.module.css'

const Modal = ({children, closeModal}) => {
    
    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
    
        return () => {
          window.removeEventListener('keydown', handleKeyPress);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
      const handleClick = evt => {
        if (evt.target.dataset.name !== 'wrapper') {
          return;
        }
    
        closeModal();
      };
    
      const handleKeyPress = evt => {
        if (evt.code === 'Escape') {
          closeModal();
        }
      };

    return(<div onClick={handleClick} data-name="wrapper" className={styles.modalWrapper}>
        <div className={styles.modal}>{children}</div>
    </div>)
}

export default Modal;
