import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { MEDIA_QUERIES } from '../../../../../constants/mediaQuery.constants';
import { replaceSpaces, replaceUnderscores } from '../../../../../helpers/utils';
import { resetPrematchSlice, selectPrematchEvents, selectPrematchSportsList } from '../../../../../redux/slices/prematch.slice';
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
  const { pathname } = useLocation();
  const sportList = useSelector(selectPrematchSportsList);
  const events = useSelector(selectPrematchEvents);

  const isDesktop = useMediaQuery(MEDIA_QUERIES.DESKTOP);
  const isSportExist = sportList.length;

  const {
    sportName, country, league, event,
  } = usePrematchParams();

  useEffect(() => {
    dispatch(getPrematchSportsListThunk());

    return () => dispatch(resetPrematchSlice());
  }, []);

  useEffect(() => {
    if (sportName && isSportExist && league && country) {
      dispatch(getPrematchEventsThunk({
        sportName, country, league,
      }))
        .unwrap()
        .then((res) => {
          if (res.error) {
            navigateToFirstLeague();
          } else if (!event && !res.error && isDesktop) {
            const firstEvent = res.competition?.events[0];
            navigate(`${pathname}/${replaceSpaces(firstEvent.eventName)}-${firstEvent.eventId}`);
          }
        });
    }
  }, [ sportName, isSportExist, country, league ]);

  useEffect(() => {
    if (isSportExist && sportName && (!league || !country)) {
      navigateToFirstLeague();
    }
  }, [ sportName, country, league, isSportExist ]);

  useEffect(() => {
    if (event && events.length) {
      const eventPaths = event.split('-');
      const eventID = eventPaths[eventPaths.length - 1];
      dispatch(getSinglePrematchThunk(eventID))
        .unwrap()
        .catch(() => {
          navigateToFirstEvent();
        });
    }
  }, [ event, events ]);

  useEffect(() => {
    if (isSportExist && !sportName && !country && !league) {
      const currentSport = sportList[0];
      // eslint-disable-next-line max-len
      navigate(`/sport/${replaceSpaces(currentSport.sportName)}/${replaceSpaces(currentSport.countries[0].name)}/${
        replaceSpaces(currentSport.countries[0].leagues[0].competitionName)}`);
    }
  }, [ isSportExist ]);

  function navigateToFirstLeague() {
    const existSport = sportList.find(sport => sport.sportName === replaceUnderscores(sportName)) || sportList[0];
    const existSportName = existSport.sportName;
    const existCountry = existSport.countries[0];
    const existCountryName = existCountry.name;
    const existLeagueName = existCountry.leagues[0].competitionName;
    navigate(`/sport/${replaceSpaces(existSportName)}/${replaceSpaces(existCountryName)}/${replaceSpaces(existLeagueName)}`);
  }

  function navigateToFirstEvent() {
    if (!event.length) return;
    const firstEvent = events[0];
    navigate(`/sport/${sportName}/${country}/${league}/${replaceSpaces(firstEvent.eventName)}_${firstEvent.eventId}`);
  }
};
