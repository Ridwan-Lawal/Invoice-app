/* eslint-disable react/prop-types */

import { formatCurrency, formatDate } from "../../utils/helper";

function InvoiceMain({ invoice }) {
  return (
    <div className="border border-black space-y-12 bg-white  rounded-md px-8 pb-8 pt-7 ">
      {/* header */}
      <header className="flex flex-col justify-between sm:flex-row sm:items-center space-y-8">
        <div className="space-y-1">
          <p className="text-cinder font-bold text-[15px] ">
            <span className="text-gray-400">#</span>
            {invoice?.id}
          </p>
          <p className="primary-text capitalize">{invoice?.description}</p>
        </div>

        <div className=" font-medium primary-text sm:text-right">
          <p className="text-[13px]">{invoice?.senderAddress?.street}</p>
          <p className="text-[13px]">{invoice?.senderAddress?.city}</p>
          <p className="text-[13px]">{invoice?.senderAddress?.postCode}</p>
          <p className="text-[13px]">{invoice?.senderAddress?.country}</p>
        </div>
      </header>

      {/* main */}

      <main className="grid grid-cols-2 sm:grid-cols-3 gap-y-4">
        <div className="space-y-3">
          <p className="capitalize text-[13px] primary-text">invoice date</p>
          <p className="secondary-text">{formatDate(invoice?.createdAt)}</p>
        </div>

        <div className="space-y-3">
          <p className="capitalize text-[13px] primary-text">bill to</p>
          <p className="secondary-text">{invoice?.clientName}</p>
        </div>

        <div className="space-y-3 sm:order-4">
          <p className="capitalize text-[13px] primary-text">payment due</p>
          <p className="secondary-text">{formatDate(invoice?.paymentDue)}</p>
        </div>

        <div className=" font-medium primary-text sm:order-5">
          <p className="text-[13px]">{invoice?.clientAddress?.street}</p>
          <p className="text-[13px]">{invoice?.clientAddress?.city}</p>
          <p className="text-[13px]">{invoice?.clientAddress?.postCode}</p>
          <p className="text-[13px]">{invoice?.clientAddress?.country}</p>
        </div>

        <div className="space-y-3 sm:order-3">
          <p className="capitalize text-[13px] primary-text">send to</p>
          <p className="secondary-text">{invoice?.clientEmail}</p>
        </div>
      </main>

      {/* do the desktop view for the footer below */}

      {/* footer */}
      <footer className="rounded-lg overflow-hidden ">
        <ul className="bg-lightBackgroundColor pb-6 pt-2 sm:pt-9 sm:pb-9 px-6 space-y-5 sm:space-y-7 ">
          <li className="primary-text hidden sm:grid sm:grid-cols-4 pb-3">
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
                <p className="secondary-text">{item.name}</p>
                <p className="text-[15px] font-bold text-cornflower-blue text-opacity-80 sm:hidden">
                  {item.quantity} x {formatCurrency(item.price)}
                </p>
              </div>
              <p className="hidden sm:block primary-text justify-self-center">
                {item.quantity}
              </p>
              <p className="hidden sm:block primary-text text-[15px] font-bold text-cornflower-blue text-opacity-80 justify-self-center">
                {formatCurrency(item.price)}
              </p>
              <p className="secondary-text justify-self-end">
                {formatCurrency(item.total)}
              </p>
            </li>
          ))}
        </ul>
        <div className="bg-ebony-clay py-8 flex justify-between items-center px-7">
          <p className="text-white text-sm font-medium">Grand Total</p>
          <h2 className="text-white text-[25px] font-bold">
            {formatCurrency(invoice?.total)}
          </h2>
        </div>
      </footer>
    </div>
  );
}

export default InvoiceMain;
