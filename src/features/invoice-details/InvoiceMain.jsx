/* eslint-disable react/prop-types */

import { useSelector } from "react-redux";
import { formatCurrency, formatDate } from "../../utils/helper";
import { getIsDarkMode } from "../dashboard/dashboardSlice";

function InvoiceMain({ invoice }) {
  const isDarkMode = useSelector(getIsDarkMode);

  const invoicePropertyHeading = isDarkMode
    ? "primary-text-dark"
    : "primary-text";

  const invoicePropertyDetail = isDarkMode
    ? "secondary-text-dark"
    : "secondary-text";

  return (
    <div
      className={`space-y-12 rounded-md px-8 pb-8 pt-7 ${
        isDarkMode ? "bg-[#1c243c]" : "bg-white"
      } `}
    >
      {/* header */}
      <header className="flex flex-col justify-between sm:flex-row sm:items-center space-y-8">
        <div className="space-y-1">
          <p
            className={`font-semibold text-[15px] ${
              isDarkMode ? "text-white" : "text-cinder"
            }`}
          >
            <span className="text-gray-400">#</span>
            {invoice?.id}
          </p>

          <p
            className={`capitalize text-[14px] font-medium ${
              isDarkMode ? "primary-text-dark" : "primary-text"
            } `}
          >
            {invoice?.description}
          </p>
        </div>

        <div
          className={`font-medium invoice-primary-text sm:text-right ${
            isDarkMode ? "text-white" : "text-cornflower-blue"
          }`}
        >
          <p className="text-[13px]">{invoice?.senderAddress?.street}</p>
          <p className="text-[13px]">{invoice?.senderAddress?.city}</p>
          <p className="text-[13px]">{invoice?.senderAddress?.postCode}</p>
          <p className="text-[13px]">{invoice?.senderAddress?.country}</p>
        </div>
      </header>

      {/* main */}

      <main className="grid grid-cols-2 sm:grid-cols-3 gap-y-4">
        <div className="space-y-3">
          <p className={`capitalize text-[13px] ${invoicePropertyHeading} `}>
            invoice date
          </p>
          <p className={`${invoicePropertyDetail}`}>
            {formatDate(invoice?.createdAt)}
          </p>
        </div>

        <div className="space-y-3">
          <p className={`capitalize text-[13px]  ${invoicePropertyHeading} `}>
            bill to
          </p>
          <p className={` ${invoicePropertyDetail}`}>{invoice?.clientName}</p>
        </div>

        <div className="space-y-3 sm:order-4">
          <p className={`capitalize text-[13px]  ${invoicePropertyHeading} `}>
            payment due
          </p>
          <p className={` ${invoicePropertyDetail}`}>
            {formatDate(invoice?.paymentDue)}
          </p>
        </div>

        <div
          className={` font-medium primary-text ${invoicePropertyHeading} sm:order-5`}
        >
          <p className="text-[13px]">{invoice?.clientAddress?.street}</p>
          <p className="text-[13px]">{invoice?.clientAddress?.city}</p>
          <p className="text-[13px]">{invoice?.clientAddress?.postCode}</p>
          <p className="text-[13px]">{invoice?.clientAddress?.country}</p>
        </div>

        <div className="space-y-3 sm:order-3">
          <p className={`capitalize text-[13px] ${invoicePropertyHeading}`}>
            send to
          </p>
          <p className={`${invoicePropertyDetail}`}>{invoice?.clientEmail}</p>
        </div>
      </main>

      {/* do the desktop view for the footer below */}

      {/* footer */}
      <footer className="rounded-lg overflow-hidden ">
        <ul
          className={`${
            isDarkMode ? "bg-ebony-clay" : "bg-lightBackgroundColor "
          } pb-6 pt-2 sm:pt-9 sm:pb-9 px-6 space-y-5 sm:space-y-7 `}
        >
          <li
            className={` ${invoicePropertyHeading} hidden sm:grid sm:grid-cols-4 pb-3`}
          >
            <span>Item Name</span>
            <span className="justify-self-center">Qty.</span>
            <span className="justify-self-center">Price</span>
            <span className="justify-self-end">Total</span>
          </li>
          {invoice?.items?.map((item, i) => (
            <li
              key={i}
              className=" items-center  grid grid-cols-2 sm:grid-cols-4"
            >
              <div className="space-y-1">
                <p className={`${invoicePropertyDetail} `}>{item.name}</p>
                <p
                  className={`text-[15px] font-bold ${invoicePropertyDetail} text-opacity-80 sm:hidden`}
                >
                  {item.quantity} x {formatCurrency(item.price)}
                </p>
              </div>
              <p
                className={`hidden sm:block  ${invoicePropertyHeading} justify-self-center`}
              >
                {item.quantity}
              </p>
              <p
                className={`hidden sm:block primary-text text-[15px] font-bold  text-opacity-80 justify-self-center ${invoicePropertyHeading} `}
              >
                {formatCurrency(item.price)}
              </p>
              <p
                className={`secondary-text justify-self-end ${invoicePropertyDetail} `}
              >
                {formatCurrency(item?.total)}
              </p>
            </li>
          ))}
        </ul>
        <div
          className={`${
            isDarkMode ? "bg-gray-950" : "bg-ebony-clay"
          }  py-8 flex justify-between items-center px-7`}
        >
          <p className="text-white text-[13px] sm:text-sm font-medium">
            Grand Total
          </p>
          <h2 className="text-white text-xl sm:text-[25px] font-bold">
            {formatCurrency(invoice?.total)}
          </h2>
        </div>
      </footer>
    </div>
  );
}

export default InvoiceMain;
