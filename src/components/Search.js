import React from 'react';

const Search = ({handler, users, cartHandler}) => {
    return (
        <div className="search">
            <input type="search" onChange={handler} />
            {
                users.map(user => (<div key={user.id} id={user.id} onClick={cartHandler}>{user.name}</div>))
            }
        </div>
    );
};

export default Search;