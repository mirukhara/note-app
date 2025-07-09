import './Modal.scss';

const Modal = ({
    showModal,
    addNote,
    modalEditMode,
    closeModal,
    title, setTitle, descr, setDescr,
    editNote,
}) => {
    return (
        <div className={`modal ${showModal ? 'active' : ''}`} onClick={closeModal}>
            <div
                className="modal-dialog"
                onClick={(e) => e.stopPropagation()}
            >
                <h2>{modalEditMode ? 'Изменить заметку' : 'Добавить заметку'}</h2>
                <label htmlFor="title">
                    <span>Заголовок</span>
                    <input id="title" type="text" placeholder="Заголовок"
                        value={title} onChange={(e) => setTitle(e.target.value)}

                    />
                </label>
                <label htmlFor="note">
                    <span>Заметка</span>
                    <input id="note" type="text" placeholder="Заметка"
                        value={descr} onChange={(e) => setDescr(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key == 'Enter') {
                                addNote();
                            }
                        }}
                    />
                </label>
                <div className="modal-dialog-options">
                    <button onClick={closeModal}>Отмена</button>
                    {
                        modalEditMode ?
                            <button onClick={editNote}>Изменить</button>
                            :
                            <button onClick={addNote}>Добавить</button>
                    }
                </div>
            </div>
        </div>
    );
}

export default Modal;