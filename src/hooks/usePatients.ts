import { useCallback, useEffect, useState } from "react";
import { usePGlite } from "@electric-sql/pglite-react";
import { Patient } from "../utils/types";

export const usePatients = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const db = usePGlite();

  const fetchPatients = useCallback(async () => {
    try {
      console.log("Fetching patients...");

      const result = await db.live.query("SELECT * FROM patients", [], (res) => {
        console.log("Updated Data live", res.rows)
        setPatients(res.rows as Patient[])
      });
      const newPatients = result.initialResults.rows as Patient[];
      setPatients(newPatients);
    } catch (error: any) {
      console.error("Failed to fetch patients:", error?.message);
    }
  }, [db]);

  useEffect(() => {
    fetchPatients(); //Fetching Patients on load
  }, [fetchPatients]);

  const fetchPatientById = useCallback(
    async (id: string, setData: React.Dispatch<React.SetStateAction<Patient>>) => {
      try {
        const result = await db.query("SELECT * FROM patients WHERE id = $1;", [id]);
        console.log("patient by id: ", result);
        if (result.rows.length > 0) {
          setData(result.rows[0] as Patient);
        }
      } catch (error: any) {
        console.error("Failed to fetch patient by ID:", error?.message);
      }
    },
    [db]
  );

  const registerPatient = useCallback(
    async ({ name, age, address, gender, doctor_in_charge, phonenumber }: Omit<Patient, "id">) => {
      try {
        await db.query(
          `INSERT INTO patients (name, age, gender, address, phoneNumber, doctor_in_charge)
           VALUES ($1, $2, $3, $4, $5, $6);`,
          [name, age, gender, address, phonenumber, doctor_in_charge]
        );

      } catch (error: any) {
        console.error("Failed to register patient:", error?.message);
      }
    },
    []
  );

  const updatePatient = useCallback(
    async (
      id: string,
      { name, age, address, gender, doctor_in_charge, phonenumber }: Omit<Patient, "id">
    ) => {
      try {
        await db.query(
          `UPDATE patients SET 
            name = $1, 
            age = $2, 
            gender = $3, 
            address = $4, 
            phoneNumber = $5, 
            doctor_in_charge = $6
           WHERE id = $7;`,
          [name, age, gender, address, phonenumber, doctor_in_charge, id]
        );

      } catch (error: any) {
        console.error("Failed to update patient:", error?.message);
      }
    },
    []
  );

  const deletePatient = useCallback(
    async (id: string) => {
      try {
        // 
        await db.query("DELETE FROM patients WHERE id = $1", [id]);
        // 
      } catch (error: any) {
        console.error("Failed to delete patient:", error?.message);
      }
    },
    []
  );

  return {
    patients,
    fetchPatients,
    registerPatient,
    updatePatient,
    deletePatient,
    fetchPatientById,
  };
};
