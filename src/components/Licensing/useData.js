import { useMemo } from "react";

export default function useData() {
  const data = useMemo(
    () => [
      {
        objectId: "AUwGLXUzS2",
        Plan: "Jahres Abo Enterprise",
        Dauer: "1 Jahr",
        Preis: "1 Mio CHF",
      },
      {
        objectId: "4fOA1olTnP",
        Plan: "2 Jahres Abo Enterprise",
        Dauer: "2 Jahre",
        Preis: "1.5 Mio CHF",
      },
      {
        objectId: "Khkkd3cTWW",
        Plan: "Einzelplatz Privat",
        Dauer: "Unbeschränkt",
        Preis: "80 CHF",
      },
    ],
    []
  );

  return data;
}
