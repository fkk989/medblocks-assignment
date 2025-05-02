import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { PGlite } from "@electric-sql/pglite";
import { PGliteProvider } from "@electric-sql/pglite-react";
import { live } from "@electric-sql/pglite/live";

(async () => {
  const db = await PGlite.create({
    extensions: { live },
    dataDir: "idb://medblocks",
  });

  db.exec(`
  CREATE TABLE IF NOT EXISTS patients (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    age INTEGER NOT NULL,
    gender TEXT NOT NULL,
    address TEXT,
    phonenumber TEXT NOT NULL,
    doctor_in_charge TEXT
  );
`);

  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <PGliteProvider db={db}>
        <App />
      </PGliteProvider>
    </StrictMode>
  );
})();
