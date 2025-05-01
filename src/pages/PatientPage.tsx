import React from "react";
import { Edit } from "../components/icons/Edit";
import { Delete } from "../components/icons/delete";
import { Patient } from "../utils/types";

const patientsData: Patient[] = [
  {
    id: 1,
    name: "Faisal Khan",
    age: 23,
    gender: "male",
    phoneNumber: "9302411475",
    address: "Bhopal",
    doctor_in_charge: "Dr. Doom",
  },
];
const ColumnHeader: React.FC<{
  title: string;
  className?: string;
}> = ({ title, className = "" }) => {
  return (
    <th
      className={`px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:text-gray-700 ${className}`}
    >
      <div className="flex items-center">
        <span>{title?.toUpperCase()}</span>
      </div>
    </th>
  );
};

export const PatientPage = () => {
  //
  return (
    <div className="w-screen h-screen bg-[#F2F5F7]">
      {/* Patients data */}

      <div className="flex justify-center items-center w-full">
        <div className="w-[90%] overflow-hidden shadow-sm rounded-lg mt-[30px]">
          <table className="w-full border border-gray-300 rounded-md overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <ColumnHeader title="name" className="px-4 py-3 text-left" />
                <ColumnHeader title="age" className="px-4 py-3 text-left" />
                <ColumnHeader title="gender" className="px-4 py-3 text-left" />
                <ColumnHeader title="address" className="px-4 py-3 text-left" />
                <ColumnHeader
                  title="phoneNumber"
                  className="px-4 py-3 text-left"
                />
                <ColumnHeader
                  title="doctor in charge"
                  className="px-4 py-3 text-left"
                />
                <ColumnHeader title="ACTIONS" className="px-4 py-3 text-left" />
              </tr>
            </thead>

            <tbody>
              {patientsData.map((patient) => {
                return (
                  <tr className="border-t border-gray-200 hover:bg-gray-50 transition-colors duration-150">
                    <td className="px-4 py-3 text-sm text-gray-600">
                      {patient.name}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      {patient.age}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      {patient.gender}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      {patient.address}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      {patient.phoneNumber}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      {patient.doctor_in_charge}
                    </td>
                    <td className="flex items-center  gap-[15px] px-4 py-3 text-sm text-gray-600">
                      {/* update paitent */}
                      <button>
                        <Edit className="text-green-700 hover:text-green-600 cursor-pointer" />
                      </button>
                      <button>
                        <Delete className="text-red-600 hover:text-red-400 cursor-pointer" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
