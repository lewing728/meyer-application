import React, {Component} from 'react';
import UserDetails from './UserDetails';
import WorkHistory from './WorkHistory';
import EducationHistory from './EducationHistory';
import Confirmation from './Confirmation';
import Success from './Success';

class MainForm extends Component {
    state = {
        currentStep: 1,
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        address2: '',
        city: '',
        zip: '',
        us_state: '',
        resume: '',
        workHistory1_name: '',
        workHistory1_title: '',
        workHistory1_start_date: '',
        workHistory1_end_date: '',
        workHistory1_duties: '',
        workHistory2_name: '',
        workHistory2_title: '',
        workHistory2_start_date: '',
        workHistory2_end_date: '',
        workHistory2_duties: '',
        education1_name: '',
        education1_gpa: '',
        education1_major: '',
        education1_minor: '',
        education1_graduate: '',
        education1_end_date: '',
        education2_name: '',
        education2_gpa: '',
        education2_major: '',
        education2_minor: '',
        education2_start_date: '',
        education2_end_date: '',
        education2_graduate: '',
    }
    

    nextStep = () => {
        const { currentStep } = this.state
        this.setState({
            currentStep: currentStep + 1,
        })
    }
    
    prevStep = () => {
        const { currentStep } = this.state
        this.setState({
            currentStep: currentStep - 1
        })
    }
    
    handleChange = input => event => {
        this.setState({ [input] : event.target.value })
    }
    
    render() {
        const {currentStep} = this.state;
        const { firstName, lastName, email, phone, address, address2, city, zip, us_state, resume, workHistory1_name, workHistory1_title, workHistory1_start_date, workHistory1_end_date, workHistory1_duties, workHistory2_name, workHistory2_title, workHistory2_start_date, workHistory2_end_date, workHistory2_duties, education1_name, education1_gpa, education1_major, education1_minor, education1_end_date, education1_graduate, education2_name, education2_gpa, education2_major, education2_minor, education2_end_date, education2_graduate } = this.state;
        const values = { firstName, lastName, email, phone, address, address2, city, zip, us_state, resume, workHistory1_name, workHistory1_title, workHistory1_start_date, workHistory1_end_date, workHistory1_duties, workHistory2_name, workHistory2_title, workHistory2_start_date, workHistory2_end_date, workHistory2_duties, education1_name, education1_gpa, education1_major, education1_minor, education1_end_date, education1_graduate, education2_name, education2_gpa, education2_major, education2_minor, education2_end_date, education2_graduate  };
        switch(currentStep) {
            case 1:
                return <UserDetails
                           nextStep = {this.nextStep}
                           handleChange = {this.handleChange}
                           values={values}
                        />
            case 2:
                return <WorkHistory
                           nextStep = {this.nextStep}
                           prevStep = {this.prevStep}
                           handleChange = {this.handleChange}
                           values={values}
                        />
            case 3:
                return <EducationHistory
                           nextStep = {this.nextStep}
                           prevStep = {this.prevStep}
                           handleChange = {this.handleChange}
                           values={values}
                        />
            case 4:
                return <Confirmation
                           nextStep = {this.nextStep}
                           prevStep = {this.prevStep}
                           values = {values}
                        />
            case 5:
                return <Success />
                
        }
    }
}

export default MainForm;