import './AddNoteButton.scss';

const AddNoteButton = ({ showModal, setShowModal }) => {
    if (showModal) {
        return;
    }
    return (
        <button className="add__note-button" onClick={() => setShowModal(true)}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.06 0.590005L17.41 1.94C18.2 2.72 18.2 3.99 17.41 4.77L4.18 18H0V13.82L10.4 3.41L13.23 0.590005C14.01 -0.189995 15.28 -0.189995 16.06 0.590005ZM2 16L3.41 16.06L13.23 6.23L11.82 4.82L2 14.64V16Z" fill="#6750A4" />
            </svg>
        </button>
    )
}

export default AddNoteButton;