import { useMemo } from "react";

export default function useColumns() {
  const columns = useMemo(
    () => [
      {
        Header: "Plan",
        accessor: "Plan",
      },
      {
        Header: "Dauer",
        accessor: "Dauer",
      },
      {
        Header: "Preis",
        accessor: "Preis",
      },
    ],
    []
  );

  return columns;
}
