import { useLayoutEffect } from 'react';
import {
  AppRoute,
  LevelEnglishRussia,
  QuestsVarietyEnglishRussia,
} from '../const';
import { useAppDispatch, useAppSelector } from '../hooks/store';
import { Link, useParams } from 'react-router-dom';
import { fetchQuestAction } from '../services/thunk/fetch-quest';

function BigQuestCard(): JSX.Element {
  const { id: questId } = useParams();
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    if (questId) {
      dispatch(fetchQuestAction(questId));
    }
  }, [dispatch, questId]);

  const quest = useAppSelector((state) => state.quest.quest);

  return (
    <main className="decorated-page quest-page">
      <div className="decorated-page__decor" aria-hidden="true">
        <picture>
          <source
            type="image/webp"
            srcSet={`${quest?.previewImgWebp || ''}, ${
              quest?.coverImgWebp || ''
            } 2x`}
          />
          <img
            src={quest?.previewImg}
            srcSet={`${quest?.coverImg || ''} 2x`}
            width="1366"
            height="768"
            alt=""
          />
        </picture>
      </div>
      <div className="container container--size-l">
        <div className="quest-page__content">
          <h1 className="title title--size-l title--uppercase quest-page__title">
            {quest?.title}
          </h1>
          <p className="subtitle quest-page__subtitle">
            <span className="visually-hidden">Жанр:</span>
            {quest ? QuestsVarietyEnglishRussia[quest.type] : ''}
          </p>
          <ul className="tags tags--size-l quest-page__tags">
            <li className="tags__item">
              <svg width="11" height="14" aria-hidden="true">
                <use xlinkHref="#icon-person"></use>
              </svg>
              {quest?.peopleMinMax?.[0]}&ndash;{quest?.peopleMinMax?.[1]}
              &nbsp;чел
            </li>
            <li className="tags__item">
              <svg width="14" height="14" aria-hidden="true">
                <use xlinkHref="#icon-level"></use>
              </svg>
              {quest ? LevelEnglishRussia[quest.level] : ''}
            </li>
          </ul>
          <p className="quest-page__description">{quest?.description}</p>
          <Link to={AppRoute.Booking}>
            <a className="btn btn--accent btn--cta quest-page__btn">
              Забронировать
            </a>
          </Link>
        </div>
      </div>
    </main>
  );
}
export { BigQuestCard };
