import { CirclesWithBar } from 'react-loader-spinner';
import { LoaderContainer, LoaderText } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderContainer>
      <CirclesWithBar
        type="Puff"
        color="#34ebae"
        height={200}
        width={200}
        timeout={3000}
      />
      <LoaderText>Loading...</LoaderText>
    </LoaderContainer>
  );
};
