import { AppRoute, LevelEnglishRussia } from '../const';
import { Link } from 'react-router-dom';
import { TypeQuest } from '../type-data/type';

type QuestCardProps = {
  quest: TypeQuest;
};

function QuestCard({ quest }: QuestCardProps): JSX.Element {
  const { id, title, peopleMinMax, previewImgWebp, previewImg, level } = quest;

  return (
    <div className="quest-card">
      <Link to={`${AppRoute.Quest}/${id}`}>
        <div className="quest-card__img">
          <picture>
            <source type="image/webp" srcSet={previewImgWebp} />
            <img
              src={previewImg}
              srcSet={previewImg}
              width="344"
              height="232"
              alt="Мужчина в клетке в подземелье."
            />
          </picture>
        </div>
        <div className="quest-card__content">
          <div className="quest-card__info-wrapper">
            <a className="quest-card__link" href={AppRoute.Quest}>
              {title}
            </a>
          </div>
          <ul className="tags quest-card__tags">
            <li className="tags__item">
              <svg width="11" height="14" aria-hidden="true">
                <use xlinkHref="#icon-person"></use>
              </svg>
              {`${peopleMinMax[0]}-${peopleMinMax[1]} чел`}
            </li>
            <li className="tags__item">
              <svg width="14" height="14" aria-hidden="true">
                <use xlinkHref="#icon-level"></use>
              </svg>
              {LevelEnglishRussia[level]}
            </li>
          </ul>
        </div>
      </Link>
    </div>
  );
}

export { QuestCard };
