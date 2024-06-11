import { Children, ReactElement} from 'react';
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

interface DashboardLayoutProps {
  children: ReactElement; // Define the type of children as ReactElement
}

const DashboardLayout = ({ children}: DashboardLayoutProps) => {
  

  

  return (
    <div className="h-full relative ">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0  bg-gray-900">
        <Sidebar />
      </div>
      <main className="md:pl-72">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
