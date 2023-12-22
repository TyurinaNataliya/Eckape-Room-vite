import { Link } from 'react-router-dom';
import { AppRoute } from '../const';
import { AuthorizationStatus } from '../const';
import { useAppSelector } from '../hooks/store';
import { ButtonAuthStatus } from './button-aut-status';
type HaederProps = {
  fromLogin?: boolean;
  fromMain?: boolean;
  fromMyQuests?: boolean;
  fromContacts?: boolean;
};
function Header({
  fromMain,
  fromLogin,
  fromMyQuests,
  fromContacts,
}: HaederProps): JSX.Element {
  const authorizationStatus = useAppSelector(
    (state) => state.authorizationStatus.authStatus
  );

  return (
    <header className="header">
      <div className="container container--size-l">
        <span className="logo header__logo">
          {fromMain ? (
            <svg width="134" height="52" aria-hidden="true">
              <use xlinkHref="#logo"></use>
            </svg>
          ) : (
            <svg width="134" height="52" aria-hidden="true">
              <Link to={AppRoute.Main}>
                <a>
                  <use xlinkHref="#logo"></use>
                </a>
              </Link>
            </svg>
          )}
        </span>
        <nav className="main-nav header__main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <Link to={AppRoute.Main}>
                <a className={`${fromMain ? 'active' : ''} link`}>Квесты</a>
              </Link>
            </li>
            <li className="main-nav__item">
              <Link to={AppRoute.Contacts}>
                <a className={`${fromContacts ? 'active' : ''} link`}>
                  Контакты
                </a>
              </Link>
            </li>
            {authorizationStatus === AuthorizationStatus.Auth ? (
              <li className="main-nav__item">
                <Link to={AppRoute.MyQuest}>
                  <a className={`${fromMyQuests ? 'active' : ''} link`}>
                    Мои бронирования
                  </a>
                </Link>
              </li>
            ) : (
              ''
            )}
          </ul>
        </nav>
        <div className="header__side-nav">
          {fromLogin ? '' : <ButtonAuthStatus />}

          <a
            className="link header__side-item header__phone-link"
            href="tel:88003335599"
          >
            8 (000) 111-11-11
          </a>
        </div>
      </div>
    </header>
  );
}
export { Header };
