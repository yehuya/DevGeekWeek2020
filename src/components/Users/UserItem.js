import React from 'react';

const UserItem = (props) => {
    const {name, email, gender, picture} = props.data;

    return (
        <div>
            <ul>
                <img src={picture?.large}/>
                <li>
                    {name?.first}
                </li>
                <li>
                    {email}
                </li>
                <li>
                    {gender}
                </li>
            </ul>
        </div>
    )
}

export default UserItem;