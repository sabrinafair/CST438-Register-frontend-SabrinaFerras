import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';
import {SERVER_URL} from '../constants.js';
import AddStudentDialog from './AddStudentDialog';


// properties addStudent is required, function called when Add clicked.
class AddStudent extends Component {
      constructor(props) {
      super(props);
    };
    
	
	addStudent = (s) => {
	 const token = Cookies.get('XSRF-TOKEN');
 
    fetch(`${SERVER_URL}/student/add`,
      { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json',
                   'X-XSRF-TOKEN': token  }, 
        body: JSON.stringify(s)
      })
    .then(res => {
        if (res.ok) {
          toast.success("Student successfully added", {
              position: toast.POSITION.BOTTOM_LEFT
          });
        } else {
          toast.error("Error when adding", {
              position: toast.POSITION.BOTTOM_LEFT
          });
          console.error('Post http status =' + res.status);
        }})
    .catch(err => {
      toast.error("Error when adding", {
            position: toast.POSITION.BOTTOM_LEFT
        });
        console.error(err);
    })
  } 

    render()  { 
      return (
		<div>
			<br />
			<div>
				<AddStudentDialog addStudent = {this.addStudent}/>
			</div>
			<br />
			<ToastContainer autoClose={1500} />      
		</div>
      ); 
    }
}

export default AddStudent;