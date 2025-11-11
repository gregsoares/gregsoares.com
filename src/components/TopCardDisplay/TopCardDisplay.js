import Card from './Card';
import { cardData } from './copy';

const CardSection = () => {
  return (
    <section className="pb-20 bg-gray-200 -mt-24 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap" id="card-container">
          {cardData.map((card, index) => (
            <Card key={index + 1} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardSection;
