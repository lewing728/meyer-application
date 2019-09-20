import React, {Component} from 'react';
import { Button, CardText, Col, FormGroup, Label, Input, Row, UncontrolledTooltip } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons'
import { ValidationForm, TextInput } from 'react-bootstrap4-form-validation';

class UserDetails extends Component {

    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }
    
    handleErrorSubmit = (e, formData, errorInputs) => {
        console.error(errorInputs)
    }
        
    render() {
        const {values} = this.props;
        return (
            <div>
                <div class="mb-5">
                    <h1 className="text-center">Application</h1>
                    <CardText className="text-center">You are applying for the Creative Chef position. Fill all the appropriate information and you will be shown a page at the end that will list all the information you submitted. If it is all correct then click Confirm to send the information. Good luck!</CardText>
                </div>
                <hr />
                <div class="pt-3 pb-5">
                    <h2 className="h1 text-center">Personal Details</h2>                
                    <CardText className="text-center">Fill in the appropriate fields</CardText>
                </div>
                <div className="p-2 border mb-2">
                    Step 1 out of 4

                    <div class="progress">
                        <div className="progress-bar progress-bar-25 bg-info progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                
                
                <ValidationForm onSubmit={this.saveAndContinue} onErrorSubmit={this.handleErrorSubmit}>
                    <Row>
                        <Col xs="12" sm="6">
                            <FormGroup>
                                <Label for="firstName">First Name<sup>*</sup></Label>
                                <TextInput className="form-control" name="firstName" id="firstName" required placeholder="First Name" onChange={this.props.handleChange('firstName')} defaultValue={values.firstName} />
                            </FormGroup>
                        </Col>
                        <Col xs="12" sm="6">
                            <FormGroup>
                                <Label for="lastName">Last Name<sup>*</sup></Label>
                                <Input type="text" name="lastName" id="lastName" required placeholder="Last Name" onChange={this.props.handleChange('lastName')} defaultValue={values.lastName} />
                            </FormGroup> 
                        </Col>
                    </Row>

                    <Row>
                        <Col xs="12" sm="6">
                            <FormGroup>
                                <Label for="email">Email<sup>*</sup></Label>
                                <Input type="email" name="email" id="email" required placeholder="Email" onChange={this.props.handleChange('email')} defaultValue={values.email} />
                            </FormGroup>  
                        </Col>
                        <Col xs="12" sm="6">
                            <FormGroup>
                                <Label for="phone">Phone<sup>*</sup></Label>
                                <Input type="text" name="phone" id="phone" required placeholder="phone" onChange={this.props.handleChange('phone')} defaultValue={values.phone} />
                            </FormGroup>  
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12" sm="6">
                            <FormGroup>
                                <Label for="address">Address</Label>
                                <Input type="text" name="address" id="address" placeholder="address" onChange={this.props.handleChange('address')} defaultValue={values.address} />
                            </FormGroup>  
                        </Col>
                        <Col xs="12" sm="6">
                            <FormGroup>
                                <Label for="address2">Address 2</Label>
                                <Input type="text" name="address2" id="address2" placeholder="address2" onChange={this.props.handleChange('address2')} defaultValue={values.address2} />
                            </FormGroup>  
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12" sm="6">
                            <FormGroup>
                                <Label for="city">City</Label>
                                <Input type="text" name="city" id="city" placeholder="city" onChange={this.props.handleChange('city')} defaultValue={values.city} />
                            </FormGroup>  
                        </Col>
                        <Col xs="12" sm="6">
                            <Row>
                                <Col xs="6" sm="6">
                                    <FormGroup>
                                        <Label for="us_state">State</Label>
                                        <Input type="text" name="us_state" id="us_state" placeholder="State" onChange={this.props.handleChange('us_state')} defaultValue={values.us_state} />
                                    </FormGroup>  
                                </Col>
                                <Col xs="6" sm="6">
                                    <FormGroup>
                                        <Label for="zip">Zip</Label>
                                        <Input type="text" name="zip" id="zip" placeholder="Zip" onChange={this.props.handleChange('zip')} defaultValue={values.zip} />
                                    </FormGroup>  
                                </Col>
                            </Row>
                        </Col>
                    </Row> 
                    <Row>
                        <Col xs="12">
                                <FormGroup>
                                    <Label for="how_hear">How did you hear about us?</Label>
                                    <Input type="select" name="how_hear" id="how_hear" multiple onChange={this.props.handleChangeMulti} defaultValue={values.how_hear} >
                                        <option value="Indeed">Indeed</option>
                                        <option value="Current Employee">Current Employee</option>
                                        <option value="TV Ad">TV Ad</option>
                                        <option value="Monster">Monster</option>
                                        <option value="Google">Google</option>
                                    </Input>
                            </FormGroup>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col sm="12" sm="6">
                            <FormGroup>
                                <Label for="resume" className="d-flex align-items-center">Upload Resume<span className="tooltip-icon" href="#" id="tooltip-resume"><FontAwesomeIcon icon={faQuestion} size="xs"/></span></Label>
                                <UncontrolledTooltip placement="bottom" target="tooltip-resume">
                                    File upload is not saved for this example form. This is just for aesthetics.
                                </UncontrolledTooltip>
                                <Input type="file" name="resume" id="resume" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <p><small>* Required Fields</small></p>
                    <div class="d-block d-sm-flex justify-content-center">
                        <Button color="primary">Save &amp; Continue</Button>
                    </div>
                </ValidationForm>
            </div>
        )
    }
}

export default UserDetails;