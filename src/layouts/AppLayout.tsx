import { Header } from '~containers';
import { AppLayoutWrapper } from '~layouts/styles';
import PATHS from '~routes/paths';
import Routes from '~routes/Routes';
import { isOnSpecificPath } from '~src/utilities';

const AppLayout = () => {
  const isOnLoginPage = isOnSpecificPath(PATHS.LOGIN) !== false;

  return (
    <>
      {!isOnLoginPage && <Header />}
      <AppLayoutWrapper>
        <Routes />
      </AppLayoutWrapper>
    </>
  );
};

export default AppLayout;
