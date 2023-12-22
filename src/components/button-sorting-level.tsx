import { NAME_LEVEL_QUESTS } from '../const';
import { useAppDispatch, useAppSelector } from '../hooks/store';
import { fetchQuestsAction } from '../services/thunk/fetch-quests';
import { sortingLevelSlice } from '../store/slices/sorting-quests-level-slice';
type Props = {
  level: string;
  index: number;
};

function ButtonSortingLevel({ level, index }: Props): JSX.Element {
  const dispatch = useAppDispatch();
  const stateSorting = useAppSelector((state) => state.sortingLevel.level);

  return (
    <li
      className="filter__item"
      onClick={() => {
        dispatch(sortingLevelSlice.actions.changeLevel(level));
        dispatch(fetchQuestsAction());
      }}
    >
      <input
        type="radio"
        name="level"
        id={level}
        checked={level === stateSorting}
      />
      <label className="filter__label" htmlFor={level}>
        <span className="filter__label-text">{NAME_LEVEL_QUESTS[index]}</span>
      </label>
    </li>
  );
}
export { ButtonSortingLevel };
