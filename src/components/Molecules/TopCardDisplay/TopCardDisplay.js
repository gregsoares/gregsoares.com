import Card from './Card';
import { cardData } from './copy';

/**
 * Original Formal Phrase	Casual Replacement	General Idea Maintained
 * Window to the world	Look at the world	Direct, immediate view/access
 * Digital frontier	Digital playground	New, exciting, and explorative space
 * Master the art of the fix	Learn how to tinker and troubleshoot	The skill of learning to repair what you broke
 */

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
