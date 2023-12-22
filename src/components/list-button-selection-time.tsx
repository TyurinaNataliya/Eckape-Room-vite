import { TIME_SELEKTION_TODAY, TIME_SELEKTION_TOMORROW } from '../const';
import { ButtonSelectionTime } from './button-selection-time';

function ListButtonSelectionTime(): JSX.Element {
  return (
    <fieldset className="booking-form__section">
      <legend className="visually-hidden">Выбор даты и времени</legend>
      <fieldset className="booking-form__date-section">
        <legend className="booking-form__date-title">Сегодня</legend>
        <div className="booking-form__date-inner-wrapper">
          {TIME_SELEKTION_TODAY.map((timeToday) => (
            <ButtonSelectionTime time={timeToday} key={timeToday} />
          ))}
        </div>
      </fieldset>
      <fieldset className="booking-form__date-section">
        <legend className="booking-form__date-title">Завтра</legend>
        <div className="booking-form__date-inner-wrapper">
          {TIME_SELEKTION_TOMORROW.map((timeTomorrow) => (
            <ButtonSelectionTime time={timeTomorrow} key={timeTomorrow} />
          ))}
        </div>
      </fieldset>
    </fieldset>
  );
}

export { ListButtonSelectionTime };
