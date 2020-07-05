import React, { useContext } from 'react';
import UsersContext from '../../context/UsersContext';
import UserItem from './UserItem';

const Users = (props) => {
    const users = useContext(UsersContext);

    return (
        <div>
            {users.map(item => <UserItem key={item.email} data={item}/>)}
        </div>
    )
}

export default Users;