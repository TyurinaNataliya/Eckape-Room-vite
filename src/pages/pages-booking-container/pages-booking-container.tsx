import { ChangeEvent, useState } from 'react';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { ListButtonSelectionTime } from '../../components/list-button-selection-time';
import { useAppSelector } from '../../hooks/store';

function BookingContainer(): JSX.Element {
  const quest = useAppSelector((state) => state.quest.quest);
  const [name, setName] = useState<string>('');
  const [telephone, setTelephone] = useState<string>('');
  const [countPerson, setCountPerson] = useState<string>('');

  function nameChangeHandle(evt: ChangeEvent<HTMLInputElement>) {
    setName(evt.target.value);
  }
  function telephoneChangeHandle(evt: ChangeEvent<HTMLInputElement>) {
    setTelephone(evt.target.value);
  }
  function countPersonChangeHandle(evt: ChangeEvent<HTMLInputElement>) {
    setCountPerson(evt.target.value);
  }

  // function resetForm() {
  //   setName('');
  //   setTelephone('');
  //   setCountPerson('');
  // }

  return (
    <>
      <Header />
      <main className="page-content decorated-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source
              type="image/webp"
              srcSet="img/content/maniac/maniac-bg-size-m.webp, img/content/maniac/maniac-bg-size-m@2x.webp 2x"
            />
            <img
              src="img/content/maniac/maniac-bg-size-m.jpg"
              srcSet="img/content/maniac/maniac-bg-size-m@2x.jpg 2x"
              width="1366"
              height="1959"
              alt=""
            />
          </picture>
        </div>
        <div className="container container--size-s">
          <div className="page-content__title-wrapper">
            <h1 className="subtitle subtitle--size-l page-content__subtitle">
              Бронирование квеста
            </h1>
            <p className="title title--size-m title--uppercase page-content__title">
              {quest?.title}
            </p>
          </div>
          <div className="page-content__item">
            <div className="booking-map">
              <div className="map">
                <div className="map__container"></div>
              </div>
              <p className="booking-map__address">
                Вы&nbsp;выбрали: наб. реки Карповки&nbsp;5, лит&nbsp;П, м.
                Петроградская
              </p>
            </div>
          </div>
          <form
            className="booking-form"
            action="https://echo.htmlacademy.ru/"
            method="post"
          >
            <ListButtonSelectionTime />

            <fieldset className="booking-form__section">
              <legend className="visually-hidden">Контактная информация</legend>
              <div className="custom-input booking-form__input">
                <label className="custom-input__label" htmlFor="name">
                  Ваше имя
                </label>
                <input
                  onChange={nameChangeHandle}
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Имя"
                  required
                  pattern="[А-Яа-яЁёA-Za-z'- ]{1,}"
                  value={name}
                />
              </div>
              <div className="custom-input booking-form__input">
                <label className="custom-input__label" htmlFor="tel">
                  Контактный телефон
                </label>
                <input
                  onChange={telephoneChangeHandle}
                  type="tel"
                  id="tel"
                  name="tel"
                  placeholder="Телефон"
                  required
                  pattern="[0-9]{10,}"
                  value={telephone}
                />
              </div>
              <div className="custom-input booking-form__input">
                <label className="custom-input__label" htmlFor="person">
                  Количество участников
                </label>
                <input
                  onChange={countPersonChangeHandle}
                  type="number"
                  id="person"
                  name="person"
                  placeholder="Количество участников"
                  required
                  value={countPerson}
                />
              </div>
              <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--children">
                <input type="checkbox" id="children" name="children" checked />
                <span className="custom-checkbox__icon">
                  <svg width="20" height="17" aria-hidden="true">
                    <use xlinkHref="#icon-tick"></use>
                  </svg>
                </span>
                <span className="custom-checkbox__label">
                  Со&nbsp;мной будут дети
                </span>
              </label>
            </fieldset>
            <button
              className="btn btn--accent btn--cta booking-form__submit"
              type="submit"
              disabled={
                name.length < 1 ||
                name.length > 15 ||
                telephone.length < 10 ||
                countPerson.length < 1
              }
            >
              Забронировать
            </button>
            <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--agreement">
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
      </main>
      <Footer />
    </>
  );
}
export { BookingContainer };
