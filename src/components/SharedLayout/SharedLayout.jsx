import { Container, Header, Linka } from './SharedLayout.styled';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { WrapSpinner } from 'components/MovieInfo/MovieInfo.styled';
import { Circles } from 'react-loader-spinner';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Linka to="/" end>
            Home
          </Linka>
          <Linka to="/movies">Movie</Linka>
        </nav>
      </Header>
      <Suspense
        fallback={
          <WrapSpinner>
            <Circles
              height="80"
              width="80"
              color="#ff6b08"
              ariaLabel="circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </WrapSpinner>
        }
      >
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
