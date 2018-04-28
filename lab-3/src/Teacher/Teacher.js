import React,{ Component } from 'react';

class Teacher extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let teacher = this.props.teacherItem;
        return(
            <div>
                <div>
                    <h6> 
                        {teacher.name} ({teacher.district})
                    </h6>
                </div>
            </div>

        );
    }
}

export default Teacher;