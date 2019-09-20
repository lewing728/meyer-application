import React, {Component} from 'react';
import { Button, CardText, Col, Form, FormGroup, Label, Input, Row, UncontrolledTooltip } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons'

class EducationHistory extends Component {
    
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }
    
    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }
    
    render() {
        let {values} = this.props;
        return(
            <div className="form">
                <h1 class="text-center">Education History Details</h1>
                <CardText className="text-center">Fill in the appropriate fields</CardText>
                <div className="p-2 border mb-2">
                    Step 3 out of 4

                    <div class="progress">
                        <div className="progress-bar progress-bar-75 bg-info progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="75"></div>
                    </div>
                </div>

                <Form>
                    <div className="border p-2 mb-5">
                        <h2>Highest Education</h2>
                        <Row>
                            <Col xs="12" sm="6">
                                <FormGroup>
                                    <Label for="education1_name">School Name</Label>
                                    <Input type="text" name="education1_name" id="education1_name" placeholder="School Name" onChange={this.props.handleChange('education1_name')} defaultValue={values.education1_name} />
                                </FormGroup>
                            </Col>
                            <Col xs="12" sm="6">
                                <FormGroup>
                                    <Label for="education1_gpa">GPA</Label>
                                    <Input type="text" name="education1_gpa" id="education1_gpa" placeholder="GPA" onChange={this.props.handleChange('education1_gpa')} defaultValue={values.education1_gpa} />
                                </FormGroup>                      
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="12" sm="6">
                                <FormGroup>
                                    <Label for="education1_major" className="d-flex align-items-center">Major<span className="tooltip-icon" href="#" id="tooltip-educ-major1"><FontAwesomeIcon icon={faQuestion} size="xs"/></span></Label>
                                    <UncontrolledTooltip placement="bottom" target="tooltip-educ-major1">
                                        If no declared major, type N/A
                                    </UncontrolledTooltip>                

                                    <Input type="text" name="education1_major" id="education1_major" placeholder="Major" onChange={this.props.handleChange('education1_major')} defaultValue={values.education1_major} />
                                </FormGroup>
                            </Col>
                            <Col xs="12" sm="6">
                                <FormGroup>
                                    <Label for="education1_minor">Minor<span className="tooltip-icon" href="#" id="tooltip-educ-minor1"><FontAwesomeIcon icon={faQuestion} size="xs"/></span></Label>
                                    <UncontrolledTooltip placement="bottom" target="tooltip-educ-minor1">
                                        If no declared minor, type N/A
                                    </UncontrolledTooltip>
                                    <Input type="text" name="education1_minor" id="education1_minor" placeholder="Minor" onChange={this.props.handleChange('education1_minor')} defaultValue={values.education1_minor} />
                                </FormGroup>                      
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="12" sm="6">
                                <FormGroup>
                                    <Label for="education1_graduate">Did You Graduate?</Label>
                                    <Input type="select" name="education1_graduate" id="education1_graduate" value={values.education1_graduate} onChange={this.props.handleChange('education1_graduate')}>
                                        <option value="">Select</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col xs="12" sm="6">
                                <FormGroup>
                                    <Label for="education1_end_date">Graduation Date</Label>
                                    <Input type="date" name="education1_end_date" id="education1_end_date" placeholder="Graduation Date" onChange={this.props.handleChange('education1_end_date')} defaultValue={values.education1_end_date} />
                               </FormGroup>                      
                            </Col>
                        </Row>
                    </div>
                    <div className="border p-2 mb-5">
                        <h2>Next Highest Education</h2>
                        <Row>
                            <Col xs="12" sm="6">
                                <FormGroup>
                                    <Label for="education2_name">School Name</Label>
                                    <Input type="text" name="education2_name" id="education2_name" placeholder="School Name" onChange={this.props.handleChange('education2_name')} defaultValue={values.education2_name} />
                                </FormGroup>
                            </Col>
                            <Col xs="12" sm="6">
                                <FormGroup>
                                    <Label for="education2_gpa">GPA</Label>
                                    <Input type="text" name="education2_gpa" id="education2_gpa" placeholder="GPA" onChange={this.props.handleChange('education2_gpa')} defaultValue={values.education2_gpa} />
                                </FormGroup>                      
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="12" sm="6">
                                <FormGroup>
                                    <Label for="education2_major">Major<span className="tooltip-icon" href="#" id="tooltip-educ-major2"><FontAwesomeIcon icon={faQuestion} size="xs"/></span></Label>
                                    <UncontrolledTooltip placement="bottom" target="tooltip-educ-major2">
                                        If no declared major, type N/A
                                    </UncontrolledTooltip>   
                                    <Input type="text" name="education2_major" id="education2_major" placeholder="Major" onChange={this.props.handleChange('education2_major')} defaultValue={values.education2_major} />
                                </FormGroup>
                            </Col>
                            <Col xs="12" sm="6">
                                <FormGroup>
                                    <Label for="education2_minor">Minor<span className="tooltip-icon" href="#" id="tooltip-educ-minor2"><FontAwesomeIcon icon={faQuestion} size="xs"/></span></Label>
                                    <UncontrolledTooltip placement="bottom" target="tooltip-educ-minor2">
                                        If no declared minor, type N/A
                                    </UncontrolledTooltip>
                                    <Input type="text" name="education2_minor" id="education2_minor" placeholder="Minor" onChange={this.props.handleChange('education2_minor')} defaultValue={values.education2_minor} />
                                </FormGroup>                      
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="12" sm="6">
                                <FormGroup>
                                    <Label for="education2_graduate">Did You Graduate?</Label>
                                    <Input type="select" name="education2_graduate" id="education2_graduate" value={values.education2_graduate} onChange={this.props.handleChange('education2_graduate')}>
                                        <option value="">Select</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col xs="12" sm="6">
                                <FormGroup>
                                    <Label for="education2_end_date">Graduation Date</Label>
                                    <Input type="date" name="education2_end_date" id="education2_end_date" placeholder="Graduation Date" onChange={this.props.handleChange('education2_end_date')} defaultValue={values.education2_end_date} />
                               </FormGroup>                      
                            </Col>
                        </Row>
                    </div> 
                    <div class="d-block d-sm-flex justify-content-center">
                        <Button color="primary" className="mr-0 mr-sm-2" onClick={this.back}>Back</Button>
                        <Button color="primary" onClick={this.saveAndContinue}>Save &amp; Continue</Button>
                    </div>
                </Form>
            </div>
        )            
    }
}

export default EducationHistory