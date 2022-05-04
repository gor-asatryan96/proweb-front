import { useMediaQuery } from 'react-responsive';
import { MEDIA_QUERIES } from '../../../constants/mediaQuery.constants';
import FixtureItem from './components/FixtureItem/FixtureItem';

const fixtures = [
  'Basketball', 'Football Fixture 9', 'Football Fixture 14', 'Football Fixture 6', 'Football Fixture 8',
  'Football Fixture 2', 'General', 'Football Fixture 3', 'Football Fixture 1', 'Table Tennis', 'Football Fixture 4',
  'Football Fixture 12', 'Football Fixture 11', 'Football Fixture 4', 'Football Fixture 12', 'Tennis',
  'Football Fixture 7', 'Football Fixture 13', 'Table Tennis',
];

const Fixtures = () => {
  const isDesktop = useMediaQuery(MEDIA_QUERIES.DESKTOP);

  return (
    <section className="content-section">
      {!isDesktop && (
        <div className="menu-back">
          <div className="menu-back__title">Fixtures</div>
        </div>
      )}
      <div className="content-section__inner">
        <div className="fixtures__content">
          {isDesktop && (
            <div className="fixture-caption">
              Fixtures
            </div>
          )}
          <ul className="fixtures__list">
            {fixtures.map(fixture => (
              <FixtureItem key={fixture} title={fixture} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Fixtures;
