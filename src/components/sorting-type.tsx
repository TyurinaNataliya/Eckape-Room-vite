import { NAME_TYPE_QUESTS_ENGLISH } from '../const';
import { ButtonSortingType } from './button-sorting-type';

function SortingType(): JSX.Element {
  return (
    <fieldset className="filter__section">
      <legend className="visually-hidden">Тематика</legend>
      <ul className="filter__list">
        {NAME_TYPE_QUESTS_ENGLISH.map((typeQuest) => (
          <ButtonSortingType
            type={typeQuest}
            key={typeQuest}
            index={NAME_TYPE_QUESTS_ENGLISH.indexOf(typeQuest)}
          />
        ))}
      </ul>
    </fieldset>
  );
}
export { SortingType };
