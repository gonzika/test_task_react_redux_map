import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { RootState } from './store';

export function useGeoData(payload) {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({ type: 'FETCH_GEO_DATA', payload })
    }, [])

}