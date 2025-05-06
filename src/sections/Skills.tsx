import React from 'react';
import { Code, Clock } from 'lucide-react';

const Skills: React.FC = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Python",
    "Next.js",
    "Figma"
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Skills */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4">
                  <Code size={24} />
                </div>
                <h2 className="text-2xl font-bold">使用技術</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4">
                  <Clock size={24} />
                </div>
                <h2 className="text-2xl font-bold">稼働時間</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-lg">平日: </span>
                  <span className="ml-2 text-gray-600 dark:text-gray-400">夜間対応可</span>
                </div>
                <div className="flex items-center">
                  <span className="text-lg">土日: </span>
                  <span className="ml-2 text-gray-600 dark:text-gray-400">終日対応可</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;