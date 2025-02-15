import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

interface TimelineItemProps {
  date: string;
  title: string;
  company: string;
  location: string;
  description: string[];
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  date,
  title,
  company,
  location,
  description,
}) => (
  <div className="mb-12 flex gap-8 group">
    <div className="flex flex-col items-center">
      <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
      <div className="w-0.5 h-full bg-gradient-to-b from-blue-500/50 to-purple-500/20"></div>
    </div>
    <div className="flex-1 glass-effect rounded-2xl p-8 transform transition-all duration-300 hover:scale-[1.02] slide-in">
      <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
        <Calendar size={16} className="text-blue-500" />
        <span className="font-medium">{date}</span>
        <MapPin size={16} className="ml-2 text-purple-500" />
        <span className="font-medium">{location}</span>
      </div>
      <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-1">
        {title}
      </h3>
      <p className="text-lg text-gray-600 mb-4 font-medium">{company}</p>
      <ul className="space-y-2">
        {description.map((item, index) => (
          <li key={index} className="flex items-start text-gray-600">
            <span className="w-1.5 h-1.5 mt-2 mr-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export const Timeline: React.FC = () => {
  const experiences = [
    {
      date: "2021 - Present",
      title: "Software Engineer",
      company: "Tech Solutions Inc.",
      location: "San Francisco, CA",
      description: [
        "Led a team of 5 developers in building a microservices architecture",
        "Improved application performance by 40% through optimization",
        "Implemented CI/CD pipelines reducing deployment time by 60%"
      ]
    },
    {
      date: "2019 - 2021",
      title: "Software Engineer",
      company: "Innovation Labs",
      location: "New York, NY",
      description: [
        "Developed and maintained multiple React-based web applications",
        "Collaborated with UX team to implement responsive designs",
        "Mentored junior developers and conducted code reviews"
      ]
    },
    {
      date: "2017 - 2019",
      title: "Junior Developer",
      company: "StartUp Co",
      location: "Boston, MA",
      description: [
        "Built and maintained RESTful APIs using Node.js",
        "Implemented user authentication and authorization",
        "Contributed to the development of company's main product"
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {experiences.map((exp, index) => (
        <TimelineItem key={index} {...exp} />
      ))}
    </div>
  );
};