import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

const Box4 = () => {
    return (
        <div>
            <div className="card m-3 shadow-lg" style={{ "width": "200px" }}>
                <ul className="list-group list-group-flush text-center">
                    <li className="list-group-item fw-bold">Created</li>
                    <li className="list-group-item card-footer text-success" style={{ "backgroundColor": "#f2f3f5" }}><h3>593</h3></li>
                    <li className="list-group-item">
                        <p>to yesterday</p>
                        <h3 className="text-danger mt-0 p-0"> <FaChevronRight /> 9%</h3>
                    </li>
                </ul>

            </div>
        </div>
    );
};

export default Box4;