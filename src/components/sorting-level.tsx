import { NAME_LEVEL_QUESTS_ENGLISH } from '../const';
import { ButtonSortingLevel } from './button-sorting-level';

function SortingLevel(): JSX.Element {
  return (
    <fieldset className="filter__section">
      <legend className="visually-hidden">Сложность</legend>
      <ul className="filter__list">
        {NAME_LEVEL_QUESTS_ENGLISH.map((levelQuest) => (
          <ButtonSortingLevel
            level={levelQuest}
            key={levelQuest}
            index={NAME_LEVEL_QUESTS_ENGLISH.indexOf(levelQuest)}
          />
        ))}
      </ul>
    </fieldset>
  );
}
export { SortingLevel };
