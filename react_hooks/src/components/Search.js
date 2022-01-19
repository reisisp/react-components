import React, { useState } from "react";
import useDebounce from "../hooks/useDebounce";


export const Search = () => {
    const [value, setValue] = useState('')
    const debouncedSearch = useDebounce(search, 500)

    const onChange = (e) => {
        setValue(e.target.value);
        debouncedSearch(e.target.value);
    }

    function search(query) {
        fetch(`https://jsonplaceholder.typicode.com/todos?query` + query)
            .then(response => response.json())
            .then(json => {
                console.log(json)
            })
    }

    return (
        <input type="text" value={value} onChange={onChange} />
    )
}