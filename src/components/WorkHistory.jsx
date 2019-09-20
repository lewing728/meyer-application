import React, {Component} from 'react';
import { Button, CardText, Col, Form, FormGroup, Label, Input, Row, UncontrolledTooltip } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons'

class WorkHistory extends Component {
    
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
            <div>
                <h1 class="text-center d-flex align-items-center justify-content-center">Work History Details <span className="tooltip-icon" href="#" id="tooltip-work-general"><FontAwesomeIcon icon={faQuestion} size="xs"/></span></h1>
                <UncontrolledTooltip placement="bottom" target="tooltip-work-general">
                    We only require the last two most recent places of employment for this application.
                </UncontrolledTooltip>                
                <CardText className="text-center">Enter your last two employers</CardText>
                <div className="p-2 border mb-2">
                    Step 2 out of 4

                    <div class="progress">
                        <div className="progress-bar progress-bar-50 bg-info progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <Form>
                    <div className="border p-2 mb-5">
                        <h2 className="d-flex align-items-center">First Employer<span className="tooltip-icon" href="#" id="tooltip-work-first-emp"><FontAwesomeIcon icon={faQuestion} size="xs"/></span></h2>
                        <UncontrolledTooltip placement="bottom" target="tooltip-work-first-emp">
                            Most recent employer
                        </UncontrolledTooltip>                
                        <Row>
                            <Col xs="12" sm="6">
                                <FormGroup>
                                    <Label for="workHistory1_name">Company Name</Label>
                                    <Input type="text" name="workHistory1_name" id="workHistory1_name" placeholder="Company Name" onChange={this.props.handleChange('workHistory1_name')} defaultValue={values.workHistory1_name} />
                                </FormGroup>
                            </Col>
                            <Col xs="12" sm="6">
                                <FormGroup>
                                    <Label for="workHistory1_title">Title</Label>
                                    <Input type="text" name="workHistory1_title" id="workHistory1_title"  placeholder="Title" onChange={this.props.handleChange('workHistory1_title')} defaultValue={values.workHistory1_title} />
                                </FormGroup>                      
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="12" sm="6">
                                <FormGroup>
                                    <Label for="workHistory1_start_date">Start Date</Label>
                                    <Input type="date" name="workHistory1_start_date" id="workHistory1_start_date" placeholder="Start Date" onChange={this.props.handleChange('workHistory1_start_date')} defaultValue={values.workHistory1_start_date} />
                                </FormGroup>
                            </Col>
                            <Col xs="12" sm="6">
                                <FormGroup>
                                    <Label for="workHistory1_start_date">End Date</Label>
                                    <Input type="date" id="workHistory1_end_date" name="workHistory1_end_date" placeholder="End Date" onChange={this.props.handleChange('workHistory1_end_date')} defaultValue={values.workHistory1_end_date} />
                                </FormGroup>                      
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="12">
                                <FormGroup>
                                    <Label for="workHistory1_duties">Duties</Label>
                                    <Input type="textarea" id="workHistory1_duties" name="workHistory1_duties" placeholder="Enter job responsibilities here" onChange={this.props.handleChange('workHistory1_duties')} defaultValue={values.workHistory1_duties} />
                                </FormGroup>
                            </Col>
                        </Row>
                    </div>
                    <div className="border p-2 mb-5">
                        <h2>Second Employer</h2>
                        <Row>
                            <Col xs="12" sm="6">
                                <FormGroup>
                                    <Label for="workHistory2_name">Company Name</Label>
                                    <Input type="text" name="workHistory2_name" id="workHistory2_name" placeholder="Company Name" onChange={this.props.handleChange('workHistory2_name')} defaultValue={values.workHistory2_name} />
                                </FormGroup>
                            </Col>
                            <Col xs="12" sm="6">
                                <FormGroup>
                                    <Label for="workHistory2_title">Title</Label>
                                    <Input type="text" name="workHistory2_title" id="workHistory2_title"  placeholder="Title" onChange={this.props.handleChange('workHistory2_title')} defaultValue={values.workHistory2_title} />
                                </FormGroup>                      
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="12" sm="6">
                                <FormGroup>
                                    <Label for="workHistory2_start_date">Start Date</Label>
                                    <Input type="date" name="workHistory2_start_date" id="workHistory2_start_date" placeholder="Start Date" onChange={this.props.handleChange('workHistory2_start_date')} defaultValue={values.workHistory2_start_date} />
                                </FormGroup>
                            </Col>
                            <Col xs="12" sm="6">
                                <FormGroup>
                                    <Label for="workHistory2_end_date">End Date</Label>
                                    <Input type="date" id="workHistory2_end_date" name="workHistory2_end_date" placeholder="End Date" onChange={this.props.handleChange('workHistory2_end_date')} defaultValue={values.workHistory2_end_date} />
                                </FormGroup>                      
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="12">
                                <FormGroup>
                                    <Label for="workHistory2_duties">Duties</Label>
                                    <Input type="textarea" id="workHistory2_duties" name="workHistory2_duties" placeholder="Enter job responsibilities here" onChange={this.props.handleChange('workHistory2_duties')} defaultValue={values.workHistory2_duties} />
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

export default WorkHistory