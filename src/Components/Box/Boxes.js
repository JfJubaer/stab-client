import React from 'react';
import Box1 from './Box1';
import Box2 from './Box2';
import Box3 from './Box3';
import Box4 from './Box4';
import Box5 from './Box5';
import Box6 from './Box6';



const Boxes = () => {
    return (
        <div className='row row-cols-md-3 row-cols-sm-2 row-cols-lg-6 ms-5'>
            <Box1 className="col"></Box1>
            <Box2 className="col"></Box2>
            <Box3 className="col"></Box3>
            <Box4 className="col"></Box4>
            <Box5 className="col"></Box5>
            <Box6 className="col"></Box6>
        </div>
    );
};

export default Boxes;