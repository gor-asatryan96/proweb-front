import ContentLoader from 'react-content-loader';

const RowSkeleton = ({ radius = '0.375rem', ...props }) => (
  <ContentLoader
    speed={2}
    width='100%'
    height='100%'
    backgroundColor="var(--pmbet-blue-dark)"
    foregroundColor='var(--pmbet-blue-darker)'
    {...props}
    >
    <rect x='0' y="0" rx={radius} ry={radius} width="100%" height="100%" />
  </ContentLoader>
);

export default RowSkeleton;
