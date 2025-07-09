import NotesContainer from "./NotesContainer";
import './Main.scss';
import { useState } from "react";
const Main = ({ notes, showEditModal, removeNote,  }) => {
    const [gridMode, setGridMode] = useState(false);
    return (
        <main>
            <NotesContainer
                gridMode={gridMode}
                setGridMode={setGridMode}
                notes={notes}
                showEditModal={showEditModal}
                removeNote={removeNote}

            />
        </main>
    )
}

export default Main;