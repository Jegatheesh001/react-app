import React from 'react';

const Search = ({handler, countries, placeholder, cartHandler}) => {
    return (
        <div className="search">
            <input type="search" onChange={handler} placeholder={placeholder} />
            {
                countries.map((country, index) => (<div key={country.alpha2Code} id={country.alpha2Code} onClick={cartHandler}>{country.name}</div>))
            }
        </div>
    );
};

export default Search;