import React, {Component} from 'react';
import { Button, CardText, Col, Form, FormGroup, Label, Row,  UncontrolledTooltip } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion, faPlus } from '@fortawesome/free-solid-svg-icons';

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
                <h1 class="text-center d-flex align-items-center justify-content-center">Work History Details<span className="tooltip-icon" href="#" id="tooltip-work"><FontAwesomeIcon icon={faQuestion} size="xs"/></span></h1>
                <UncontrolledTooltip placement="bottom" target="tooltip-work">
                    Enter your most recent work history first
                </UncontrolledTooltip>
                <CardText className="text-center">Enter at least the last two places you worked</CardText>
                <div className="p-2 border mb-2">
                    Step 2 out of 4

                    <div class="progress">
                        <div className="progress-bar progress-bar-50 bg-info progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <Form onSubmit={this.props.handleSubmitWorkHistory} onChange={this.props.handleChangeWorkHistory}>
                    
                    {
                        values.workHistory.map((val, idx)=> {
                            let nID = 'name-'+ idx, titID = 'title-'+idx, sDID = 'start_date-'+idx, eDID = 'end_date-'+idx, dID = 'duties-'+idx
                            return (
                                <div key={idx}>
                                    <div class="border p-2">
                                    <h2>Work History {idx + 1}</h2>
                                        <Row>
                                            <Col xs="12" sm="6">
                                                <FormGroup>
                                                    <Label for={nID}>Name of Company</Label>
                                                    <input type="text" dataid={idx} placeholder="Name of Company" className="form-control" id={nID} name={nID} dataname="name" value={values.workHistory[idx]['name']} />                                   
                                                </FormGroup>
                                            </Col>
                                            <Col xs="12" sm="6">
                                                <FormGroup>
                                                    <Label for={titID}>Title</Label>
                                                    <input type="text" dataid={idx} placeholder="Title" className="form-control" id={titID} name={titID} dataname="title" value={values.workHistory[idx]['title']} />         
                                                </FormGroup>   
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs="12" sm="6">
                                                <FormGroup>
                                                    <Label for={sDID}>Start Date</Label>
                                                    <input type="date" dataid={idx} className="form-control" id={sDID} name={sDID} dataname="start_date" value={values.workHistory[idx]['start_date']} />                                   
                                                </FormGroup>
                                            </Col>
                                            <Col xs="12" sm="6">
                                                <FormGroup>
                                                    <Label for={eDID}>End Date</Label>
                                                    <input type="date" dataid={idx} className="form-control" id={eDID} name={eDID} dataname="end_date" value={values.workHistory[idx]['end_date']} />                           
                                                </FormGroup>   
                                            </Col>

                                        </Row>
                                        <Row>
                                            <Col xs="12">
                                                <FormGroup>
                                                    <Label for={dID}>Duties</Label>
                                                    <textarea dataid={idx} placeholder="List your job responsibilities" className="form-control" id={dID} name={dID} dataname="duties" value={values.workHistory[idx]['duties']}></textarea>                           
                                                </FormGroup>   
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            )
                        })
                    }
                    
                    <Button color="primary" onClick={this.props.addNewHistory} className="mt-3 mb-3">Add Work History <FontAwesomeIcon icon={faPlus} /></Button>
                    
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