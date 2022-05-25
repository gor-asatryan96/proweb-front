import ContentLoader from 'react-content-loader';

const RowSkeleton = ({
  backgroundColor = 'var(--pmbet-blue-sky-05)', foregroundColor = 'var(--pmbet-blue-sky-08)', radius = '0', ...props
}) => (
  <ContentLoader
    speed={2}
    width='100%'
    height='100%'
    backgroundColor={backgroundColor}
    foregroundColor={foregroundColor}
    {...props}
    >
    <rect x='0' y="0" rx={radius} ry={radius} width="100%" height="100%" />
  </ContentLoader>
);

export default RowSkeleton;
