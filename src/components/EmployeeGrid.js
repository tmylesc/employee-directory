import React, { useContext } from "react";
import EmployeeContext from "../utils/EmployeeContext";
import EmployeeBody from "./EmployeeBody";

const EmployeeGrid = () => {
  const context = useContext(EmployeeContext);

  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            {context.developerState.headings.map(({ name, width }) => {
              return (
                <th className="col" key={name} style={{ width }}
                  onClick={() => {
                    context.handleSort(name);
                  }}
                >
                  {name}
                </th>
              );
            })}
          </tr>
        </thead>

        <EmployeeBody />
      </table>
    </div>
  );
}

export default EmployeeGrid;
