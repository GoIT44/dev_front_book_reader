import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LibraryModal from '../../components/LibraryModal/LibraryModal';
import LibraryForm from '../../components/LibraryForm'
import {fetchToken} from '../../redux/auth/auth-selectors'
import {
    getWillRead,
    getNowRead,
    getFinishRead,
    // getUserTraining,
} from '../../redux/selectors/bookSelector';
import { getUsersBooksOperation } from '../../redux/operations/bookOperation';


const LibraryPage =() => {
    const dispatch = useDispatch();
    const isAuth = useSelector(fetchToken);
    console.log("Is auth" , isAuth);

    // const booksWillRead = useSelector(getWillRead);
    // const bookNowRead = useSelector(getNowRead);
    // const bookFinished = useSelector(getFinishRead);
    // const isTraining = useSelector(getUserTraining);

    useEffect(() => {
        if(isAuth) {dispatch(getUsersBooksOperation())};    
        // eslint-disable-next-line
    }, []);

    return(<div>
        <h1>Library Page </h1>                       {/* <LibraryForm />
                {bookFinished.length > 0 && <ReadBooks />}
                {bookNowRead.length > 0 && <ReadingBooks />}
                {booksWillRead.length > 0 || bookNowRead.length > 0 || bookFinished.length > 0 ? (
                    !!booksWillRead.length && <WillReadBooks />
                ) : (
                    <LibraryModal />
                )}
                {booksWillRead.length > 0 && isTraining === null && (
                    <StartTrainingBtn />
                )} */}
    {/* <LibraryForm/> */}
    </div>)
}

export default LibraryPage;
