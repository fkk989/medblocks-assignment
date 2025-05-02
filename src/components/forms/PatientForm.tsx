import React, { useEffect, useState } from "react";
import { Form } from "./CustomForm";
import { signUpFomrSchema } from "../../utils/formSchema";
import { Patient } from "../../utils/types";
import { usePatients } from "../../hooks/usePatients";

//
export const PatientForm = ({
  action,
  setOpen,
  id,
}: {
  action: "create" | "update";
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id?: string;
}) => {
  const { registerPatient, updatePatient, fetchPatientById } = usePatients();
  const [data, setData] = useState<any>(null);

  // fetching user data when updating
  useEffect(() => {
    if (id) {
      fetchPatientById(id, setData);
    }
  }, []);
  //
  return (
    <Form.Root
      data={data}
      className=" w-[500px]  flex flex-col items-center  gap-[20px] border-[#dfddd2] border-[1px] rounded-md py-[20px] bg-white"
      onSubmit={(data) => {
        console.log(data);
        if (action === "create") {
          registerPatient(data);
        }
        if (action === "update") {
          const { name, age, gender, address, phonenumber, doctor_in_charge } =
            data as Omit<Patient, "id">;
          // @ts-ignore
          const ageToNumber = parseInt(age);

          updatePatient(id!, {
            name,
            age: ageToNumber,
            gender,
            address,
            phonenumber,
            doctor_in_charge,
          });
        }
        setOpen(false);
      }}
      schema={signUpFomrSchema}
    >
      <h3 className="w-full text-[20px] font-bold text-center">
        {action === "create" ? "Register Patient" : "Update Patient's Data"}
      </h3>
      <div className="w-full flex flex-col items-center gap-[25px]">
        <Form.Content />
      </div>
      <Form.Submit
        loader={
          <div className="w-full h-full flex justify-center items-center bg-sky-700 hover:bg-sky-600 text-[18px] font-[500]  text-white  rounded-full  transition-all duration-200 ease-out">
            <div className="w-[30px] h-[30px] border-[5px] border-white animate-spin rounded-full"></div>
          </div>
        }
        className=" bottom-[10px] w-[90%] h-[50px] mt-[50px]"
      >
        <div
          className={
            "w-full h-full flex justify-center items-center bg-sky-700 hover:bg-sky-600 text-[18px] font-[500]  text-white  rounded-full  transition-all duration-200 ease-out cursor-pointer"
          }
        >
          Submit
        </div>
      </Form.Submit>
    </Form.Root>
  );
};
