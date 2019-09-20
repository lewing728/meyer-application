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
        const {values: {firstName, lastName, email, phone, address, address2, city, zip, us_state, how_hear_list, workHistory, educationHistory }} = this.props;
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
                    <Col xs="12" className="mb-5">
                        <Card className="bg-white no-box-shadow">
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
                                    <strong>How did you hear about us?</strong> <br />
                                    {how_hear_list}
                                </p>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" className="mb-5">
                        <Card className="bg-white no-box-shadow">
                            <CardBody>
                                <h2 className="text-center text-base">Work History Details</h2>
                                {
                                    workHistory.map((val, idx)=> {
                                        return(
                                            <div key={idx}>
                                                <h3>Work History #{idx + 1}</h3>
                                                <p>
                                                    <strong>Company Name: </strong> {workHistory[idx]['name']}<br />
                                                    <strong>Title: </strong> {workHistory[idx]['title']}<br />
                                                    <strong>Employed: </strong> {workHistory[idx]['start_date']} to {workHistory[idx]['end_date']}<br />
                                                    <strong>Duties: </strong><br />
                                                    {workHistory[idx]['duties']}
                                                </p>
                                                <hr />
                                            </div>

                                        )
                                    })    
                                }
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" className="mb-5">
                        <Card className="bg-white no-box-shadow">
                            <CardBody>
                                <h2 className="text-center text-base">Education History Details</h2>
                                {
                                    educationHistory.map((val, idx)=> {
                                        return(
                                            <div key={idx}>
                                                <h3>Education #{idx + 1}</h3>
                                                <p>
                                                    <strong>School Name:</strong> {educationHistory[idx]['name']}<br />
                                                    <strong>GPA:</strong> {educationHistory[idx]['gpa']}<br />
                                                    <strong>Major:</strong> {educationHistory[idx]['major']}<br />
                                                    <strong>Minor:</strong> {educationHistory[idx]['minor']}<br />
                                                    <strong>Graduated?:</strong> {educationHistory[idx]['graduate']}<br />
                                                    <strong>Date graduated:</strong> {educationHistory[idx]['end_date']}<br />
                                                </p>
                                                <hr />
                                            </div>

                                        )
                                    })    
                                }
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