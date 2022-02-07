import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectActivePopups } from '../../../redux/slices/popups.slice';
import { POPUPS_CONFIGS } from './configs/popup.configs';

const Popups = () => {
  const activePopupsIds = useSelector(selectActivePopups);

  const activePopups = useMemo(() => (
    activePopupsIds.map(id => (
      POPUPS_CONFIGS[id]
    ))
  ), [ activePopupsIds ]);

  return (
    <>
      {activePopups}
    </>
  );
};

export default Popups;
