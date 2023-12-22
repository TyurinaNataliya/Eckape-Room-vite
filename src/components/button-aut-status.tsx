import { AppRoute, AuthorizationStatus } from '../const';
import { useAppDispatch, useAppSelector } from '../hooks/store';
import { logoutAction } from '../services/thunk/logout-action';

function ButtonAuthStatus(): JSX.Element {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(
    (state) => state.authorizationStatus.authStatus
  );
  return authorizationStatus === AuthorizationStatus.Auth ? (
    <a
      className="btn btn--accent header__side-item"
      onClick={() => {
        dispatch(logoutAction());
      }}
    >
      Выйти
    </a>
  ) : (
    <a
      className="btn header__side-item header__login-btn"
      href={AppRoute.Login}
    >
      Вход
    </a>
  );
}
export { ButtonAuthStatus };
