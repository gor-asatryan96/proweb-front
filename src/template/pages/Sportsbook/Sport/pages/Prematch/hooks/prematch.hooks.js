import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import { MEDIA_QUERIES } from '../../../../../../../constants/mediaQuery.constants';
import { replaceSpaces, replaceUnderscores } from '../../../../../../../helpers/utils';
import {
  resetPrematchEvent, selectIsSingleEventLoading, selectPrematchEvents, selectPrematchSportsList,
} from '../../../../../../../redux/reducers/sport/sport.slice';
import {
  getPrematchEventsThunk, getSinglePrematchThunk,
} from '../../../../../../../redux/reducers/sport/sport.thunk';
import { useSportParams } from '../../../hooks/sport.hooks';
import { SPORT_TABS_URLS } from '../../../constants/sport.constants';

const { PRE_MATCH } = SPORT_TABS_URLS;

export const usePrematchSideEffects = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sportList = useSelector(selectPrematchSportsList);
  const events = useSelector(selectPrematchEvents);
  const isEventLoading = useSelector(selectIsSingleEventLoading);

  const isDesktop = useMediaQuery(MEDIA_QUERIES.DESKTOP);
  const isSportExist = sportList.length;

  const {
    sportName, country, league, event,
  } = useSportParams();

  useEffect(() => {
    if (sportName && isSportExist && league && country) {
      dispatch(getPrematchEventsThunk({
        sportName, country, league,
      }))
        .unwrap()
        .then((res) => {
          if (res.error) {
            navigateToFirstLeague();
          }
        });
    }
  }, [ sportName, isSportExist, country, league ]);

  useEffect(() => {
    if (isSportExist && sportName && (isDesktop ? (!league || !country) : (country && !league))) {
      navigateToFirstLeague();
    }
  }, [ sportName, country, league, isSportExist, isDesktop ]);

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
    return () => dispatch(resetPrematchEvent());
  }, [ event, events ]);

  useEffect(() => {
    if (isDesktop && !event && !isEventLoading && events.length) {
      navigateToFirstEvent();
    }
  }, [ events, isDesktop, isEventLoading ]);

  useEffect(() => {
    if (isSportExist && !sportName && !country && !league) {
      const currentSport = sportList[0];
      if (isDesktop) {
        navigate(`/Sport/${PRE_MATCH}/${replaceSpaces(currentSport.sportName)}/${replaceSpaces(currentSport.countries[0].name)}/${
          replaceSpaces(currentSport.countries[0].leagues[0].competitionName)}`);
      } else {
        navigate(`/Sport/${PRE_MATCH}/${replaceSpaces(currentSport.sportName)}`);
      }
    }
  }, [ isSportExist, isDesktop ]);

  function navigateToFirstLeague() {
    const existSport = sportList.find(sport => sport.sportName === replaceUnderscores(sportName)) || sportList[0];
    const existSportName = existSport.sportName;
    const existCountry = existSport.countries[0];
    const existCountryName = existCountry.name;
    const existLeagueName = existCountry.leagues[0].competitionName;
    navigate(`/Sport/${PRE_MATCH}/${replaceSpaces(existSportName)}/${replaceSpaces(existCountryName)}/${replaceSpaces(existLeagueName)}`);
  }

  function navigateToFirstEvent() {
    if (!events.length) return;
    const firstEvent = events[0];
    navigate(`/Sport/${PRE_MATCH}/${sportName}/${country}/${league}/${replaceSpaces(firstEvent.eventName)}-${firstEvent.eventId}`);
  }
};
