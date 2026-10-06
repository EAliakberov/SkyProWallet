export function Input({ type, error }) {
    return <input type={type} className={error ? 'error' : ''}></input>;
}
