import React from 'react';
import { TopNavBar } from './TopNavBar';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-background text-on-surface antialiased fluid-gradient-bg min-h-screen flex flex-col">
      <TopNavBar />
      <main className="flex-grow pt-24">
        {children}
      </main>
      <Footer />
    </div>
  );
};
