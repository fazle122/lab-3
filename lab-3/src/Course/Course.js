import React,{ Component } from 'react';

class Course extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let course = this.props.courseItem;
        return(
            <div>
                <div>
                    <h6> 
                        {course.name} ({course.credit})
                    </h6>
                </div>
            </div>
        );
    }
}

export default Course;