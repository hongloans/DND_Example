import React from "react";

function MainTheme({ children }: { children: React.ReactNode }) {
  return <section className="flex items-center h-screen p-16 dark:bg-gray-900 dark:text-gray-100">{children}</section>;
}

export default MainTheme;
