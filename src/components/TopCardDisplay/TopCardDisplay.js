import Card from './Card';
import { cardData } from './copy';

const CardSection = () => {
  return (
    <section className="pb-20 bg-blue-200 mt-6 " id="CardSection">
      <div className="container mx-auto px-4 flex flex-wrap" id="card-container">
        {cardData.map((card) => (
          <Card {...card} />
        ))}
      </div>
    </section>
  );
};

export default CardSection;
