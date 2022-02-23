import React, { useState } from 'react';
import styles from "./LibraryModal.module.css"
import Modal from '../Modal';

import book from "../../assets/svg/book.svg"
import vector from '../../assets/svg/vector.svg';
import flag from '../../assets/svg/flag.svg';

const LibraryModal = ({ isBookModal, setIsBookModal }) =>{
    const [isOpenModal, setIsOpenModal] = useState(true);

    const closeModal = () => {
        setIsOpenModal(false);
    };

    return (<div className={styles.LibraryModalWrapper}>
        {isOpenModal && (
                    <Modal closeModal={closeModal}>
                        <div className={styles.libraryModal}>
                            <ul className={styles.list}>
                                <li className={styles.listItem}>
                                    <p className={styles.itemText}>
                                    Крок 1.
                                    </p>
                                    <div className={styles.listItemPart1}>
                                        <img
                                            src={book}
                                            alt=""
                                            className={styles.listItemImgPart1}
                                        />
                                        <p className={styles.listItemTitlePart1}>
                                            Створіть особисту бібліотеку
                                        </p>
                                    </div>
                                    <div className={styles.listItemPart2}>
                                        <img
                                            src={vector}
                                            alt=""
                                            className={styles.listItemImgPart2}
                                        />
                                        <p className={styles.listItemTitlePart2}>
                                            Додайте до неї книжки, які маєте
                                            намір прочитати.
                                        </p>
                                    </div>
                                </li>
                                <li className={styles.listItem}>
                                <p className={styles.itemText}>
                                    Крок 2.
                                    </p>
                                    <div className={styles.listItemPart1}>
                                        <img
                                            src={flag}
                                            alt=""
                                            className={styles.listItemImgPart1}
                                        />
                                        <p className={styles.listItemTitlePart1}>
                                            Сформуйте своє перше тренування
                                        </p>
                                    </div>
                                    <div className={styles.listItemPart2}>
                                        <img
                                            src={vector}
                                            alt=""
                                            className={styles.listItemImgPart2}
                                        />
                                        <p className={styles.listItemTitlePart2}>
                                            Визначте ціль, оберіть період,
                                            розпочинайте тренування.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                            <button
                                className={styles.listBtn}
                                type="button"
                                onClick={closeModal}
                            >
                                Ok
                            </button>
                        </div>
                    </Modal>
                )}
    </div>)
}
export default LibraryModal;