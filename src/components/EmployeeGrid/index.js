import React, { useContext } from "react";
import EmployeesContext from "../../utils/EmployeesContext";

export default function EmployeeGrid() {
    const context = useContext(EmployeesContext);

    function formatDOB(date) {
        const dateArray = date.split("-");
        const year = dateArray[0];
        const month = dateArray[1];
        const dayArray = dateArray[2].split("T");
        const day = dayArray[0];
        const formattedDate = [month, day, year].join("-");
        return formattedDate;
    };
    


    return (
        <div className="datatable">
            <table id="table" className="table table-hover">
                <tr>
                    {context.developerState.headings.map(({ name, width }) => {
                        return (
                            <th className="col" key={name} style={{ width }}
                                onclick={() => {
                                    context.handleSort(name);
                                }}
                            >
                                {name}
                                <span className="pointer"></span>
                            </th>
                        );
                    })}
                </tr>

                <tbody>
                    {context.developerState.filteredUsers[0] !== undefined && context.developerState.filteredUsers[0].name !== undefined ? (
                        context.developerState.filteredUsers.map(({ login, name, picture, phone, email, dob }) => {
                            return (
                                <tr key={login.uuid}>
                                    <td data-th="Image" className="align-middle">
                                        <img src={picture.medium} alt={name.first + name.last} className="img-responsive"/>
                                    </td>
                                    <td data-th="Name" className="align-middle">
                                        {name.first} {name.last}
                                    </td>
                                    <td data-th="Phone" className="align-middle">
                                        {phone}
                                    </td>
                                    <td data-th="Email" className="align-middle">
                                        {email}
                                    </td>
                                    <td data-th="DOB" className="align-middle">
                                        {formatDOB(dob.date)}
                                    </td>
                                </tr>
                            );
                        })
                    ) : (<></>)};
                </tbody>

            </table>
        </div>
    )
}
