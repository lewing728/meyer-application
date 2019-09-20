import React, {Component} from 'react';

class Success extends Component {
    render() {
        return(
            <div>
                <h1 className="text-center">Details Successfully Saved</h1>
                <p className="text-center">Congratulations! Your information has been submitted and someone from our office will be in contact with you shortly!</p>
                <div className="pyro">
                    <div className="before"></div>
                    <div className="after"></div>
                </div>
            </div>
        )
    }
}

export default Success;