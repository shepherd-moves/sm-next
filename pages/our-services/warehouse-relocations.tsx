import React from "react";

function Warehouse() {
  return (
    <div className="bg-white 2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="flex flex-col gap-10 lg:flex-row justify-between ">
        <div className="w-full lg:w-8/12 ">
          <img
            className="w-[633px] h-[400px] object-cover rounded-lg"
            src="/warehouse-hero.jpg"
            alt="Man standing beside a truck"
          />
        </div>
        <div className="w-full lg:w-8/12 flex flex-col ">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-black pb-4">
            Warehouse Relocations
          </h1>
          <p className="font-normal text-base leading-6 text-black ">
            Shepherd Moves has the equipment, expertise and vehicles necessary
            to move any type of warehouse in full. Our team specialises in
            moving heavy machinery, car hoists, racking and all types of tools
            and furniture to make sure your inventory is relocated safely. With
            our knowledge of warehouse moves, we can help you relocate with very
            little disruption to your business. For more information please
            don’t hesitate to contact one of our amazing staff to help you with
            your next office move.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Warehouse;
