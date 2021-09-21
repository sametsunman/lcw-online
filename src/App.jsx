import React,{useEffect} from 'react';
import Container from './components/Container';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './screens/MainPage';
import {useStorage} from './hooks/useStorage';
import {useDispatch, useSelector} from 'react-redux';
import initialState from './context/store';



function App() {

    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const {storageItem,saveStorage} = useStorage('@storage');

    useEffect(() => {
        
        if(storageItem)
            dispatch({ type: 'SET_STATE_FROM_STORAGE', payload: storageItem });

    }, [dispatch,storageItem]);

    useEffect(() => {
        if(state.links!==initialState.links)
            saveStorage(state);
    }, [state, saveStorage])



    return (
        <Container>
            <Header />
            <MainPage />
            <Footer />
        </Container>
    );
}

export default App;