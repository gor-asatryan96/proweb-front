import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { resetPrematchSlice } from '../../../../../redux/reducers/sport/sport.slice';
import { getPrematchSportsListThunk } from '../../../../../redux/reducers/sport/sport.thunk';
import { SPORT_TABS_URLS } from '../constants/sport.constants';

const { PRE_MATCH } = SPORT_TABS_URLS;

export const useSportParams = () => {
  const { pathname } = useLocation();
  const [ urlTab, sportName, country, league, event ] = pathname.slice(7).split('/');

  return {
    urlTab, sportName, country, league, event,
  };
};

export const useSportSideEffects = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { urlTab } = useSportParams();

  useEffect(() => {
    if (!urlTab) {
      navigate(`/Sport/${PRE_MATCH}`);
    }
  }, [ urlTab ]);

  useEffect(() => {
    dispatch(getPrematchSportsListThunk());

    return () => dispatch(resetPrematchSlice());
  }, []);
};
