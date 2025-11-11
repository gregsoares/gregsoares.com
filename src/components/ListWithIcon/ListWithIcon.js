import List from '../List';
const techLeadList = [
  'Lead the technical design and architecture for new components & features, making critical technical decisions and selecting appropriate tools/libraries to guide system implementation.',
  'Establish and enforce technical standards, coding best practices, and quality assurance processes, driving comprehensive code reviews across the team.',
  'Maintain active, hands-on contribution to the codebase while providing technical guidance and mentoring junior developers to elevate team skill and productivity.',
  'Proactively manage and mitigate technical debt, ensuring the long-term maintainability, stability, and performance health for all Front-End applications of the platform.'
];

const technicalProductOwnerList = [
  'Aligning business and technical requirements, prioritizing & refining product backlog to maximize business value and ROI.',
  'Technical liaison between stakeholders and engineering team, translating high-level business goals into actionable technical features and resolving implementation issues during planning and refinement.',
  'Lead the Agile team and all Scrum ceremonies, driving effective sprint execution and protecting the team from scope creep to ensure consistent, timely delivery of product goals.',
  'Propose optimal architecture based on technical analysis, making recommendations to optimize security and guide the team toward stable, long-term technical solutions while identifying risks.'
];
const ListWithIcon = () => {
  return (
    <section className="pb-20 pt-20 relative block bg-gray-800" id="ListSection">
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
              <i className="fas fa-code text-xl fill-blue-700" id="TechLeadList"></i>
            </div>
            <h6 className="text-xl mt-5 font-semibold text-white">Technical Lead</h6>
            <List items={techLeadList} />
          </div>
          <div className="w-full lg:w-5/12 px-4 text-center m-2">
            <div className=" p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
              <i className="fas fa-sitemap text-xl" id="TPOList"></i>
            </div>
            <h5 className="text-xl mt-5 font-semibold text-white">Technical Product Owner</h5>
            <List items={technicalProductOwnerList} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListWithIcon;
