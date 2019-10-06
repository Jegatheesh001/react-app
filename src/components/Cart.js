import React from 'react';

const Cart = ({data}) => {
    return (
        <div className="search">
            ------------------------------------<br />
            My Cart: {data.length} <br />
            {
                data.map(user => (<div>{user}</div>))
            }
        </div>
    );
};

export default Cart;