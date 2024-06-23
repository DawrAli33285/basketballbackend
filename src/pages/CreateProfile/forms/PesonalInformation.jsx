import React, { useCallback } from "react";
import "./forms.css";

const PersonalInformationForm = ({ state, setState,data }) => {
    const [picture,setPicture]=React.useState("")
const [PersonalState,setPersonalState]=React.useState({
    name:data.name,
    email:data.email,
    universityName:data.universityName,
    height:data.height,
    jerseyNumber:data.jerseyNumber,
    weight:data.weight,
    playerClass:data.playerClass,
    birthPlace:data.birthPlace,
    location:data.location,
    position:data.position

})
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        data.picture=file
        console.log(data.picture)
        setState((prev) => {
            return { ...prev, picture:file };
        });
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPicture(reader.result)
                // setState((prev) => {
                //     return { ...prev, picture: reader.result };
                // });
            };
            reader.readAsDataURL(file);
        }
    };


    return (
        <div className="personalInformationForm">
            <h2 style={{ fontSize: "22px" }}>Personal Information</h2>
            <div className="form-data">
                <div className="formFields">
                    <label style={{ fontSize: "16px" }}>Name</label>
                    <input
               
                       
                        onChange={(e) => {
                     
                            setState((prev) => {
                            
                              
                                return { ...prev, name: e.target.value };
                            });
                            setPersonalState((prev)=>{
                                data.name=e.target.value
                                return { ...prev, name: e.target.value };
                            })
                        }}
                     
                        name="name"
                        type="text"
                     value={PersonalState.name}
                        placeholder="write player name"
                    />
                </div>
                <div className="formFields">
                    <label style={{ fontSize: "16px" }}>School</label>
                    <input
                        onChange={(e) => {
                            setState((prev) => {
                                return { ...prev, universityName: e.target.value };
                            });
                            setPersonalState((prev)=>{
                                data.universityName=e.target.value
                                return { ...prev, universityName: e.target.value };
                            })
                        }}
                        type="text"
                        value={PersonalState.universityName}
                        placeholder="write school"
                    />
                </div>
                <div className="formFields">
                    <label style={{ fontSize: "16px" }}>Jersey Number</label>
                    <input
                        onChange={(e) => {
                            setState((prev) => {
                                return { ...prev, jerseyNumber: e.target.value };
                            });
                            setPersonalState((prev)=>{
                                data.jerseyNumber=e.target.value
                                return { ...prev, jerseyNumber: e.target.value };
                            })
                        }}
                        value={PersonalState.jerseyNumber}
                        type="text"
                        placeholder="write jersey number"
                    />
                </div>
                <div className="formFields">
                    <label style={{ fontSize: "16px" }}>Height</label>
                    <input
                        onChange={(e) => {
                            setState((prev) => {
                                return { ...prev, height: e.target.value };
                            });
                            setPersonalState((prev)=>{
                                data.height=e.target.value
                                return { ...prev, height: e.target.value };
                            })
                        }}
                        type="text"
                        value={PersonalState.height}
                        placeholder="player height"
                    />
                </div>
                <div className="formFields">
                    <label style={{ fontSize: "16px" }}>Weight</label>
                    <input
                        onChange={(e) => {
                            setState((prev) => {
                                return { ...prev, weight: e.target.value };
                            });
                            setPersonalState((prev)=>{
                                data.weight=e.target.value
                                return { ...prev, weight: e.target.value }; 
                            })
                        }}
                        value={PersonalState.weight}
                        type="text"
                        placeholder="player weight"
                    />
                </div>
                <div className="formFields">
                    <label style={{ fontSize: "16px" }}>Class</label>
                    <input
                        onChange={(e) => {
                            setState((prev) => {
                                return { ...prev, playerClass: e.target.value };
                            });
                            setPersonalState((prev)=>{
                                data.playerClass=e.target.value
                                return { ...prev, playerClass: e.target.value };
                            })
                        }}
                        value={PersonalState.playerClass}
                        type="text"
                        placeholder="player class"
                    />
                </div>
                <div className="formFields">
                    <label style={{ fontSize: "16px" }}>Birthplace</label>
                    <input
                        onChange={(e) => {
                            setState((prev) => {
                                return { ...prev, birthPlace: e.target.value };
                            });
                            setPersonalState((prev)=>{
                                data.birthPlace=e.target.value
                                return { ...prev, birthPlace: e.target.value };
                            })
                        }}
                        type="text"
                        value={PersonalState.birthPlace}
                        placeholder="write birth place"
                    />
                </div>
                <div className="formFields">
                    <label style={{ fontSize: "16px" }}>Location</label>
                    <input
                        onChange={(e) => {
                            setState((prev) => {
                                return { ...prev, location: e.target.value };
                            });
                            setPersonalState((prev)=>{
                                data.location=e.target.value
                                return { ...prev, location: e.target.value };
                            })
                        }}
                        type="text"
                        value={PersonalState.location}
                        placeholder="write location"
                    />
                </div>
                <div className="formFields">
                    <label style={{ fontSize: "16px" }}>Position</label>
                    <input
                        onChange={(e) => {
                            setState((prev) => {
                                return { ...prev, position: e.target.value };
                            });
                            setPersonalState((prev)=>{
                                data.position=e.target.value
                                return { ...prev, position: e.target.value };
                            })
                        }}
                        value={PersonalState.position}
                        type="text"
                        placeholder="write position"
                    />
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
