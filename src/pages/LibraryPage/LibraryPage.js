import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LibraryModal from '../../components/LibraryModal/LibraryModal';
import LibraryForm from '../../components/LibraryForm'
import {fetchToken} from '../../redux/auth/auth-selectors'
import { getUsersBooksOperation } from '../../redux/operations/bookOperation';
import LibraryList from '../../components/Library/LibraryList/LibraryList';
import LibraryListPlan from '../../components/Library/LibraryListPlan/LibraryListPlan';



const LibraryPage =() => {
    const dispatch = useDispatch();
    const isAuth = useSelector(fetchToken);
    
    useEffect(() => {
        if(isAuth) {dispatch(getUsersBooksOperation())};    
        // eslint-disable-next-line
    }, []);

    return(<div>
        <LibraryForm/>
        {/* <LibraryList/> */}
        {/* <LibraryListPlan/> */}
    </div>)
}

export default LibraryPage;
