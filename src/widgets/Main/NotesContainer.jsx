import listIcon from '../../assets/icons/list.svg';
import gridIcon from '../../assets/icons/grid.svg';
import NotesList from "./NotesList";

const NotesContainer = ({ gridMode, setGridMode, notes, showEditModal, removeNote}) => {

    return (
        <section className="notes">
            <div className="notes__header container">
                <h2>{notes.length ? 'Все заметки' : 'Нет заметок'}</h2>
                <button onClick={() => { setGridMode((prev) => !prev) }}>
                    <img src={gridMode ? listIcon : gridIcon} alt="" />
                    <span>{gridMode ? 'Список' : 'Сетка'}</span>
                </button>
            </div>
            <NotesList gridMode={gridMode} notes={notes} showEditModal={showEditModal} removeNote={removeNote}  />
        </section>
    )
}

export default NotesContainer;