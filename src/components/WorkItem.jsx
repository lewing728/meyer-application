import React from 'react';
const WorkItem = (props) => {
    return (
        props.workItems.map((val, idx)=> {
            return(
                <div key={idx}>
                    <div className="form-group">
                        <label>Company Name</label>
                        <input
                            type="text"
                            name="companyName-${idx}"
                            id="companyName-${idx}"
                            className="form-control"
                            value={props.workItems[idx].companyName}
                            onChange={props.handleChange('workItems')}
                        />
                    </div>
                    <div className="form-group">
                        <label>Title</label>
                        <input
                            type="text"
                            name="title-${idx}"
                            id="title-${idx}"
                            className="form-control"
                            value={props.workItems[idx].title}
                            onChange={props.handleChange('workItems')}
                        />
                    </div>

                </div>
            )
        })
    )

}

export default WorkItem