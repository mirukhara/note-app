import Button from "./Button";
import './NavBar.scss';

export const NavBar = ({ searchMode, setSearchMode, search, setSearch }) => {
    return (
        <nav className="nav">
            {searchMode ?
                <Button type={'back'} onClick={() => setSearchMode(false)} />
                :
                <div></div>
            }
            {searchMode ? <input type="text" placeholder="Поиск..." value={search} onChange={(e) => setSearch(e.target.value)} /> : <h1>Заметки</h1>}
            <Button type={searchMode ? 'remove' : 'search'} onClick={() => setSearchMode(prev => !prev)} />
        </nav>
    );
}

