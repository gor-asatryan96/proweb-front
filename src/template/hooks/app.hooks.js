import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { openPopup } from '../../redux/reducers/popups/popups.slice';
import { setIsConnected } from '../../redux/reducers/user/user.slice';
import { getUserByTokenThunk } from '../../redux/reducers/user/auth.thunk';
import { messagesThunk } from '../../redux/reducers/messages/messages.thunk';
import { DESTINATION_CONFIGS } from '../components/Popups/configs/destination.configs';
import { getServerConfigsThunk } from '../../redux/reducers/serverConfigs/serverConfigs.thunk';
import { MEDIA_QUERIES } from '../../constants/mediaQuery.constants';

export const useAppSideEffects = () => {
  const dispatch = useDispatch();
  const [ params ] = useSearchParams();
  const isDesktop = useMediaQuery(MEDIA_QUERIES.DESKTOP);

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

  useEffect(() => {
    if (!isDesktop) {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
  }, [ isDesktop ]);
};
