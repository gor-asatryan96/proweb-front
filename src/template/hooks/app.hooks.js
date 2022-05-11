import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { openPopup } from '../../redux/slices/popups.slice';
import { setIsConnected } from '../../redux/slices/user.slice';
import { getUserByTokenThunk } from '../../redux/thunks/auth.thunk';
import { messagesThunk } from '../../redux/thunks/messages.thunk';
import { DESTINATION_CONFIGS } from '../components/Popups/configs/destination.configs';
import { getServerConfigsThunk } from '../../redux/thunks/serverConfigs.thunk';

export const useAppSideEffects = () => {
  const dispatch = useDispatch();
  const [ params ] = useSearchParams();

  useEffect(() => {
    const destination = params.get('destination');
    if (destination && DESTINATION_CONFIGS[destination]) {
      dispatch(openPopup(DESTINATION_CONFIGS[destination]));
    }
  }, []);

  useEffect(() => {
    dispatch(getServerConfigsThunk());
  }, []);

  useEffect(() => {
    let token = localStorage.getItem('token');
    !token && (token = sessionStorage.getItem('token'));

    dispatch(token ? getUserByTokenThunk(token) : setIsConnected());
    dispatch(messagesThunk());
    // dispatch(setGifts(GIFTS)); // TODO: get real gifts from server
  }, []);
};
