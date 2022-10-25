import React from 'react';

const CourseDetails = ({course}) => {
    const {title} = course;
    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
};

export default CourseDetails;