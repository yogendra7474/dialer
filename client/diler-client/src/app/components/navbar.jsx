import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faUser} from '@fortawesome/free-solid-svg-icons'


export default function  Navbar (){
  return (
    <nav className="tw-py-2 tw-bg-[#140926]">
      <div className="tw-w-full tw-flex tw-justify-between tw-items-center tw-px-4">
        {/* Left Side - Logo and Links */}
        <div className="tw-flex tw-items-center tw-text-[#dcdadf]">
          <div className="tw-flex tw-items-center">
            <div className="tw-flex tw-items-center tw-justify-center">
              <Link href="/dashboard/dialer"><img src="../../logo-dash.svg" className="tw-h-8" alt="Logo" /></Link>
            </div>
            <div className="tw-ml-4">
              <Link className="tw-mr-4" href="/dashboard/dialer">Dialer</Link>
            </div>
            <div className="tw-ml-4">
              <Link className="tw-mr-4" href="/dashboard/analytics">Analytics</Link>
            </div>
            <div className="tw-ml-4">
              <Link className="tw-mr-4" href="/dashboard/history">Call History</Link>
            </div>
          </div>
        </div>
        
        {/* Right Side - Search and Profile */}
        <div className="tw-flex tw-items-center tw-space-x-4">
          {/* Search Bar */}
          <div className="tw-relative">
            <input 
              type="text" 
              placeholder="Search" 
              className="tw-px-4 tw-py-2 tw-rounded-md tw-bg-gray-700 tw-text-white focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-gray-500"
            />
          </div>
          {/* Icons */}
          <div className="tw-flex tw-items-center tw-justify-center tw-h-5 tw-w-5 tw-bg-[#442952] tw-rounded-full">
            <FontAwesomeIcon icon={faGear} className="tw-text-white" size="lg" />
          </div>
          <div className="tw-flex tw-items-center tw-justify-center tw-h-5 tw-w-5 tw-rounded-full">
            <FontAwesomeIcon icon={faUser} className="tw-text-white" size="lg" />
          </div>
        </div>
      </div>
    </nav>
  );
};

