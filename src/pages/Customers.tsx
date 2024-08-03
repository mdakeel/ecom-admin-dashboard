import React from "react";
import WidgetItem from "../components/admin/dashboard/WidgetItem";
import ProductTable from "../components/admin/product/ProductTable";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Products = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div className="w-full bg-[#F9FAFB] md:mt-8 mt-6 mb-6 md:pl-[0px] pl-[60px]">
      <div className="flex items-center justify-between w-full">
        <h1 className="md:text-xl text-md font-semibold ">
          Dashboard{" "}
          <span className=" font-medium text-gray-500"> / Customer</span>
        </h1>
        <div className="group">
          <p
            onClick={() => navigate(-1)} // Navigate to the previous page on click
            className="flex items-center gap-2 text-[18px] px-3 cursor-pointer py-[3px] rounded-md text-blue-500 group-hover:text-blue-700 transition-colors"
          >
            <HiArrowNarrowLeft
              size={22}
              className="group-hover:-translate-x-2 transition-transform"
            />
            Back
          </p>
        </div>
      </div>
      <div className=" w-full">
        curstomer
      </div>
    </div>
  );
};

export default Products;
