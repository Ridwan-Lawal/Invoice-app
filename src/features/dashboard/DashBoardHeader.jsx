import { HiFunnel } from "react-icons/hi2";
import InvoiceArrange from "../../ui/InvoiceArrange";
import ArrangeOption from "../../ui/ArrangeOption";
import { HiSortDescending } from "react-icons/hi";
import Button from "../../ui/Button";
import { BiPlus } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import {
  filterOptionsButtonClick,
  sortOptionsButtonClick,
} from "./dashboardSlice";

import DasboardOptionsButtonContent from "../../ui/DasboardOptionsButtonContent";
import { openingForm } from "../invoice-form/invoiceFormSlice";

function DashBoardHeader() {
  const { filterOptionsIsOpen, sortOptionsIsOpen } = useSelector(
    (store) => store.dashboard
  );

  const dispatch = useDispatch();
  console.log(filterOptionsIsOpen, sortOptionsIsOpen);

  return (
    <div className="flex border justify-between mt-7 font-spartan max-w-[710px] xl:max-w-[750px] mx-auto">
      <section>
        <h1 className=" font-bold text-cinder   text-4xl ">Invoices</h1>
        <p className="text-[13.5px] text-gray-400 font-medium   -mt-2 md:mt-0 ">
          <span className="hidden md:block">There are total of X invoices</span>
          <span className="md:hidden">X invoices</span>
        </p>
      </section>

      <div className="flex items-center gap-5 border border-black md:gap-8">
        {/* filter */}
        <InvoiceArrange
          onBlur={() =>
            filterOptionsIsOpen && dispatch(filterOptionsButtonClick())
          }
        >
          <InvoiceArrange.Button
            onClick={() => dispatch(filterOptionsButtonClick())}
          >
            {/* if mobile view, display the icon, else display the 'filter by status v' */}
            <HiFunnel className="text-[21px] text-mirage md:hidden -z-50" />
            <DasboardOptionsButtonContent
              optionType="filter"
              optionIsOpen={filterOptionsIsOpen}
            />
          </InvoiceArrange.Button>
          {filterOptionsIsOpen && (
            <InvoiceArrange.Options>
              <ArrangeOption option="Draft" />
              <ArrangeOption option="pending" />
              <ArrangeOption option="paid" />
            </InvoiceArrange.Options>
          )}
        </InvoiceArrange>

        {/* sorting */}
        <InvoiceArrange
          onBlur={() => sortOptionsIsOpen && dispatch(sortOptionsButtonClick())}
        >
          <InvoiceArrange.Button
            onClick={() => dispatch(sortOptionsButtonClick())}
          >
            {/* if mobile view, display the icon, else display the 'sort by  v' */}
            <HiSortDescending className="text-[21px] text-mirage md:hidden -z-50" />

            <DasboardOptionsButtonContent
              optionType="sort"
              optionIsOpen={sortOptionsIsOpen}
            />
          </InvoiceArrange.Button>
          {sortOptionsIsOpen && (
            <InvoiceArrange.Options>
              <ArrangeOption option="Name" />
              <ArrangeOption option="Status" />
              <ArrangeOption option="Due Date" />
              <ArrangeOption option="Total" />
            </InvoiceArrange.Options>
          )}
        </InvoiceArrange>

        <section>
          <Button
            onClick={() => dispatch(openingForm())}
            customStyles="py-1.5 gap-3 px-2"
          >
            <p className="bg-white p-2 rounded-full">
              <BiPlus className="text-lg text-cornflower-blue " />
            </p>
            <p className="pr-4">
              New <span className="hidden md:inline">Invoice</span>
            </p>
          </Button>
        </section>
      </div>
    </div>
  );
}

export default DashBoardHeader;
