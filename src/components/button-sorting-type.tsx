import { NAME_TYPE_QUESTS } from '../const';
import { useAppDispatch, useAppSelector } from '../hooks/store';
import { fetchQuestsAction } from '../services/thunk/fetch-quests';
import { sortingTypeSlice } from '../store/slices/sorting-quests-type-slice';

type Props = {
  type: string;
  index: number;
};

function ButtonSortingType({ type, index }: Props): JSX.Element {
  const dispatch = useAppDispatch();
  const stateSorting = useAppSelector((state) => state.sortingType.type);

  return (
    <li
      className="filter__item"
      onClick={() => {
        dispatch(sortingTypeSlice.actions.changeType(type));
        dispatch(fetchQuestsAction());
      }}
    >
      <input
        type="radio"
        name="type"
        id={type}
        defaultChecked={type === 'all'}
        checked={type === stateSorting}
      />
      <label className="filter__label" htmlFor={type}>
        <svg className="filter__icon" width="26" height="30" aria-hidden="true">
          <use xlinkHref={`#icon-${type}`}></use>
        </svg>
        <span className="filter__label-text">{NAME_TYPE_QUESTS[index]}</span>
      </label>
    </li>
  );
}

export { ButtonSortingType };
