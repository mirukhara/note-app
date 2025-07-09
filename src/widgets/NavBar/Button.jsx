import search from '../../assets/icons/search.svg';
import remove from '../../assets/icons/remove.svg';
import back from '../../assets/icons/back.svg';

const Button = ({ type, onClick }) => {
    const icon = type == 'back' ? back : type == 'search' ? search : type == 'remove' ? remove : null;

    if (!icon) {
        return (<div></div>);
    }

    return (
        <button onClick={onClick}>
            <img src={icon} alt="" />
        </button>
    );
}

export default Button;