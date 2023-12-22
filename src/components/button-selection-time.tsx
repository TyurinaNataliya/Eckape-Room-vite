type ButtonSelectionTimeProps = {
  time: string;
};

function ButtonSelectionTime({ time }: ButtonSelectionTimeProps): JSX.Element {
  return (
    <label className="custom-radio booking-form__date">
      <input
        type="radio"
        id="today9h45m"
        name="date"
        required
        value="today9h45m"
      />
      <span className="custom-radio__label">{time}</span>
    </label>
  );
}

export { ButtonSelectionTime };
