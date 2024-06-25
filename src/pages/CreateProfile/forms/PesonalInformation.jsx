import React from "react";
import { useProfileContext } from "../../../components/context/createProfileContext";
import "./forms.css";

const PersonalInformationForm = ({ setState, data }) => {
    const { state, dispatch } = useProfileContext();
    const [picture, setPicture] = React.useState();

    const [PersonalState, setPersonalState] = React.useState({
        name: data.name,
        email: data.email,
        universityName: data.universityName,
        height: data.height,
        jerseyNumber: data.jerseyNumber,
        weight: data.weight,
        playerClass: data.playerClass,
        birthPlace: data.birthPlace,
        location: data.location,
        position: data.position,
    });

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        dispatch({ type: 'UPDATE_PERSONAL_INFORMATION', payload: { fieldName:"picture", value:file } });
        data.picture = file;
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPicture(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleChange = (fieldName, value) => {
data.fieldName=value

        dispatch({ type: 'UPDATE_PERSONAL_INFORMATION', payload: { fieldName, value } });
    };

    const renderWeightOptions = () => {
        const options = [];
        for (let i = 1; i <= 999; i++) {
            options.push(
                <option key={i} value={`${i} lbs`}>
                    {i} lbs
                </option>
            );
        }
        return options;
    };

    const renderHeightOptions = () => {
        const options = [];
        for (let ft = 4; ft <= 7; ft++) {
            for (let inch = 0; inch < 12; inch++) {
                const value = `${ft}ft ${inch}in`;
                options.push(
                    <option key={value} value={value}>
                        {value}
                    </option>
                );
            }
        }
        return options;
    };

    return (
        <div className="personalInformationForm">
            <h2 style={{ fontSize: "22px" }}>Personal Information</h2>
            <div className="form-data">
                <div className="formFields">
                    <label style={{ fontSize: "16px" }}>Name</label>
                    <input
                        onChange={(e) => handleChange('name', e.target.value)}
                        name="name"
                        type="text"
                        value={state.personalInformation.name || ""}
                        placeholder="Write player name"
                    />
                </div>
                <div className="formFields">
                    <label style={{ fontSize: "16px" }}>School</label>
                    <input
                        onChange={(e) => handleChange('universityName', e.target.value)}
                        type="text"
                        value={state.personalInformation.universityName || ""}
                        placeholder="Write school"
                    />
                </div>
                <div className="formFields">
                    <label style={{ fontSize: "16px" }}>Jersey Number</label>
                    <input
                        onChange={(e) => handleChange('jerseyNumber', e.target.value)}
                        type="Number"
                        value={state.personalInformation.jerseyNumber || ""}
                        placeholder="Write jersey number"
                    />
                </div>
                <div className="formFields">
                    <label style={{ fontSize: "16px" }}>Height</label>
                    <select
                        onChange={(e) => handleChange('height', e.target.value)}
                        value={state.personalInformation.height || ""}
                    >
                        <option value="">Select Height</option>
                        {renderHeightOptions()}
                    </select>
                </div>
                <div className="formFields">
                    <label style={{ fontSize: "16px" }}>Weight</label>
                    <select
                        onChange={(e) => handleChange('weight', e.target.value)}
                        value={state.personalInformation.weight || ""}
                    >
                        <option value="">Select Weight</option>
                        {renderWeightOptions()}
                    </select>
                </div>
                {/* <div className="formFields">
                    <label style={{ fontSize: "16px" }}>Class</label>
                    <input
                        onChange={(e) => handleChange('playerClass', e.target.value)}
                        type="text"
                        value={state.personalInformation.playerClass || ""}
                        placeholder="Player class"
                    />
                </div> */}
                <div className="formFields">
    <label style={{ fontSize: "16px" }}>Class</label>
    <select
        onChange={(e) => handleChange('playerClass', e.target.value)}
        value={state.personalInformation.playerClass || ""}
    >
        <option value="">Select Class</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
        <option value="2025">2025</option>
        <option value="2026">2026</option>
        <option value="2027">2027</option>
        <option value="2028">2028</option>
        <option value="2029">2029</option>
        <option value="2030">2030</option>
        <option value="2031">2031</option>
        <option value="Transfer">Transfer</option>
        <option value="Juco(FR)">Juco(FR)</option>
        <option value="Juco(SO)">Juco(SO)</option>
    </select>
</div>
                <div className="formFields">
                    <label style={{ fontSize: "16px" }}>Birthplace</label>
                    <input
                        onChange={(e) => handleChange('birthPlace', e.target.value)}
                        type="text"
                        value={state.personalInformation.birthPlace || ""}
                        placeholder="Write birth place"
                    />
                </div>
                <div className="formFields">
                    <label style={{ fontSize: "16px" }}>Location</label>
                    <input
                        onChange={(e) => handleChange('location', e.target.value)}
                        type="text"
                        value={state.personalInformation.location || ""}
                        placeholder="Write location"
                    />
                </div>
                {/* <div className="formFields">
                    <label style={{ fontSize: "16px" }}>Position</label>
                    <input
                        onChange={(e) => handleChange('position', e.target.value)}
                        type="text"
                        value={state.personalInformation.position || ""}
                        placeholder="Write position"
                    />
                </div> */}
                <div className="formFields">
    <label style={{ fontSize: "16px" }}>Position</label>
    <select
        onChange={(e) => handleChange('position', e.target.value)}
        value={state.personalInformation.position || ""}
    >
        <option value="">Select Position</option>
        <option value="PG">Point Guard (PG)</option>
        <option value="SG">Shooting Guard (SG)</option>
        <option value="SF">Small Forward (SF)</option>
        <option value="PF">Power Forward (PF)</option>
        <option value="C">Center (C)</option>
    </select>
</div>
                <div className="formFields">
                    <label style={{ fontSize: "16px" }}>Profile Picture</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                    />
                </div>
                {state.picture && (
                    <div className="imageContainer">
                        <img src={picture} alt="Profile" className="profileImage" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default React.memo(PersonalInformationForm);
