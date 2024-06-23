function NavSideBar() {
  return (
    <div className="h-[80px] md:w-[90px] md:rounded-r-[16px]  overflow-hidden   bg-ebony-clay md:h-[99.5vh] bottom-0">
      {/* logo, theme switch, avatar */}
      <div className="flex  md:h-full md:flex-col items-center justify-between">
        {/* logo and theme switch */}
        <div className="flex w-[90%]  md:h-[88%] md:w-full md:flex-col items-center justify-between border-r md:border-r-0 md:border-b border-san-juan pr-6 md:pr-0 md:pb-6">
          {/* logo */}
          <section className=" w-[80px]  h-[80px] md:h-[80px] md:w-full flex items-center justify-center bg-gradient-to-b from-san-juan to-cornflower-blue md:rounded-r-2xl">
            <img src="/logo.svg" alt="" />
          </section>

          {/* light and dark theme switch */}
          <section className="w-fit cursor-pointer">
            <img src="/icon-moon.svg" alt="" />
          </section>
        </div>

        {/* image avatar */}
        <div className=" w-[11%] md:h-[15%] md:w-full  flex justify-center items-center">
          <img src="/image-avatar.jpg" alt="" className="w-10 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export default NavSideBar;
