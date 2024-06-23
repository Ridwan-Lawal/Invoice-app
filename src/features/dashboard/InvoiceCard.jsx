import { IoIosArrowForward } from "react-icons/io";
import Status from "../../ui/Status";

function InvoiceCard() {
  return (
    <div className="bg-white shadow-md shadow-gray-100  border border-transparent rounded-lg hover:border-mirage  hover:scale-[1.01] cursor-pointer  transition-all duration-200 px-5 pb-4 pt-6  ">
      {/* id date, name  price, status*/}
      <div className=" text-black font-spartan flex flex-col gap-1    md:flex-row md:justify-between md:max-w-[700px] mx-auto">
        {/* id and date and name */}
        <div className="flex justify-between  border md:items-center md:w-[53%]">
          {/* id and date */}
          <section className="flex flex-col gap-y-3 md:flex-row md:items-center border md:w-[60%] justify-between md:gap-3">
            <p className="text-cinder font-semibold">
              <span className="text-gray-400">#</span>000000
            </p>
            <p className="text-gray-400 text-[13px] font-medium">
              Due Sep 20, 2021
            </p>
          </section>
          {/* name */}
          <p className="text-gray-400 text-[13px] font-medium">Alex Grim</p>
        </div>

        {/* price and status */}
        <section className="flex items-center justify-between gap-4">
          <p className="text-cinder font-semibold text-[15px]">$556.00</p>
          <Status />
          <IoIosArrowForward className="text-cornflower-blue hidden md:block" />
        </section>
      </div>
    </div>
  );
}

export default InvoiceCard;
