import { HiFunnel } from "react-icons/hi2";
import InvoiceArrange from "../../ui/InvoiceArrange";
import ArrangeOption from "../../ui/ArrangeOption";
import { HiSortDescending } from "react-icons/hi";
import Button from "../../ui/Button";
import { BiPlus } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import {
  filterOptionsButtonClick,
  getIsDarkMode,
  sortOptionsButtonClick,
} from "./dashboardSlice";

import DasboardOptionsButtonContent from "../../ui/DasboardOptionsButtonContent";
import { openingForm, updateFormType } from "../invoice-form/invoiceFormSlice";
import { useReadInvoices } from "../../hooks/useReadInvoices";

function DashBoardHeader() {
  const { filterOptionsIsOpen, sortOptionsIsOpen } = useSelector(
    (store) => store.dashboard
  );
  const isDarkMode = useSelector(getIsDarkMode);
  const dispatch = useDispatch();
  // to get the length of invoices
  const { invoices } = useReadInvoices();

  return (
    <div className="flex  justify-between mt-7 font-spartan max-w-[710px] xl:max-w-[750px] mx-auto  ">
      <section>
        <h1
          className={`font-bold text-[33px] ${
            isDarkMode ? "text-white" : "text-cinder"
          } `}
        >
          Invoices
        </h1>
        <p className="text-[13.5px] text-gray-400 font-semibold   -mt-2 md:mt-0 ">
          <span className="hidden md:block">
            There are total of {invoices?.length} invoices
          </span>
          <span className="md:hidden">{invoices?.length} invoices</span>
        </p>
      </section>

      <div className="flex items-center gap-5  md:gap-8">
        {/* filter */}
        <InvoiceArrange>
          <InvoiceArrange.Button
            onClick={() => dispatch(filterOptionsButtonClick())}
          >
            {/* if mobile view, display the icon, else display the 'filter by status v' */}
            <HiFunnel
              className={`text-[21px] ${
                isDarkMode ? "text-white" : "text-mirage"
              }  md:hidden -z-50`}
            />
            <DasboardOptionsButtonContent
              optionType="filter"
              optionIsOpen={filterOptionsIsOpen}
            />
          </InvoiceArrange.Button>
          {filterOptionsIsOpen && (
            <InvoiceArrange.Options>
              <ArrangeOption type="filterBy" option="All" />
              <ArrangeOption type="filterBy" option="Draft" />
              <ArrangeOption type="filterBy" option="pending" />
              <ArrangeOption type="filterBy" option="paid" />
            </InvoiceArrange.Options>
          )}
        </InvoiceArrange>

        {/* sorting */}
        <InvoiceArrange>
          <InvoiceArrange.Button
            onClick={() => dispatch(sortOptionsButtonClick())}
          >
            {/* if mobile view, display the icon, else display the 'sort by  v' */}
            <HiSortDescending
              className={`text-[21px] ${
                isDarkMode ? "text-white" : "text-mirage"
              }   md:hidden -z-50`}
            />

            <DasboardOptionsButtonContent
              optionType="sort"
              optionIsOpen={sortOptionsIsOpen}
            />
          </InvoiceArrange.Button>
          {sortOptionsIsOpen && (
            <InvoiceArrange.Options>
              <ArrangeOption dispatch={dispatch} type="sortBy" option="Name" />
              <ArrangeOption
                dispatch={dispatch}
                type="sortBy"
                option="Status"
              />
              <ArrangeOption
                dispatch={dispatch}
                type="sortBy"
                option="Due Date"
              />
              <ArrangeOption dispatch={dispatch} type="sortBy" option="Total" />
            </InvoiceArrange.Options>
          )}
        </InvoiceArrange>

        <section>
          <Button
            onClick={() => {
              dispatch(openingForm());
              dispatch(updateFormType("Create"));
            }}
            customStyles="py-1.5 gap-3 px-2"
          >
            <p className="bg-white p-2 rounded-full">
              <BiPlus className="text-lg text-cornflower-blue " />
            </p>
            <p className="pr-3">
              New <span className="hidden md:inline">Invoice</span>
            </p>
          </Button>
        </section>
      </div>
    </div>
  );
}

export default DashBoardHeader;
