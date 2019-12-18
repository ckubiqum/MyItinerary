import React, { Component } from 'react';
import './Staff.css';

class Staff extends Component {
    render() {
        const { staff } = this.props;
        return (
            <div className="staff-list">
                <h1>About us</h1>
                <div>
                    {staff.map((staff, i) => {

                        return (
                            <div className="staff" key={i}>
                                <img className="staff-pic" src={staff.photo} alt="staff-pic" />
                                {/* <div>Name: { staff.name }</div>
                <div>Position: { staff.position }</div> */}

                            </div>
                        )
                    })}
                </div>
            </div>
        )

    }
}

export default Staff