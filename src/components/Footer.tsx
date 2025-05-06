import React from 'react';
import { useProfile } from '../context/ProfileContext';

const Footer: React.FC = () => {
  const { name, description, iconPath } = useProfile();
  
  return (
    <footer className="bg-gray-50 dark:bg-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
            <img
              src={iconPath}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xl font-bold mb-2">{name}</h3>
          <p className="text-gray-600 dark:text-gray-400 text-center max-w-md mb-4">
            {description}
          </p>
        </div>
        <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-8">
          © {new Date().getFullYear()} Web Creator. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;