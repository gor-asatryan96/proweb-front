import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { replaceSpaces } from '../../../../../helpers/utils';
import { resetPrematchSlice, selectPrematchSportsList } from '../../../../../redux/slices/prematch.slice';
import { getPrematchEventsThunk, getPrematchSportsListThunk, getSinglePrematchThunk } from '../../../../../redux/thunks/prematch.thunk';

export const usePrematchParams = () => {
  const params = useParams();
  const [ sportName, country, league, event ] = params['*'].split('/');

  return {
    sportName, country, league, event,
  };
};

export const usePrematchSideEffects = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sportList = useSelector(selectPrematchSportsList);

  const isSportExist = sportList.length;

  const {
    sportName, country, league, event,
  } = usePrematchParams();

  useEffect(() => {
    if (event) {
      const eventPaths = event.split('_');
      const eventID = eventPaths[eventPaths.length - 1];
      dispatch(getSinglePrematchThunk(eventID));
    }
  }, [ event ]);

  useEffect(() => {
    if (isSportExist && !sportName && !country && !league) {
      const currentSport = sportList[0];
      // eslint-disable-next-line max-len
      navigate(`/sport/${replaceSpaces(currentSport.sportName)}/${replaceSpaces(currentSport.countries[0].name)}/${replaceSpaces(currentSport.countries[0].leagues[0].competitionName)}`);
    }
  }, [ isSportExist ]);

  useEffect(() => {
    dispatch(getPrematchSportsListThunk());

    return () => dispatch(resetPrematchSlice());
  }, []);

  useEffect(() => {
    if (sportName && isSportExist) {
      dispatch(getPrematchEventsThunk({ sportName, country, league })).unwrap().then((res) => {
      });
    }
  }, [ sportName, isSportExist ]);
};
