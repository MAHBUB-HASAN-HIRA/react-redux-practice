import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../redux/index';

const User = () => {
    const userData = useSelector(state => state.userData);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch])
    return (
        <div>
            {
                userData.loading
                    ? (<h2>Loading....</h2>)
                    : userData.error ? (<h2>{userData.error}</h2>) :
                        (
                            <div>
                                {
                                    userData ? userData.users && userData.users.map(user =>
                                        <div key={user.id}>
                                            <h1>Name: {user.name}</h1>
                                        </div>
                                    ) : <span></span>
                                }
                            </div>
                        )
            }
        </div>
    );
};

export default User;