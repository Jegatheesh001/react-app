import React from 'react';

const Search = ({handler, users}) => {
    return (
        <div className="search">
            <input type="search" onChange={handler} />
            {
                users.map(user => (<div>{user.name}</div>))
            }
        </div>
    );
};

export default Search;