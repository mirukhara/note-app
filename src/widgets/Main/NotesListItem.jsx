const NotesListItem = ({ note, showEditModal, removeNote, index,  }) => {
    return (
        <div className="notes__list-item">
            <h3>{note.title}</h3>
            <span>{note.date}</span>
            <p>{note.descr}</p>
            <div className="notes__list-item-options">
                <button onClick={() => { showEditModal(note.id) }}>
                    <span>Редактировать</span>
                </button>
                <button onClick={() => removeNote(index)}>
                    <span>Удалить</span>
                </button>
            </div>
        </div>
    );
}
export default NotesListItem;