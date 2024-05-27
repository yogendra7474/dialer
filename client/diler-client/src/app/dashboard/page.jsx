import Main from '@/app/components/main';
import Sidebar from '@/app/components/sidebar';


const Layout = ({ children }) => {
  return (
    <div className="tw-flex tw-bg-gray-100 tw-h-screen tw-bg-[#DFFF00]">
        <Sidebar />
        <Main />
    </div>
  );
};

export default Layout;
