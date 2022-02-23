import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LibraryModal from '../../components/LibraryModal/LibraryModal';
import LibraryForm from '../../components/LibraryForm'
import {fetchToken} from '../../redux/auth/auth-selectors'
import {getUsersBooksOperation} from '../../redux/books/operations/bookOperation'
import LibraryList from '../../components/Library/LibraryList/LibraryList';
import LibraryListPlan from '../../components/Library/LibraryListPlan/LibraryListPlan';
import { getLibraryInfo } from '../../services/bookApi';



const LibraryPage =() => {
    const dispatch = useDispatch();
    const isAuth = useSelector(fetchToken);
    
    useEffect  ( () => {
        if(isAuth) {dispatch(getUsersBooksOperation())};  
        // eslint-disable-next-line
    }, [dispatch]);
    
    return(<div>
        <LibraryForm/>
        <LibraryList/>
    </div>)
}

export default LibraryPage;
