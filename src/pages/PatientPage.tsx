import React from "react";
import { Edit } from "../components/icons/Edit";
import { Delete } from "../components/icons/Delete";
import { Modal } from "../components/modals/Modal";
import { usePatients } from "../hooks/usePatients";

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
  const { patients, deletePatient } = usePatients();

  //
  return (
    <div className="w-screen h-screen bg-[#F2F5F7]">
      {/* Patients data */}

      <div className="flex flex-col justify-center items-center w-full">
        {/* create user modal */}
        <div className="w-[90%] flex justify-end items-center mt-[20px]">
          <Modal
            action="create"
            trigger={
              <button
                onClick={async (e) => {
                  e.preventDefault();
                }}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition cursor-pointer"
              >
                Register User +
              </button>
            }
          />
        </div>
        <div className="w-[90%] overflow-hidden shadow-sm rounded-lg mt-[15px]">
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
              {patients.map((patient) => {
                return (
                  <tr
                    key={patient.id}
                    className="border-t border-gray-200 hover:bg-gray-50 transition-colors duration-150"
                  >
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
                      {patient.phonenumber}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      {patient.doctor_in_charge}
                    </td>
                    <td className="flex items-center  gap-[15px] px-4 py-3 text-sm text-gray-600">
                      {/* update paitent */}

                      <Modal
                        action="update"
                        trigger={
                          <Edit className="text-green-700 hover:text-green-600 cursor-pointer" />
                        }
                        id={patient.id}
                      />
                      {/* Delete Button */}
                      <button
                        onClick={() => {
                          if (window.confirm("Do you want to delete Patient")) {
                            deletePatient(patient.id);
                          }
                        }}
                      >
                        <Delete className="text-red-600 hover:text-red-400 cursor-pointer" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {patients.length === 0 && (
            <div className="w-full h-[30px] flex items-center justify-center">
              No Data
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
