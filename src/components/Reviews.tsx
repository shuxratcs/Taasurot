import { useI18n } from '../context/I18nContext';
import './Reviews.css';

const Reviews = () => {
  const { t } = useI18n();

  const reviews = [
    { id: 1, type: 'reels', placeholder: t('reviews.reels') },
    { id: 2, type: 'reels', placeholder: t('reviews.reels') },
    { id: 3, type: 'telegram', placeholder: t('reviews.tg') },
    { id: 4, type: 'reels', placeholder: t('reviews.reels') },
    { id: 5, type: 'telegram', placeholder: t('reviews.tg') },
    { id: 6, type: 'reels', placeholder: t('reviews.reels') },
  ];

  return (
    <section className="reviews-section">
      <div className="container">
        <div className="section-header text-left">
          <h2 className="h2">{t('reviews.title')}</h2>
          <p className="subtitle">
            {t('reviews.sub1')}<br/>
            {t('reviews.sub2')}<br/>
            {t('reviews.sub3')}
          </p>
        </div>

        <div className="reviews-carousel-container">
          <div className="reviews-carousel">
            {reviews.map(review => (
              <div key={review.id} className={`review-card ${review.type}`}>
                <div className="wireframe-img card-img-placeholder">
                  {review.placeholder}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
