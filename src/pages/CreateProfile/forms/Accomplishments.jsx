import React, { useState } from "react";
import "./forms.css";

const AthleticAccomplishmentsForm = ({data}) => {
    const [accomplishments, setAccomplishments] = useState(data.athleticaccomplishments);

    const addAccomplishmentField = () => {
        setAccomplishments([...accomplishments, ""]);
    };

    const handleInputChange = (index, event) => {
        const newAccomplishments = accomplishments.slice();
        newAccomplishments[index] = event.target.value;
     localStorage.setItem("accomplishments",JSON.stringify(newAccomplishments))
        setAccomplishments(newAccomplishments);
        data.athleticaccomplishments=newAccomplishments;
    };

    return (
        <div className="athleticAccomplishmentsForm">
            <h2 style={{ fontSize: "22px" }}>Athletic Accomplishments</h2>
            <div className="form-data">
                {accomplishments.map((accomplishment, index) => (
                    <div className="formFields" key={index}>
                        <label style={{ fontSize: "16px" }}>Accomplishment</label>
                        <input
                            type="text"
                            placeholder="Describe accomplishment"
                            value={accomplishment}
                            onChange={(event) => handleInputChange(index, event)}
                        />
                    </div>
                ))}
                <button type="button" className="addMoreButton" onClick={addAccomplishmentField}>
                    + Add New
                </button>
            </div>
        </div>
    );
};

export default AthleticAccomplishmentsForm;
