import React from 'react';

const Cart = ({data}) => {
    return (
        <div className="search">
            ------------------------------------<br />
            My Cart: {data.length} <br />
            {
                data.map((country, index) => (<div key={index}>{country}</div>))
            }
        </div>
    );
};

export default Cart;