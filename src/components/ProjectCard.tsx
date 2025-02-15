import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  githubUrl,
  liveUrl,
}) => {
  return (
    <div className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="p-8">
        <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex space-x-6">
          <a
            href={githubUrl}
            className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={20} className="mr-2" />
            <span className="font-medium">Code</span>
          </a>
          <a
            href={liveUrl}
            className="flex items-center text-gray-700 hover:text-purple-600 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={20} className="mr-2" />
            <span className="font-medium">Live Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
};