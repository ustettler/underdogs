import { useMemo } from "react";

export default function useData() {
  const data = useMemo(
    () => [
      {
        objectId: "AUwGLXUzS2",
        Plan: "Jahres Abo Enterprise",
        Dauer: "1 Jahr",
        Preis: "800 €",
      },
      {
        objectId: "4fOA1olTnP",
        Plan: "2 Jahres Abo Enterprise",
        Dauer: "2 Jahre",
        Preis: "999 €",
      },
      {
        objectId: "Khkkd3cTWW",
        Plan: "Einzelplatz Privat",
        Dauer: "Unbeschränkt",
        Preis: "80 €",
      },
    ],
    []
  );

  return data;
}
