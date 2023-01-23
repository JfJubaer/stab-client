import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

const Box4 = () => {
    return (
        <div>
            <div class="card m-3 shadow-lg" style={{ "width": "200px" }}>
                <ul class="list-group list-group-flush text-center">
                    <li class="list-group-item fw-bold">Created</li>
                    <li class="list-group-item card-footer text-success" style={{ "background-color": "#d5d4d9" }}><h3>593</h3></li>
                    <li class="list-group-item">
                        <p>to yesterday</p>
                        <h3 class="text-danger mt-0 p-0"> <FaChevronRight /> 9%</h3>
                    </li>
                </ul>

            </div>
        </div>
    );
};

export default Box4;