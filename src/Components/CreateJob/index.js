import React, { useState } from "react";
import { createNewJob } from "../../services/api";
import Button from "../Button";
import Input from "../Input";
import Modal from "../Modal";
import RadioButton from "../RadioButton";
function CreateJob({ show, onClose }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [createJobFormData, setCreateJobFormData] = useState({
    jobTitle: "",
    companyName: "",
    industry: "",
    location: "",
    remoteType: "",
    salary: {
      min: "",
      max: ""
    },
    experience: {
      min: "",
      max: ""
    },
    applyType: "",
    totalEmployee: ""
  });
  function step1Handler(event) {
    setCurrentStep(2);
  }
  function step2Handler(event) {
    event.preventDefault();
    createNewJob(createJobFormData);
    onClose();
  }
  function step1OnChangeHandler(event) {
    setCreateJobFormData({
      ...createJobFormData,
      [event.target.name]: event.target.value
    });
  }
  return (
    <Modal show={show} handleClose={onClose}>
      <section className=" flex flex-col h-full ">
        <div className=" flex justify-between items-center pb-6 ">
          <h3 className=" font-['poppins-reg'] text-xl font-normal text-dark ">
            Create a job
          </h3>
          <span className=" font-medium text-base text-dark font-['poppins-med'] ">
            Step {currentStep}
          </span>
        </div>
        {currentStep === 1 ? (
          <form
            onChange={step1OnChangeHandler}
            className=" flex flex-col w-full h-full "
            onSubmit={step1Handler}
          >
            <Input
              value={createJobFormData.jobTitle}
              className={` pb-6 `}
              name={"jobTitle"}
              type="text"
              label="Job title"
              placeholder={"ex. UX UI Designer"}
              required
            />
            <Input
              value={createJobFormData.companyName}
              className={` pb-6 `}
              name={"companyName"}
              type="text"
              label="Company name"
              placeholder={"ex. Google"}
              required
            />
            <Input
              value={createJobFormData.industry}
              className={` pb-6 `}
              name={"industry"}
              type="text"
              label="Industry"
              placeholder={"ex. Information Technology "}
              required
            />
            <div className=" flex justify-between items-center gap-6 w-full pb-6 ">
              <Input
                value={createJobFormData.location}
                className={` w-1/2 `}
                name={"location"}
                type="text"
                label="Location"
                placeholder={"ex. Chennai"}
              />
              <Input
                value={createJobFormData.remoteType}
                className={` w-1/2 `}
                name={"remoteType"}
                type="text"
                label="Remote type"
                placeholder={"ex. In-office"}
              />
            </div>
            <div className=" w-full flex justify-end items-end grow h-full ">
              <Button type="submit" text={"Next"} />
            </div>
          </form>
        ) : (
          <>
            <div className=" flex justify-between items-center gap-6 w-full pb-6 ">
              <Input
                onChange={(event) => {
                  setCreateJobFormData({
                    ...createJobFormData,
                    experience: {
                      ...createJobFormData.experience,
                      min: event.target.value
                    }
                  });
                }}
                value={createJobFormData.experience.min}
                className={` w-1/2 `}
                name={"exp-min"}
                type="number"
                label="Experience"
                placeholder={"Minimum"}
              />
              <Input
                onChange={(event) => {
                  setCreateJobFormData({
                    ...createJobFormData,
                    experience: {
                      ...createJobFormData.experience,
                      max: event.target.value
                    }
                  });
                }}
                value={createJobFormData.experience.max}
                className={` w-1/2 `}
                name={"exp-max"}
                type="number"
                labelClassName={` opacity-0 `}
                label={` Experience`}
                placeholder={"Maximum"}
              />
            </div>
            <div className=" flex justify-between items-center gap-6 w-full pb-6 ">
              <Input
                onChange={(event) => {
                  setCreateJobFormData({
                    ...createJobFormData,
                    salary: {
                      ...createJobFormData.salary,
                      min: event.target.value
                    }
                  });
                }}
                value={createJobFormData.salary.min}
                className={` w-1/2 `}
                name={"sal-min"}
                type="number"
                label="Salary"
                placeholder={"Minimum"}
              />
              <Input
                onChange={(event) => {
                  setCreateJobFormData({
                    ...createJobFormData,
                    salary: {
                      ...createJobFormData.salary,
                      max: event.target.value
                    }
                  });
                }}
                value={createJobFormData.salary.max}
                className={` w-1/2 `}
                name={"sal-max"}
                type="number"
                labelClassName={` opacity-0 `}
                label={` Salary`}
                placeholder={"Maximum"}
              />
            </div>
            <Input
              onChange={(event) => {
                setCreateJobFormData({
                  ...createJobFormData,
                  totalEmployee: event.target.value
                });
              }}
              value={createJobFormData.totalEmployee}
              className={` pb-6 `}
              name={"totalEmployee"}
              type="number"
              label="Total employee"
              placeholder={"ex. 100"}
            />
            <label className=' block pb-3 text-sm font-["poppins-med"] font-medium text-dark '>
              Apply type
            </label>
            <div className="flex gap-4 items-center">
              <RadioButton
                checked={createJobFormData.applyType === "quickApply"}
                onChange={(event) => {
                  setCreateJobFormData({
                    ...createJobFormData,
                    applyType: event.target.name
                  });
                }}
                label={"Quick apply"}
                name={"quickApply"}
              />
              <RadioButton
                checked={createJobFormData.applyType === "externalApply"}
                onChange={(event) => {
                  setCreateJobFormData({
                    ...createJobFormData,
                    applyType: event.target.name
                  });
                }}
                label={"External apply"}
                name={"externalApply"}
              />
            </div>
            <div className=" w-full flex justify-end items-end grow h-full ">
              <Button
                text={"Save"}
                onClick={(event) => {
                  step2Handler(event);
                }}
              />
            </div>
          </>
        )}
      </section>
    </Modal>
  );
}

export default CreateJob;
