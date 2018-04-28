import React, { Component } from 'react';
import './App.css';
import Header from './Common/Header';
import Student from './Student/Student';
import Teacher from './Teacher/Teacher';
import Course from './Course/Course';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      student : { name : ""},
      students:[],
      teacher: { name : ""},
      teachers: [],
      course:{ name:""},
      courses:[]
    }
  }

  componentWillMount(){
    this.setState({students:[
        {Id:"1",name : "aslam", address: "mirpur"},
        {Id:"2", name : "zobbar", address: "shamoly"},
        {Id:"3", name : "selim", address: "firmgate"},
    ]});

    this.setState({teachers:[
      {Id:"1",name : "mr. zubayer", district: "dhaka"},
      {Id:"2", name : "mr. samsul", district: "chaittagong"},
      {Id:"3", name : "mr. kader", district: "cumilla"},
  ]});

  this.setState({courses:[
    {Id:"1",name : "math", credit: "2"},
    {Id:"2", name : "physics", credit: "3"},
    {Id:"3", name : "english", credit: "2"},
]});

  }
  render() {
    let appStyle = {
      background:'1px solid black',
      display: 'flex', 
      justifyContent: 'center',
      textAlign:'center'
    };

    let divStyle ={
      width:'200px',
      border: '1px solid black',
      float:'left',
      textAlign: 'center'
    }

    return (
      <div style={appStyle}>
        <div >
          <div>
            <Header />
          </div>
          <div style={divStyle}>
            <div style={{ background: "yellow"}}><h4>Students</h4></div>
            <div>
              <ul>
                  {this.state.students.map((std)=>
                      <li style={{ listStyleType: "none", textAlign: 'center'}} key={std.Id}>
                          <Student studentItem={std} />
                      </li>
                      )}
              </ul>
            </div>
          </div>
          <div style={divStyle}>
            <div style={{ background: "yellow"}}><h4>Teachers</h4></div>
            <div>
              <ul>
                  {this.state.teachers.map((tec)=>
                      <li style={{ listStyleType: "none", textAlign: 'center'}} key={tec.Id}>
                          <Teacher teacherItem={tec} />
                      </li>
                      )}
              </ul>
            </div>
          </div>
          <div style={divStyle}>
            <div style={{ background: "yellow"}}><h4>Courses</h4></div>
            <div>
              <ul>
                  {this.state.courses.map((crs)=>
                      <li style={{ listStyleType: "none", textAlign: 'center'}} key={crs.Id}>
                          <Course courseItem={crs} />
                      </li>
                      )}
              </ul>
            </div>
          </div>
          
          
          
        </div>
      </div>
    );
  }
}

export default App;
