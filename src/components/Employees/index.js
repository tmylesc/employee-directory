import React, { useState, useEffect } from "react";
import EmployeesContext from "../../utils/EmployeesContext";
import Search from "../Search";
import EmployeeGrid from "../EmployeeGrid";
import API from "../../utils/API";

function Employees() {

    const [developerState, setDeveloperState] = useState({
        users: [],
        order: "descend",
        filteredUsers: [],
        headings: [
          { name: "Photo", width: "10%", order: "descend" },
          { name: "Name", width: "10%", order: "descend" },
          { name: "Phone Number", width: "10%", order: "descend" },
          { name: "Email", width: "10%", order: "descend" },
          { name: "Date of Birth", width: "10%", order: "descend" }
        ]
      });

      const handleSort = heading => {
        let currentOrder = developerState.headings
          .filter(elem => elem.name === heading)
          .map(elem => elem.order)
          .toString();
    
        if (currentOrder === "descend") {
          currentOrder = "ascend";
        } else {
          currentOrder = "descend";
        }
    
        const compare = (a, b) => {
          if (currentOrder === "ascend") {
            if (a[heading] === undefined) {
              return 1;
            } else if (b[heading] === undefined) {
              return -1;
            }
            else if (heading === "name") {
              return a[heading].first.localeCompare(b[heading].first);
            } else if (heading === "dob") {
              return a[heading].age - b[heading].age;
            } else {
              return a[heading].localeCompare(b[heading]);
            }
          } else {
            if (a[heading] === undefined) {
              return 1;
            } else if (b[heading] === undefined) {
              return -1;
            }
            else if (heading === "name") {
              return b[heading].first.localeCompare(a[heading].first);
            }else if (heading === "dob") {
              return b[heading].age - a[heading].age;
            }  else {
              return b[heading].localeCompare(a[heading]);
            }
          }
        };
        const sortedUsers = developerState.filteredUsers.sort(compare);
        const updatedHeadings = developerState.headings.map(elem => {
          elem.order = elem.name === heading ? currentOrder : elem.order;
          return elem;
        });
    
        setDeveloperState({
          ...developerState,
          filteredUsers: sortedUsers,
          headings: updatedHeadings
        });
      };

      const handleSearchChange = event => {
        const filter = event.target.value;
        const filteredList = developerState.users.filter(item => {
          let values = item.name.first.toLowerCase() + " " + item.name.last.toLowerCase();
          console.log(filter, values)
        if(values.indexOf(filter.toLowerCase()) !== -1){
          return item
        };
        });
    
        setDeveloperState({ ...developerState, filteredUsers: filteredList });
      };

      useEffect(() => {
        API.getEmployees().then(results => {
          console.log(results.data.results);
          setDeveloperState({
            ...developerState,
            users: results.data.results,
            filteredUsers: results.data.results
          });
        });
      }, []);   

    return (
        <EmployeesContext.Provider value={{ developerState, handleSearchChange, handleSort }}>
            <Search />
            <div className="data-area">
                {developerState.filteredUsers.length > 0 ? <EmployeeGrid /> : <div></div>}
            </div>
        </EmployeesContext.Provider>
    );
};

export default Employees;
