import React, {Component} from 'react';
import { Button, CardText, Col, Form, FormGroup, Label, Row, UncontrolledTooltip } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion, faPlus } from '@fortawesome/free-solid-svg-icons'

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

                
                <Form onSubmit={this.props.handleSubmitEduHistory} onChange={this.props.handleChangeEduHistory}>
                    
                    {
                        values.educationHistory.map((val, idx)=> {
                            let nID = 'name-'+ idx, gpaID = 'gpa-'+idx, maDID = 'major-'+idx, miDID = 'minor-'+idx, gID = 'graduate-'+idx, edID = 'end_date-'+idx, tooltip_major = "tooltip-major-"+idx, tooltip_min = "tooltip-minor"+idx, tooltip_grad = 'tooltip-graduate-'+idx
                            return (
                                <div key={idx}>
                                    <div class="border p-2">
                                    <h2>Education #{idx + 1}</h2>
                                        <Row>
                                            <Col xs="12" sm="6">
                                                <FormGroup>
                                                    <Label for={nID}>Name of School</Label>
                                                    <input type="text" dataid={idx} placeholder="Name of School" className="form-control" id={nID} name={nID} dataname="name" value={values.educationHistory[idx]['name']} />                                   
                                                </FormGroup>
                                            </Col>
                                            <Col xs="12" sm="6">
                                                <FormGroup>
                                                    <Label for={gpaID}>GPA</Label>
                                                    <input type="text" dataid={idx} placeholder="GPA" className="form-control" id={gpaID} name={gpaID} dataname="gpa" value={values.educationHistory[idx]['gpa']} />         
                                                </FormGroup>   
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs="12" sm="6">
                                                <FormGroup>
                                                    <Label for={maDID}>Major<span className="tooltip-icon" href="#" id={tooltip_major}><FontAwesomeIcon icon={faQuestion} size="xs"/></span></Label>
                                                    <UncontrolledTooltip placement="bottom" target={tooltip_major}>
                                                        If no declared major, type N/A
                                                    </UncontrolledTooltip>            
                                                    <input type="text" dataid={idx} className="form-control" id={maDID} name={maDID} dataname="major" value={values.educationHistory[idx]['major']} />                     
                                                </FormGroup>
                                            </Col>
                                            <Col xs="12" sm="6">
                                                <FormGroup>
                                                    <Label for={miDID}>Minor<span className="tooltip-icon" href="#" id={tooltip_min}><FontAwesomeIcon icon={faQuestion} size="xs"/></span></Label>
                                                    <UncontrolledTooltip placement="bottom" target={tooltip_min}>
                                                        If no declared minor, type N/A
                                                    </UncontrolledTooltip>   
                                                    <input type="text" dataid={idx} className="form-control" id={miDID} name={miDID} dataname="minor" value={values.educationHistory[idx]['minor']} />                     
                                                </FormGroup>
                                            </Col>           
                                        </Row>
                                        <Row>
                                            <Col xs="12" sm="6">
                                                <FormGroup>
                                                    <Label for={gID}>Did you graduate?<span className="tooltip-icon" href="#" id={tooltip_grad}><FontAwesomeIcon icon={faQuestion} size="xs"/></span></Label>
                                                    <UncontrolledTooltip placement="bottom" target={tooltip_grad}>
                                                        If you did not graduate, please explain in this field
                                                    </UncontrolledTooltip>            
                                                    <input type="text" dataid={idx} className="form-control" id={gID} name={gID} dataname="graduate" value={values.educationHistory[idx]['graduate']} />                     
                                                </FormGroup>   
                                            </Col>
                                            <Col xs="12" sm="6">
                                                <FormGroup>
                                                    <Label for={edID}>End Date</Label>
                                                    <input type="date" dataid={idx} className="form-control" id={edID} name={edID} dataname="end_date" value={values.educationHistory[idx]['end_date']} />                 
                                                </FormGroup>   
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            )
                        })
                    }
                    
                    <Button color="primary" onClick={this.props.addNewEducation} className="mt-3 mb-3">Add Education <FontAwesomeIcon icon={faPlus} /></Button>
                    
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