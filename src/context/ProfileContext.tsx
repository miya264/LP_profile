import React, { createContext, useContext } from 'react';

interface ProfileContextType {
  name: string;
  title: string;
  description: string;
  iconPath: string;
}

const profileData: ProfileContextType = {
  name: "tmiya264",
  title: "Web Creator",
  description: "医療系バックグラウンドを持つWeb制作者。ユーザー視点と伝わる設計を大切にしています。",
  iconPath: "/images/icon.png"
};

const ProfileContext = createContext<ProfileContextType>(profileData);

export const ProfileProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ProfileContext.Provider value={profileData}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
};

export default ProfileContext; 