import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={300}
    height={380}
    viewBox="0 0 300 380"
    backgroundColor="#ededed"
    foregroundColor="#c9c9c9"
  >
    <rect x="25" y="20" rx="10" ry="10" width="250" height="350" />
  </ContentLoader>
);

export default Skeleton;
