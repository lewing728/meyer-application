import React, {Component} from 'react';
import { Button, Card, CardBody, CardText, Row, Col } from 'reactstrap';

class Confirmation extends Component {
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }
    
    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }
    
    render() {
        const {values: {firstName, lastName, email, phone, address, address2, city, zip, us_state, how_hear_list, workHistory1_name, workHistory1_title, workHistory1_start_date, workHistory1_end_date, workHistory1_duties, workHistory2_name, workHistory2_title, workHistory2_start_date, workHistory2_end_date, workHistory2_duties, education1_name, education1_gpa, education1_major, education1_minor, education1_end_date, education1_graduate, education2_name, education2_gpa, education2_major, education2_minor, education2_end_date, education2_graduate }} = this.props;
        return(
            <div>
                <h1 className="text-center">{firstName} {lastName}<br />Please Confirm your Details</h1>
                <CardText className="text-center">Click Confirm if the following details have been correctly entered.</CardText>
                <div className="p-2 border mb-2">
                    Step 4 out of 4
                    <div class="progress">
                        <div className="progress-bar progress-bar-100 bg-info progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <Row>
                    <Col xs="12" sm="6" className="mb-5">
                        <Card className="bg-white no-box-shadow h-100">
                            <CardBody>
                                <h2 className="text-center text-base">Personal Details</h2>
                                <p>
                                    <strong>Name:</strong> {firstName} {lastName}<br />
                                    <strong>Email: </strong> {email}<br />
                                    <strong>Phone:</strong> {phone}<br />
                                    <strong>Address:</strong><br />
                                    {address}<br />
                                    {address2}<br />
                                    {city}, {us_state} {zip}
                                </p>
                                
                                <p>
                                    How did you hear about us? <br />
                                    {how_hear_list}
                                </p>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs="12" sm="6" className="mb-5">
                        <Card className="bg-white no-box-shadow h-100">
                            <CardBody>
                                <h2 className="text-center text-base">Work History Details</h2>
                                <h3>First Work History</h3>
                                <p>
                                    <strong>Company Name:</strong> {workHistory1_name}<br />
                                    <strong>Title:</strong> {workHistory1_title}<br />
                                    <strong>Dates Worked:</strong> {workHistory1_start_date} to {workHistory1_end_date}<br />
                                    <strong>Duties Included:</strong><br /> {workHistory1_duties}
                                </p>
                                <hr />
                                <h3>Second Work History</h3>
                                <p>
                                    <strong>Company Name:</strong> {workHistory2_name}<br />
                                    <strong>Title:</strong> {workHistory2_title}<br />
                                    <strong>Dates Worked:</strong> {workHistory2_start_date} to {workHistory2_end_date}<br />
                                    <strong>Duties Included:</strong><br /> {workHistory2_duties}
                                </p>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" sm="6" className="mb-5">
                        <Card className="bg-white no-box-shadow">
                            <CardBody>
                                <h2 className="text-center text-base">Education History Details</h2>
                                <h3>Highest Education</h3>
                                <p>
                                    <strong>School Name:</strong> {education1_name}<br />
                                    <strong>GPA:</strong> {education1_gpa}<br />
                                    <strong>Major:</strong> {education1_major}<br />
                                    <strong>Minor:</strong> {education1_minor}<br />
                                    <strong>Graduated?:</strong> {education1_graduate}<br />
                                    <strong>Date graduated:</strong> {education1_end_date}<br />
                                </p>
                                <hr />
                                <h3>Next Highest Education</h3>
                                <p>
                                    <strong>School Name:</strong> {education2_name}<br />
                                    <strong>GPA:</strong> {education2_gpa}<br />
                                    <strong>Major:</strong> {education2_major}<br />
                                    <strong>Minor:</strong> {education2_minor}<br />
                                    <strong>Graduated?:</strong> {education2_graduate}<br />
                                    <strong>Date graduated:</strong> {education2_end_date}<br />
                                </p>                                
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                <div class="d-block d-sm-flex justify-content-center">
                    <Button color="primary" className="mr-0 mr-sm-2" onClick={this.back}>Back</Button>
                    <Button color="primary" onClick={this.saveAndContinue}>Confirm</Button>
                </div>

            </div>
            
        )
    }
}

export default Confirmation;