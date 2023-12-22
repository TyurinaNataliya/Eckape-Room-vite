import { useEffect, useState } from 'react';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { loginAction } from '../../services/thunk/login-action';
import { checkAuthAction } from '../../services/thunk/check-auth-action';
import { fetchQuestsAction } from '../../services/thunk/fetch-quests';
import { AuthData } from '../../type-data/type';
import { useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

function LoginContainer(): JSX.Element {
  const [email, setEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const dispatch = useAppDispatch();
  const error = useAppSelector((state) => state.authorizationStatus.error);
  const authorizationStatus = useAppSelector(
    (state) => state.authorizationStatus.authStatus
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      navigate(AppRoute.Main);
    }
  }, [authorizationStatus, navigate]);

  useEffect(() => {
    // dispatch(
    //   authStatusSlice.actions.addUserStatus(AuthorizationStatus.Unknown)
    // );
    dispatch(checkAuthAction());
  }, [dispatch]);

  const authData: AuthData = {
    password: inputPassword,
    login: email,
  };
  function handleSubmitClickButton(evt: React.MouseEvent<HTMLButtonElement>) {
    evt.preventDefault();
    dispatch(loginAction(authData))
      .unwrap()
      .then(() => {
        dispatch(checkAuthAction());
        dispatch(fetchQuestsAction());
      });
  }

  function handleInputEmail(evt: React.ChangeEvent<HTMLInputElement>) {
    const value = evt.target.value;
    setEmail(value);
  }

  function handleInputPassword(evt: React.ChangeEvent<HTMLInputElement>) {
    const value = evt.target.value;
    setInputPassword(value);
  }
  const checkPassword = /^(?=.*[A-Za-zА-Яа-я])(?=.*\d).+$/.test(inputPassword);
  const checkEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  return (
    <>
      <Header fromLogin />
      <main className="decorated-page login">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source
              type="image/webp"
              srcSet="img/content/maniac/maniac-size-m.webp, img/content/maniac/maniac-size-m@2x.webp 2x"
            />
            <img
              src="img/content/maniac/maniac-size-m.jpg"
              srcSet="img/content/maniac/maniac-size-m@2x.jpg 2x"
              width="1366"
              height="768"
              alt=""
            />
          </picture>
        </div>
        <div className="container container--size-l">
          <div className="login__form">
            <form
              className="login-form"
              action="https://echo.htmlacademy.ru/"
              method="post"
            >
              <div className="login-form__inner-wrapper">
                <h1 className="title title--size-s login-form__title">Вход</h1>
                <div className="login-form__inputs">
                  <div className="custom-input login-form__input">
                    <label className="custom-input__label" htmlFor="email">
                      E&nbsp;&ndash;&nbsp;mail
                    </label>
                    <input
                      onChange={handleInputEmail}
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Адрес электронной почты"
                      required
                      value={email}
                    />
                  </div>
                  <div className="custom-input login-form__input">
                    <label className="custom-input__label" htmlFor="password">
                      Пароль
                    </label>
                    <input
                      onChange={handleInputPassword}
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Пароль"
                      required
                      value={inputPassword}
                    />
                  </div>
                </div>
                {error === null ? '' : `${error}`}
                <button
                  className="btn btn--accent btn--general login-form__submit"
                  type="submit"
                  disabled={!checkPassword || !checkEmail}
                  onClick={handleSubmitClickButton}
                >
                  Войти
                </button>
              </div>
              <label className="custom-checkbox login-form__checkbox">
                <input
                  type="checkbox"
                  id="id-order-agreement"
                  name="user-agreement"
                  required
                />
                <span className="custom-checkbox__icon">
                  <svg width="20" height="17" aria-hidden="true">
                    <use xlinkHref="#icon-tick"></use>
                  </svg>
                </span>
                <span className="custom-checkbox__label">
                  Я&nbsp;согласен с
                  <a
                    className="link link--active-silver link--underlined"
                    href="#"
                  >
                    правилами обработки персональных данных
                  </a>
                  &nbsp;и пользовательским соглашением
                </span>
              </label>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
export { LoginContainer };
