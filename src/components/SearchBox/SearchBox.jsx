import s from './SearchBox.module.css';

function SearchBox({ value, onChange }) {
    return (
        <label className={s.label}>
            Find contacts by name
            <input
                type='text'
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className={s.input}
            />
        </label>
    );
}

export default SearchBox;