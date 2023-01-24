import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

const Box1 = () => {
    return (
        <div>
            <div className="card m-3 shadow-lg" style={{ "width": "200px" }}>
                <ul className="list-group list-group-flush text-center">
                    <li className="list-group-item fw-bold">Created</li>
                    <li className="list-group-item card-footer text-success" style={{ "backgroundColor": "#f2f3f5" }}><h3>593</h3></li>
                    <li className="list-group-item">
                        <p>to yesterday</p>
                        <h3 className="text-success mt-0 p-0"> <FaChevronDown /> 9%</h3>
                    </li>
                </ul>

            </div>
        </div>
    );
};

export default Box1;