import React from 'react';
import Boxes from './Box/Boxes';
import Chart1 from './Charts/Chart1';
import Chart2 from './Charts/Chart2';
import Chart3 from './Charts/Chart3';
import Nav from './Nav';

const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <div>
                <Boxes></Boxes>
            </div>
            <div className='row row-cols-lg-2 m-3'>
                <div className='mt-5'>
                    <Chart1></Chart1>
                </div>
                <div>
                    <div className='mt-5'>
                        <Chart2></Chart2>
                    </div>
                    <div className='mt-5'>
                        <Chart3></Chart3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;