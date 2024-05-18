import React from "react";

interface LayoutProps {
  children: React.ReactElement;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-[#fafafa] dark:bg-[#202c36] h-[100vh] w-full pt-16 md:pt-20 transition-all">
      {children}
    </div>
  );
};

export default Layout;
