import { useEffect} from 'react';
import { fetchImage, prevImage, nextImage} from '../redux/listReducer';
import PlaceholderCard from './Card';
import { useDispatch, useSelector } from 'react-redux';

function PlaceholderMainCard() {
    const dispatch = useDispatch();
    const stateSel = useSelector((state: any) => state.list.current)

    function OnFetch() {
       dispatch(fetchImage());
    }

    function onPrev() {
        dispatch(prevImage(stateSel.id));
    }

    function onNext() {
        dispatch(nextImage(stateSel.id));
    }
    
    useEffect(() => {
      dispatch(fetchImage());
    }, [dispatch]);

        return (
            stateSel ? (
            <PlaceholderCard header={stateSel.id} loading={false} avatar={stateSel.url} description={stateSel.url} onPrev={onPrev}
            onFetch={OnFetch} onNext={onNext}/> ) : null
        )
}

export default PlaceholderMainCard;