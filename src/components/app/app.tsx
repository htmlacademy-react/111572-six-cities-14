import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AutorizationStatus, CardOffered } from '../../const';
import PrivateRoute from '../private-route/private-route';
import MainPage from '../../pages/main-page/main-page';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Offer from '../../pages/offer/offer';
import Error from '../../pages/error/error';

type AppProps = {
  offers: CardOffered[];
}
function App({offers}: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Root} element={ <MainPage offersMainPage={offers}/> } />
          <Route path={AppRoute.Login} element={<Login/>} />
          <Route path={AppRoute.Favorites} element={<PrivateRoute autorizationStatus={AutorizationStatus.NoAuth}><Favorites /></PrivateRoute>}/>
          <Route path={`${AppRoute.Offer}/:id`} element={<Offer/>} />
          <Route path='*' element={<Error/>} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
