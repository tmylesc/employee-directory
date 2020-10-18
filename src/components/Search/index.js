import React, { useContext } from "react";
import EmployeesContext from "../../utils/EmployeesContext";

export default function Search() {
    const context = useContext(EmployeesContext);

    return (
        <div className="search-area">
            <div className="searchbox">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                            Search
                        </span>
                    </div>
                    <input className="form-control mr-sm-2" type="search" placeholder="Search Name" aria-label="Search" onChange={e => context.handleSearchChange(e)}/>
                </div>
            </div>
        </div>
    );
};
