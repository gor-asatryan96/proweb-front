import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setIsConnected } from '../../redux/slices/user.slice';
import { getUserByTokenThunk } from '../../redux/thunks/auth.thunk';

export const useSideEffects = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    let token = localStorage.getItem('token');
    !token && (token = sessionStorage.getItem('token'));

    dispatch(token ? getUserByTokenThunk(token) : setIsConnected());
  }, []);
};
