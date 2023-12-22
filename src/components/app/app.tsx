import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute } from '../../const.ts';
import { HelmetProvider } from 'react-helmet-async';
import { MainContainer } from '../../pages/pages-main-container/pages-main-container.tsx';
import { BookingContainer } from '../../pages/pages-booking-container/pages-booking-container.tsx';
import { LoginContainer } from '../../pages/pages-login-container/pages-login-container.tsx';
import { ContactsContainer } from '../../pages/pages-contacts-container/pages-contacts-container.tsx';
import { MyQuestsContainer } from '../../pages/pages-my-quests-container/pages-my-quests-container.tsx';
import { QuestContainer } from '../../pages/pages-quest-container/pages-quest-container.tsx';
import { NotFoundContainer } from '../../pages/pages-not-found-container/pages-not-found-container.tsx';
import { PrivateRoute } from '../private-route.tsx';
import { useAppSelector } from '../../hooks/store.ts';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector(
    (state) => state.authorizationStatus.authStatus
  );
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main} element={<MainContainer />} />

          <Route path={AppRoute.Contacts} element={<ContactsContainer />} />

          <Route path={AppRoute.Login} element={<LoginContainer />} />

          <Route
            path={AppRoute.MyQuest}
            element={
              <PrivateRoute authorizationStatus={authorizationStatus}>
                <MyQuestsContainer />
              </PrivateRoute>
            }
          />

          <Route path={`${AppRoute.Quest}/:id`} element={<QuestContainer />} />

          <Route
            path={AppRoute.Booking}
            element={
              <PrivateRoute authorizationStatus={authorizationStatus}>
                <BookingContainer />
              </PrivateRoute>
            }
          />

          <Route path={AppRoute.NotFound} element={<NotFoundContainer />} />

          <Route path="*" element={<NotFoundContainer />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
export { App };
