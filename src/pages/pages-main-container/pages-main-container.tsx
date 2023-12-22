import { useEffect, useLayoutEffect } from 'react';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { QuestList } from '../../components/quests-list';
import { SortingLevel } from '../../components/sorting-level';
import { SortingType } from '../../components/sorting-type';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { fetchQuestsAction } from '../../services/thunk/fetch-quests';
import { questsSlice } from '../../store/slices/quests-slice';

function MainContainer(): JSX.Element {
  const dispatch = useAppDispatch();
  const selectedSortingTypeQuests = useAppSelector(
    (state) => state.sortingType.type
  );

  const selectedLevelQuests = useAppSelector(
    (state) => state.sortingLevel.level
  );
  const quests = useAppSelector((state) => state.quests.quests);

  const filteredQuests = useAppSelector(
    (state) => state.quests.typeQuestsSorting
  );

  const filteredAndLeveledQuests = useAppSelector(
    (state) => state.quests.levelQuestsSorting
  );

  useLayoutEffect(() => {
    dispatch(fetchQuestsAction());
  }, [dispatch]);

  useEffect(() => {
    const questToSorted =
      selectedSortingTypeQuests === 'all-quests'
        ? quests || []
        : quests?.filter((quest) => quest.type === selectedSortingTypeQuests) ||
          [];
    dispatch(questsSlice.actions.addTypeQuestsSorting(questToSorted));
  }, [dispatch, quests, selectedSortingTypeQuests]);

  useEffect(() => {
    const questToLeveled =
      selectedLevelQuests === 'any'
        ? filteredQuests || []
        : filteredQuests?.filter(
            (quest) => quest.level === selectedLevelQuests
          ) || [];
    dispatch(questsSlice.actions.addLevelQuestsSorting(questToLeveled));
  }, [
    dispatch,
    filteredQuests,
    quests,
    selectedLevelQuests,
    selectedSortingTypeQuests,
  ]);

  return (
    <>
      <Header fromMain />
      <main className="page-content">
        <div className="container">
          <div className="page-content__title-wrapper">
            <h1 className="subtitle page-content__subtitle">
              квесты в Санкт-Петербурге
            </h1>
            <h2 className="title title--size-m page-content__title">
              Выберите тематику
            </h2>
          </div>
          <div className="page-content__item">
            <form className="filter" action="#" method="get">
              <SortingType />
              <SortingLevel />
            </form>
          </div>
          <h2 className="title visually-hidden">Выберите квест</h2>
          <div className="cards-grid">
            {!!filteredQuests?.length && (
              <QuestList quests={filteredAndLeveledQuests} />
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
export { MainContainer };
