import React, { useState } from 'react';
import './styles.css';
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

function Search({ onSearchChange }) {
    const [search, setSearch] = useState("");

    const handleSearchChange = (e) => {
        const newValue = e.target.value;
        setSearch(newValue);
        onSearchChange(newValue);
    };

    return (
        <div className='search-flex'>
            <SearchRoundedIcon />
            <input
                placeholder='Search'
                type='text'
                value={search}
                onChange={handleSearchChange}
            />
        </div>
    );
}

export default Search;
