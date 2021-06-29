import React from 'react';
import styles from './users.module.css';

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([

            {
                id: 1, photoUrl: 'https://kvmarvel.ru/wp-content/uploads/2018/03/captain_america_team.png',
                followed: false,
                fullName: 'Sergei',
                status: 'I am better',
                location: {city: 'Minsk', country: 'Belarus'}
            },

            {
                id: 2, photoUrl: 'https://kvmarvel.ru/wp-content/uploads/2018/03/captain_america_team.png',
                followed: true,
                fullName: 'Dmitriy',
                status: 'I am better too',
                location: {city: 'Moscow', country: 'Russia'}
            },

            {
                id: 3, photoUrl: 'https://kvmarvel.ru/wp-content/uploads/2018/03/captain_america_team.png',
                followed: false,
                fullName: 'Irina',
                status: 'I am better too',
                location: {city: 'KIev', country: 'Ukraine'}
            }

        ]
      )
    }

    return(
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={styles.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {props.unfollow(u.id)} } >Unfollow</button>
                                : <button onClick={() => {props.follow(u.id)} }>Follow</button> }

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;