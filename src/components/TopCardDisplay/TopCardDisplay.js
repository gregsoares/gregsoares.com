import Card from './Card';
import { cardData } from './copy';

const CardSection = () => {
  return (
    <section className="pb-20 bg-gray-200 -mt-24 " id="CardSection">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap" id="card-container">
          {cardData.map((card) => (
            <Card {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardSection;
