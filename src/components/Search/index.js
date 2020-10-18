import React, { useContext } from "react";
import EmployeesContext from "../../utils/EmployeesContext";

export default function Search() {
    const context = useContext(EmployeesContext);

    return (
        <nav className="navbar navbar-expand-lg">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle">
                <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse row" id="navbarNav">
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
            </div>
        </nav>
    );
};
