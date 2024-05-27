import Navbar from "../components/navbar";
export default function dashbaordLayout({ children }) {
  return (
    <div className="tw-h-screen tw-flex tw-flex-col tw-bg-[#dd6142]">
      <div><Navbar /></div>
      <div className="tw-grid sm:tw-grid-cols-12 tw-bg-green tw-h-screen">
        {children}
      </div>
    </div>

  ); 
}
