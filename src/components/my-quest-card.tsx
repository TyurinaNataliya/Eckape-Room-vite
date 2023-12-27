import { LevelEnglishRussia } from '../const';
import { TypeQuest } from '../type-data/type';

type MyQuestsCardProps = {
  questFavorite: TypeQuest;
};

function MyQuestsCard({ questFavorite }: MyQuestsCardProps): JSX.Element {
  const { previewImgWebp, previewImg, level } = questFavorite;
  return (
    <div className="quest-card">
      <div className="quest-card__img">
        <picture>
          <source type="image/webp" srcSet={previewImgWebp} />
          <img
            src={previewImg}
            srcSet={previewImg}
            width="344"
            height="232"
            alt="Мужчина в маске в тёмном переходе."
          />
        </picture>
      </div>
      <div className="quest-card__content">
        <div className="quest-card__info-wrapper">
          <a className="quest-card__link" href="quest.html">
            Маньяк
          </a>
          <span className="quest-card__info">
            [сегодня,&nbsp;17:00. наб. реки Карповки&nbsp;5, лит&nbsp;П
            <br />
            м. Петроградская]
          </span>
        </div>
        <ul className="tags quest-card__tags">
          <li className="tags__item">
            <svg width="11" height="14" aria-hidden="true">
              <use xlinkHref="#icon-person"></use>
            </svg>
            6&nbsp;чел
          </li>
          <li className="tags__item">
            <svg width="14" height="14" aria-hidden="true">
              <use xlinkHref="#icon-level"></use>
            </svg>
            {LevelEnglishRussia[level]}
          </li>
        </ul>
        <button
          className="btn btn--accent btn--secondary quest-card__btn"
          type="button"
        >
          Отменить
        </button>
      </div>
    </div>
  );
}
export { MyQuestsCard };
