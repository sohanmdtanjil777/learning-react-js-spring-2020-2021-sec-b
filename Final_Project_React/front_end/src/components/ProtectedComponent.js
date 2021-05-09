import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const ProtectedComponent = ( {Component} ) => {

    const history = useHistory();

    useEffect(
        () => {
            if(!localStorage.getItem('userkey'))
            {
                history.push('/login');
            }
        },[history]);


    return (
        <div>
            <Component />
        </div>
    )
}

export default ProtectedComponent
