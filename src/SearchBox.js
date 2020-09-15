import React from 'react';

const SearchBox = ( {searchField, searchChange}) => {
    return (
        <div className="pt-3">
            <input type="text"placeholder="search robots" onChange={searchChange} className="d-block w-75 mx-auto"/>
        </div>
    );
}

export default SearchBox;