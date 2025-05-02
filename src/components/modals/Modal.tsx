import React, { useState } from "react";
import { CustomModal } from "./CustomModal";
import { PatientForm } from "../forms/PatientForm";

export const Modal = (prop: {
  trigger: React.ReactNode;
  action: "create" | "update";
  id?: string;
}) => {
  //
  const [open, setOpen] = useState(false);
  //
  return (
    <CustomModal.Root
      isOpen={open}
      setIsOpen={(value) => {
        setOpen(value);
      }}
      className=""
    >
      <CustomModal.Trigger>{prop.trigger}</CustomModal.Trigger>

      <CustomModal.Content className="fixed  cursor-pointer">
        <PatientForm action={prop.action} setOpen={setOpen} id={prop.id} />
      </CustomModal.Content>
    </CustomModal.Root>
  );
};
