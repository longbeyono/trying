import { useState, useEffect } from 'react';

function useDebounced(value, delay) {
    const [debounced, setDebounced] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounced(value);
        }, delay);
        return () => {
            clearTimeout(handler);
        };
    }, [value]);

    return debounced;
}

export default useDebounced;
