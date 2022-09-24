import Info from '@components/Info';
import CalendarIcon from '@components/icons/calendar';
import LocationIcon from '@components/icons/Location';
export default function Event() {
  return (
    <div className="bg-neutral-100 flex items-center justify-center min-h-screen">
      <div className="max-w-4xl md:px-10 mx-auto flex flex-col md:flex-row-reverse md:justify-between items-start md:gap-10 h-full">
        <img className="w-full max-w-[500px] md:w-1/2 h-full" src="/img/Birthday-cake.png" />
        <div className="px-4 md:px-0 w-full md:w-1/2 pb-10">
          <h2 className="text-primary-400 text-[28px] md:text-[48px] font-bold mt-5 leading-[55.2px]">
            Birthday Bash
          </h2>
          <p className="text-neutral-500 text-sm md:font-base">
            Hosted by <span className="font-bold">Elysia</span>
          </p>
          <div className="mt-10">
            <Info icon={<CalendarIcon />}>
              <div>
                <p className="text-primary-400 font-bold">18 August 6:00PM</p>
                <p className="text-neutral-600 text-sm">
                  to <span className="font-bold">19 August 1:00PM</span> UTC +10
                </p>
              </div>
            </Info>
            <Info icon={<LocationIcon />}>
              <div>
                <p className="text-primary-400 font-bold">Street name</p>
                <p className="text-neutral-600 text-sm">Suburb, State, Postcode</p>
              </div>
            </Info>
          </div>
        </div>
      </div>
    </div>
  );
}
