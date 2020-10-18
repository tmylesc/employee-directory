import React, { useContext } from "react";
import EmployeesContext from "../../utils/EmployeesContext";

export default function EmployeeGrid() {
    const context = useContext(EmployeesContext);
    return (
        <div>
            <table id="table" className="table">

            </table>
        </div>
    )
}
