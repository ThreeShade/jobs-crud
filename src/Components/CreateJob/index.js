import React, { useState } from "react";
import { createNewJob } from "../../services/api";
import { validator } from "../../utils/functions";
import Button from "../Button";
import Input from "../Input";
import Modal from "../Modal";
import RadioButton from "../RadioButton";
const stepper1Fields = [
  "jobTitle",
  "companyName",
  "industry",
  "location",
  "remoteType"
];
const stepper2Fields = ["salary", "experience", "applyType", "totalEmployee"];
function CreateJob({ show = true, onClose }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [error, setError] = useState({ step1: {}, step2: {} });
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
    event.preventDefault();
    let _error = {};
    stepper1Fields.forEach((field) => {
      _error = { ..._error, ...validator(field, createJobFormData[field]) };
    });
    setError({ ...error, step1: { ...error.step1, ..._error } });
    if (Object.values(_error).every((_err) => _err === null)) {
      setCurrentStep(2);
    }
    _error = {};
  }
  function step2Handler(event) {
    event.preventDefault();
    let _error = {};
    stepper2Fields.forEach((field) => {
      switch (field) {
        case "salary":
        case "experience":
          _error = {
            ..._error,
            ...validator(
              field,
              createJobFormData[field]?.min,
              createJobFormData[field]?.max
            )
          };
          break;

        default:
          _error = { ..._error, ...validator(field, createJobFormData[field]) };
          break;
      }
    });
    setError({ ...error, step2: { ...error.step2, ..._error } });
    if (
      _error?.salary?.min === null &&
      _error?.salary?.max === null &&
      _error?.experience?.max === null &&
      _error?.experience?.min === null &&
      _error?.totalEmployee === null &&
      _error?.applyType === null
    ) {
      createNewJob(createJobFormData);
      onClose();
    }
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
              error={error?.step1?.jobTitle}
              placeholder={"ex. UX UI Designer"}
              required
            />
            <Input
              value={createJobFormData.companyName}
              className={` pb-6 `}
              name={"companyName"}
              error={error?.step1?.companyName}
              type="text"
              label="Company name"
              placeholder={"ex. Google"}
              required
            />
            <Input
              value={createJobFormData.industry}
              className={` pb-6 `}
              error={error?.step1?.industry}
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
                error={error?.step1?.location}
                label="Location"
                placeholder={"ex. Chennai"}
              />
              <Input
                value={createJobFormData.remoteType}
                className={` w-1/2 `}
                name={"remoteType"}
                type="text"
                error={error?.step1?.remoteType}
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
                error={error?.step2?.experience?.min}
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
                error={error?.step2?.experience?.max}
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
                error={error?.step2?.salary?.min}
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
                error={error?.step2?.salary?.max}
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
              error={error?.step2?.totalEmployee}
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
            <p className=" text-xs text-error pl-1 pt-1 ">
              {error?.step2?.applyType?.length > 0 && error?.step2?.applyType}
            </p>
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
