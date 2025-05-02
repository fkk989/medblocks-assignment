import { CSSProperties } from "react";
import { SchemaProp } from "../components/forms/CustomForm";

const commonInputStyle: CSSProperties = {
  width: "90%",
  height: "50px",
  border: "1px solid #cbcabf",
  borderRadius: "5px",
  outline: "none",
  padding: "0 10px 0 10px",
  fontSize: "18px"
};
const commonLableStyle: CSSProperties = {
  width: "90%",
  textAlign: "left",
  color: "#403F3E",
  fontWeight: "500",
};

export const signUpFomrSchema: SchemaProp[] = [

  {
    lable_style: { ...commonLableStyle },
    type: "input",
    lable_text: "Name",
    min_lenght: 1,
    props: {
      name: "name",
      type: "text",
      style: { ...commonInputStyle },
    },
    validation: {
      isRequired: true,
      pattern: /^.{2,}$/,
      message: "more than 1 character",
    },
  },

  {
    lable_style: { ...commonLableStyle },
    type: "input",
    lable_text: "Age",
    min_lenght: 1,
    props: {
      name: "age",
      type: "text",
      style: { ...commonInputStyle },
    },
    validation: {
      isRequired: true,
      pattern: /^\d+$/,
      message: "Only type numbers",
    },
  },

  {
    lable_style: { ...commonLableStyle },
    type: "input",
    lable_text: "Gender",
    min_lenght: 1,
    props: {
      name: "gender",
      type: "text",
      style: { ...commonInputStyle },
    },
    validation: {
      isRequired: true,
      pattern: /^.{2,}$/,
      message: "more than 1 character",
    },
  },

  {
    lable_style: { ...commonLableStyle },
    type: "input",
    lable_text: "Address ( Optional )",
    min_lenght: 1,
    props: {
      name: "address",
      type: "text",
      style: { ...commonInputStyle },
    },
  },

  {
    lable_style: { ...commonLableStyle },
    type: "input",
    lable_text: "PhoneNumber",
    min_lenght: 1,
    props: {
      name: "phonenumber",
      type: "text",
      style: { ...commonInputStyle },
    },
    validation: {
      isRequired: true,
      pattern: /^\d+$/,
      message: "Please type numbers only",
    },
  },

  {
    lable_style: { ...commonLableStyle },
    type: "input",
    lable_text: "Doctor In Charge ( Optional )",
    min_lenght: 1,
    props: {
      name: "doctor_in_charge",
      type: "text",
      style: { ...commonInputStyle },
    },

  },
];