import React, { useContext, useRef, useEffect } from 'react';
import UsersContext from '../../context/UsersContext';

const Header = () => {
    const {users} = useContext(UsersContext);

    return (
        <header>
            <h1>
                Users <small>{users && users.length}</small>
            </h1>
        </header>
    )
}

export default Header;