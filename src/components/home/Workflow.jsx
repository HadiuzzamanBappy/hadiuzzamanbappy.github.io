import React from 'react';
import { FiArrowRight, FiBox } from 'react-icons/fi';

const workflowItems = [
  { title: "Goals & Objective", description: "Define clear goals and objectives to align the team and project scope." },
  { title: "Research", description: "Analyze user needs and industry trends to build a solid foundation." },
  { title: "Wireframe", description: "Create structured wireframes to visualize the project's layout." },
  { title: "Prototyping", description: "Develop interactive prototypes to test usability and refine functionality." },
  { title: "Finalize Design", description: "Incorporate feedback and finalize the design for implementation." },
];

// Single workflow step with tooltip
const WorkflowItem = ({ item }) => (
  <li className="relative group">
    <div className="flex items-center p-1.5 rounded-lg border bg-white dark:bg-purple-800/10 dark:border-purple-800/70 shadow-sm gap-3">
      <span className="bg-gray-100 dark:bg-purple-800/70 p-1 rounded-md text-gray-600 dark:text-gray-300">
        <FiArrowRight />
      </span>
      <span className="text-gray-700 dark:text-gray-200">{item.title}</span>
    </div>
    {/* Tooltip appears on hover */}
    <div className="absolute left-1/2 bottom-full -translate-x-1/2 mb-4 w-64 p-3 bg-gray-200 dark:bg-purple-900/90 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 pointer-events-none z-10">
      <h5 className="font-bold text-base text-slate-700 dark:text-white mb-1">{item.title}</h5>
      <p className="text-sm text-slate-600 dark:text-slate-300">{item.description}</p>
      {/* Tooltip arrow */}
      <div className="absolute left-1/2 top-full -translate-x-1/2 -mt-2 w-4 h-4 bg-gray-200 dark:bg-purple-900/90 transform rotate-45"></div>
    </div>
  </li>
);

const Workflow = () => {
  return (
    <div className="bg-white/50 dark:bg-purple-800/10 p-4 rounded-2xl shadow-lg flex flex-col h-full w-full">
      <div className="text-center mb-4">
        <div className="flex items-center justify-center gap-2 text-gray-500 dark:text-gray-300">
          <FiBox /><span>Work Process</span>
        </div>
      </div>
      <ul className="space-y-1 flex-grow flex flex-col justify-around">
        {/* Render each workflow step */}
        {workflowItems.map(item => <WorkflowItem key={item.title} item={item} />)}
      </ul>
    </div>
  );
};

export default Workflow;