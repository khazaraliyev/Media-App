import { useDispatch } from "react-redux";
import { useState, useCallback } from "react";

export function useThunk(thunk) {
    
    const dispatch = useDispatch();
    
    const [isLoading, setIsLoading] = useState(false);
    const [loadingError, setLoadingError] = useState(null);

    const runThunk =useCallback((arg) => {
        setIsLoading(true);
        dispatch(thunk(arg))
            .unwrap()
            .catch((err) => setLoadingError(err))
            .finally(() => setIsLoading(false))      
    }, [dispatch, thunk])

    return [runThunk, isLoading, loadingError];
};
