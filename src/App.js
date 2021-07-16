import "./styles.css";
import { AgGridReact } from "@ag-grid-community/react";
import { AllModules } from "@ag-grid-community/all-modules";

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

  // let the grid know which columns and what data to use
  const gridOptions = {
    columnDefs: columnDefs,
    rowData: rowData
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
