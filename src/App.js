import "./styles.css";
import { AgGridReact } from "@ag-grid-community/react";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { AllCommunityModules } from "@ag-grid-community/all-modules";
import "@ag-grid-community/all-modules/dist/styles/ag-grid.css";
import "@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css";

export default function App() {
  const columnDefs = [
    { field: "make" },
    { field: "model" },
    { field: "price" }
  ];

  // specify the data
  const rowData = [
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxter", price: 72000 }
  ];

  const onGridReady = (params) => {
    params.api.sizeColumnsToFit();
  };

  const defaultColumnDefs = {
    resizable: true,
    sortable: true
  };

  return (
    <div className="ag-theme-balham" style={{ height: 400, width: 600 }}>
      <AgGridReact
        rowData={rowData}
        onGridReady={onGridReady}
        columnDefs={columnDefs}
        defaultColDef={defaultColumnDefs}
        modules={[AllCommunityModules, ClientSideRowModelModule]}
      ></AgGridReact>
    </div>
  );
}
