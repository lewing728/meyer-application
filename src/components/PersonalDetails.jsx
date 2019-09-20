import React, {Component} from 'react';
import { Button, CardText, Form, FormGroup, Label, Input, Progress } from 'reactstrap';

class PersonalDetails extends Component {
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }
    
    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }
    
    render() {
        const {values} = this.props 
        return(
            <div>
                <h1 className="text-center">Personal Details</h1>
                <CardText>Fill in the appropriate fields</CardText>
                <div className="p-2 border mb-2">
                    Form Progress
                    <Progress />
                </div>
                
                <form>
                    <h1 className="text-center">Enter Personal Details</h1>
                    <div class="form-group">
                        <label>Age</label>
                        <input 
                            type="text"
                            className="form-control"
                            placeholder="Age"
                            onChange={this.props.handleChange('age')}
                            defaultValue={values.age}
                        />
                    </div>
                    <div class="form-group">
                        <label>City</label>
                        <input 
                            type="text"
                            className="form-control"
                            placeholder="City"
                            onChange={this.props.handleChange('city')}
                            defaultValue={values.city}
                        />
                    </div>
                    <div class="form-group">
                        <label>Country</label>
                        <input 
                            type="text"
                            className="form-control"
                            placeholder="Country"
                            onChange={this.props.handleChange('country')}
                            defaultValue={values.country}
                        />
                    </div>                    
                    <div className="row">
                        <div className="col-12 col-sm-6">
                            <button onClick={this.back} className="btn btn-primary">Back</button>
                        </div>
                        <div className="col-12 col-sm-6">
                            <button onClick={this.saveAndContinue} className="btn btn-primary">Save &amp; Continue</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default PersonalDetails;