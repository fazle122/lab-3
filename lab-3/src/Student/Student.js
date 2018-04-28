import React,{ Component } from 'react';

class Student extends React.Component{
    constructor(props){
        super(props);

    }


    render(){
        let std = this.props.studentItem;
        return(
            <div>
                
                <div>
                    <h6> 
                        {std.name} ({std.address})
                    </h6>
                </div>
            </div>
        );
    }
}

export default Student;