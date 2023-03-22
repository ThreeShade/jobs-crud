import React from "react";
import companyLogo from "../../assets/images/company-logo.png";
import Button from "../Button";
function JobCard(props) {
  const { data } = props;
  return (
    <section className="  flex justify-center basis-full md:basis-2/4 xl:p-10 pb-5 md:p-5 ">
      <section className=" py-4 px-6 max-w-[836px] w-full h-full max-h-80 rounded-[10px] bg-white border-grey border-solid border flex items-start  ">
        <div className="">
          <img
            src={companyLogo}
            alt="company-logo"
            className=" h-full w-auto max-h-12 "
          />
        </div>
        <div className=" pl-2 flex flex-col ">
          <h3 className=" font-normal text-2xl text-black capitalize ">
            {data.jobTitle}
          </h3>
          <span className=" text-black text-base font-normal capitalize ">
            {data.companyName} - {data.industry}
          </span>
          <span className=" text-placeholder text-base font-normal pb-6 capitalize ">
            {data.location}
          </span>
          <span className=" text-black text-base font-normal capitalize ">
            {data.remoteType}
          </span>
          <span className=" text-black text-base font-normal ">
            Experience ({data.experience?.min} - {data.experience?.max}years)
          </span>
          <span className=" text-black text-base font-normal ">
            INR (₹) {data.salary?.min} - {data.salary?.max} / Month
          </span>
          <span className=" text-black text-base font-normal ">
            {data.totalEmployee} employees
          </span>
          <div className=" flex gap-6 mt-6 ">
            <Button text={"Apply Now"} />
            <Button variant={"bordered"} text={"External Apply"} />
          </div>
        </div>
      </section>
    </section>
  );
}

export default JobCard;
