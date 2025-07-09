import NotesListItem from "./NotesListItem";

const NotesList = ({ gridMode, notes, showEditModal, removeNote }) => {
    return (
        <div className={`notes__list container ${gridMode ? '' : 'list'}`}>
            {
                notes?.map((note, index) => (
                    <NotesListItem key={note.id} note={note} showEditModal={showEditModal} removeNote={removeNote} index={index} />
                ))
            }
        </div>
    );
}

export default NotesList;