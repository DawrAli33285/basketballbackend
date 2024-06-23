import React from "react";
import "./forms.css";

const AboutMeForm = ({data,setState}) => {
const [about,setAbout]=React.useState(data.about)
    return (
        <div className="aboutMeForm">
            <h2 style={{ fontSize: "22px" }}>About Me</h2>
            <div className="form-data">
                <div className="formFields">
                    <label style={{ fontSize: "16px" }}>About</label>
                    <textarea onChange={(e)=>{
                       setState((prev)=>{
                        let old=prev;
                        return {...old,about:e.target.value}
                     })
                     setAbout((prev)=>{
                        data.about=e.target.value
                        return e.target.value
                     })
                    }} value={about} rows="10" placeholder="Write about yourself"></textarea>
                </div>
            </div>
        </div>
    );
};

export default AboutMeForm;
