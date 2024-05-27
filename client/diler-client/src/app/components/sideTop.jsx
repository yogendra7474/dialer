'use client'
import DropdownMenu from "./selectCrm";
import FetchList from "./fetchList";
import DiaInBrowser from './diaInBrowser';

const LeftTopSection = () => {

  return (
    <div className=" tw-p-2 tw-grid tw-grid-cols-1 tw-md:grid-cols-2 tw-gap-4">
      <DropdownMenu />
      <FetchList />
      <DiaInBrowser />
    </div>
  );
};

export default LeftTopSection;
