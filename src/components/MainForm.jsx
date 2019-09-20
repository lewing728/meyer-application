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
        how_hear: [],
        how_hear_list: '',
        workHistory: [],
        educationHistory: [],
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
    
    handleChangeMulti = (event) => {
        let options = [], opt;
        let how_list = '';
        
        console.log('We are here');
        for(let i =0, len = event.target.options.length; i< len; i++) {
            opt = event.target.options[i];
            console.log(opt);
            if(opt.selected) {
                options.push(opt.value);
                how_list = how_list + opt.value + ', ';
            }
        }
        console.log('opts: ', options);
        this.setState({how_hear: options});
        this.setState({how_hear_list: how_list});
    }
    
    handleChangeWorkHistory = (e) => {
        let workHistories = [...this.state.workHistory];
        workHistories[e.target.getAttribute('dataid')][e.target.getAttribute('dataname')] = e.target.value;
        this.setState({workHistories}, () => console.log(this.state.workHistory));

    }

    handleChangeEduHistory = (e) => {
        let educationHistories = [...this.state.educationHistory];
        educationHistories[e.target.getAttribute('dataid')][e.target.getAttribute('dataname')] = e.target.value;
        this.setState({educationHistories}, () => console.log(this.state.educationHistory));
    }
    
    
    handleSubmitDefault = (e) => {
        e.preventDefault();
    }

    
    addNewHistory = (e) => {
        this.setState((prevState) => ({
            workHistory: [...prevState.workHistory, {name: "", title: ""}],
        }));
    }

    addNewEducation = (e) => {
        this.setState((prevState) => ({
            educationHistory: [...prevState.educationHistory, {name: "", gpa: ""}],
        }));
    }
    
    
    render() {
        const {currentStep} = this.state;
        const { firstName, lastName, email, phone, address, address2, city, zip, us_state, resume, how_hear, how_hear_list,  workHistory, educationHistory } = this.state;
        const values = { firstName, lastName, email, phone, address, address2, city, zip, us_state, resume, how_hear, how_hear_list, workHistory, educationHistory };
        switch(currentStep) {
            case 1:
                return <UserDetails
                           nextStep = {this.nextStep}
                           handleChange = {this.handleChange}
                           handleChangeMulti = {this.handleChangeMulti}
                           values={values}
                        />
            case 2:
                return <WorkHistory
                           nextStep = {this.nextStep}
                           prevStep = {this.prevStep}
                           handleChange = {this.handleChange}
                           addNewHistory = {this.addNewHistory}
                           handleSubmitWorkHistory = {this.handleSubmitDefault}
                           handleChangeWorkHistory = {this.handleChangeWorkHistory}
                           values={values}
                        />
            case 3:
                return <EducationHistory
                           nextStep = {this.nextStep}
                           prevStep = {this.prevStep}
                           handleChange = {this.handleChange}
                           addNewEducation = {this.addNewEducation}
                           handleSubmitEduHistory = {this.handleSubmitDefault}
                           handleChangeEduHistory = {this.handleChangeEduHistory}
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