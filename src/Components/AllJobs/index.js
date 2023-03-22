import React, { useEffect, useState } from "react";
import { fetchAllJobs } from "../../services/api";
import Button from "../Button";
import { JobCard } from "../Cards";

function AllJobs({ createJobOnClick }) {
  const [jobs, setJobs] = useState();
  useEffect(() => {
    (async () => {
      const response = await fetchAllJobs();
      if (response.error === false) {
        setJobs(response.data);
      }
    })();
  }, []);

  return (
    <section className=" flex flex-col h-full w-full ">
      <header className=" flex border-b border-solid border-grey py-3 px-6 ">
        <Button onClick={createJobOnClick} text={"Create job"} />
      </header>
      <section
        className={` grow overflow-y-auto flex  flex-wrap w-full ${
          jobs?.length % 2 === 1 ? " justify-between " : " justify-evenly "
        } `}
      >
        {jobs?.map((job) => (
          <React.Fragment key={job.id}>
            <JobCard data={job} />
          </React.Fragment>
        ))}
      </section>
    </section>
  );
}

export default AllJobs;
