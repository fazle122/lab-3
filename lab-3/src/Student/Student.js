import React,{ Component } from 'react';

class Student extends React.Component{
    constructor(props){
        super(props);
        students:[];

    }

    componentWillMount(){
        this.setState({students:[
            {Id:"1",name : "aslam", address: "mirpur"},
            {Id:"2", name : "zobbar", address: "shamoly"},
            {Id:"3", name : "selim", address: "firmgate"},
        ]});
    }


    render(){
        let std = this.props.studentItem;
        return(           
            <div>
                {/* <ul>
                    {this.state.students.map((std)=>
                        <li style={{ listStyleType: "none", textAlign: 'center'}} key={std.Id}>
                            {std.name} ({std.address})
                        </li>
                        )}
                </ul> */}
                <h6> 
                    {std.name} ({std.address})
                </h6>
            </div>                        

        );
    }
}

export default Student;