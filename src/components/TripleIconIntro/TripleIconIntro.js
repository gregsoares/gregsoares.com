import List from '../List';
const techLeadList = [
  'Leading the technical design, implementation of new features and mentoring junior developers.',
  'Responsible for selecting the appropriate tools, libraries, and managing technical debt.',
  'Creating and enforcing technical standards, coding best practices and quality assurance processes',
  'In Summary: Technical decision-making, code reviews, system design, hands-on coding'
];

const implementationSpecialistList = ['One', 'One', 'One', 'One'];

const technicalProductOwnerList = ['One', 'Two', 'Three', 'Four'];
const TripleIconIntro = () => {
  return (
    <section className="pb-20 pt-20 relative block bg-gray-800">
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
        style={{ transform: 'translateZ(0)' }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon className=" fill-current" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>

      <div className="container mx-auto lg:pt-24 lg:pb-64">
        <div className="flex flex-wrap text-center justify-center">
          <div className="w-full lg:w-5/12 px-4">
            <h2 className="text-4xl font-semibold text-white">Roles & Responsibilities</h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-200 ">
              Here are some of the roles I recently fulfilled as a Senior Software Engineer at a
              FinTech startup:
            </p>
          </div>
        </div>
        <div className="flex flex-wrap mt-12 justify-center">
          <div className="w-full lg:w-6/12 text-center border-r-1 border-gray-500 border-solid pr-2 mr-4">
            <div className=" p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
              <i className="fas fa-medal text-xl"></i>
            </div>
            <h6 className="text-xl mt-5 font-semibold text-white">Technical Lead</h6>
            <List items={techLeadList} />
          </div>
          <div className="w-full lg:w-5/12 px-4 text-center m-2">
            <div className=" p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
              <i className="fas fa-lightbulb text-xl"></i>
            </div>
            <h5 className="text-xl mt-5 font-semibold text-white">Technical Product Owner</h5>
            <List items={technicalProductOwnerList} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TripleIconIntro;
