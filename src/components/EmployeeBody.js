import React, { useContext } from "react";
import EmployeeContext from "../utils/EmployeeContext";

const EmployeeBody = () => {
  const context = useContext(EmployeeContext);

  function formatDOB(date) {
    const dateArray = date.split("-");
    const year = dateArray[0];
    const month = dateArray[1];
    const dayArray = dateArray[2].split("T");
    const day = dayArray[0];
    const formattedDate = [month, day, year].join("-");
    return formattedDate;
  }

  return (
    <tbody>
      {context.developerState.filteredUsers[0] !== undefined && context.developerState.filteredUsers[0].name !== undefined ? (
        context.developerState.filteredUsers.map(({ login, name, picture, phone, email, dob }) => {
          return (
            <tr key={login.uuid}>
              <td data-th="Photo" className="align-middle">
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
      ) : (
        <></>
      )}
    </tbody>
  );
}

export default EmployeeBody;
