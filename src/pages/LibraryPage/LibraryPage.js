import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LibraryModal from '../../components/LibraryModal/LibraryModal';
import LibraryForm from '../../components/LibraryForm'
import {fetchToken} from '../../redux/auth/auth-selectors'
import { getUsersBooksOperation } from '../../redux/operations/bookOperation';


const LibraryPage =() => {
    const dispatch = useDispatch();
    const isAuth = useSelector(fetchToken);
    console.log("Is auth" , isAuth);

    useEffect(() => {
        if(isAuth) {dispatch(getUsersBooksOperation())};    
        // eslint-disable-next-line
    }, []);

    return(<div>
        <h1>Library Page </h1>  
    </div>)
}

export default LibraryPage;
