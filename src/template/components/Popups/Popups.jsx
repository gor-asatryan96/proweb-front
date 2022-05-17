import React from 'react';
import { useSelector } from 'react-redux';
import { selectActivePopups } from '../../../redux/reducers/popups/popups.slice';
import { POPUPS_CONFIGS } from './configs/popup.configs';

const Popups = () => {
  const activePopupsIds = useSelector(selectActivePopups);

  return (
    <>
      {activePopupsIds.map((id) => {
        const PopupComponent = POPUPS_CONFIGS[id];
        return <PopupComponent key={id} />;
      })}
    </>
  );
};

export default Popups;
