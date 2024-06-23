import React, { useState } from "react";
import "./forms.css";

const CoachInformationForm = ({data}) => {
    const [coaches, setCoaches] = useState(data.coach);

    const addCoachFields = () => {
        setCoaches([...coaches, { role: "", type: "", name: "", email: "", phoneNumber: "" }]);
    };

    const handleInputChange = (index, event) => {
        const { name, value } = event.target;
        const newCoaches = coaches.slice();
        newCoaches[index][name] = value;
        setCoaches(newCoaches);
        data.coach=newCoaches
        localStorage.setItem('coaches',JSON.stringify(newCoaches))
    };

    return (
        <div className="coachInformationForm">
            <h2 style={{ fontSize: "22px" }}>Coach Information</h2>
            <div className="form-data">
                {coaches.map((coach, index) => (
                    <div className="coachFields" key={index}>
                        <div className="formFields">
                            <label style={{ fontSize: "16px" }}>Coach Role</label>
                            <input
                                type="text"
                                name="role"
                                placeholder="write coach role"
                                value={coach.role}
                                onChange={(event) => handleInputChange(index, event)}
                            />
                        </div>
                        <div className="formFields">
                            <label style={{ fontSize: "16px" }}>Coach Type</label>
                            <input
                                type="text"
                                name="type"
                                placeholder="write coach type"
                                value={coach.type}
                                onChange={(event) => handleInputChange(index, event)}
                            />
                        </div>
                        <div className="formFields">
                            <label style={{ fontSize: "16px" }}>Coach Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="write coach name"
                                value={coach.name}
                                onChange={(event) => handleInputChange(index, event)}
                            />
                        </div>
                        <div className="formFields">
                            <label style={{ fontSize: "16px" }}>Coach Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="write coach email"
                                value={coach.email}
                                onChange={(event) => handleInputChange(index, event)}
                            />
                        </div>
                        <div className="formFields">
                            <label style={{ fontSize: "16px" }}>Coach Phone Number</label>
                            <input
                                type="text"
                                name="phoneNumber"
                                placeholder="write coach phone number"
                                value={coach.phoneNumber}
                                onChange={(event) => handleInputChange(index, event)}
                            />
                        </div>
                    </div>
                ))}
                {/* <button type="button" className="addMoreButton" onClick={addCoachFields}>
                    Add New Coach +
                </button> */}
            </div>
        </div>
    );
};

export default CoachInformationForm;
