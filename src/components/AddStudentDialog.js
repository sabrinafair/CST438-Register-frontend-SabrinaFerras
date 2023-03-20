import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';



class AddStudentDialog extends Component {
      constructor(props) {
      super(props);
      this.state = { open:false, name: '', email: '' };
    };
    
    handleClickOpen = () => {
      this.setState( {open:true} );
    };

    handleClose = () => {
      this.setState( {open:false} );
    };

    handleChange = (event) => {
       this.setState({[event.target.name]: event.target.value});
    }
	
	handleAdd = () => {
	   let student = {name: this.state.name, email: this.state.email};
       this.props.addStudent(student);
       this.handleClose();
    }
	
	    render()  { 
      return (
          <div>
            <Button variant="contained" color="secondary" style={{margin: 10}} onClick={this.handleClickOpen}>
              Add Student
            </Button>
            <Dialog open={this.state.open} onClose={this.handleClose}>
                <DialogTitle>Add Student</DialogTitle>
                <DialogContent  style={{paddingTop: 20}} >
                  <TextField autoFocus fullWidth label="Student Name" name="name" onChange={this.handleChange}  /> 
                </DialogContent>
				<DialogContent  style={{paddingTop: 20}} >
                  <TextField fullWidth label="Student Email" name="email" onChange={this.handleChange}  /> 
                </DialogContent>
                <DialogActions>
                  <Button color="secondary" onClick={this.handleClose}>Cancel</Button>
                  <Button id="AddS" color="primary" onClick={this.handleAdd}>Add</Button>
                </DialogActions>
              </Dialog>      
          </div>
      ); 
    }
}

AddStudentDialog.propTypes = {
  addStudent : PropTypes.func.isRequired
}

export default AddStudentDialog;