import ArrowIcon from '@components/icons/Arrow';
export default function Info({ icon, children }) {
  return (
    <div className="mt-5 w-full flex justify-between items-center max-w-xl">
      <div className="flex items-center mr-4">
        <div className="p-2 bg-white rounded-lg shadow-sm mr-5 w-min">{icon}</div>
        {children}
      </div>
      <ArrowIcon />
    </div>
  );
}
