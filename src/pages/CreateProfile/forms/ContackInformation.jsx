import React from "react";
import "./forms.css";

const   ContactInformationForm = ({data,setsocialLinks,setState}) => {
const [contactInformation,setContactInformation]=React.useState({
    phoneNumber:data.phoneNumber,
    twitter:'',
    facebook:'',
    tiktok:'',
    instagram:''  
})

    return (
        <div className="contactInformationForm">
            <h2 style={{ fontSize: "22px" }}>Contact Information</h2>
            <div className="form-data">
                <div className="formFields">
                    <label style={{ fontSize: "16px" }}>Phone Number</label>
                    <input onChange={(e)=>{
     
     setContactInformation((prev)=>{
        let old=prev;
        data.phoneNumber=e.target.value
        return {...old,phoneNumber:e.target.value}
     })
     setState((prev)=>{
        let old=prev;
        return {...old,phoneNumber:e.target.value}
     })
                    }} value={contactInformation.phoneNumber} type="text" placeholder="write phone number" />
                </div>
                <div className="formFields">
                    <label style={{ fontSize: "16px" }}>Twitter</label>
                    <input onChange={(e)=>{
                       
                        setsocialLinks((prev)=>{
                            let old=prev;
                            data.socialLinks=[...data.socialLinks,{
                                social_type:"twitter",
                                link:e.target.value
                            }]
                            return {...old,twitter:{
                                link:e.target.value
                            }}
                        })
                    
                    }} type="text" placeholder="Twitter link" />
                </div>
                <div className="formFields">
                    <label style={{ fontSize: "16px" }}>TikTok</label>
                    <input onChange={(e)=>{
                       setsocialLinks((prev)=>{
                        let old=prev;
                        data.socialLinks=[...data.socialLinks,{
                            social_type:"tiktok",
                            link:e.target.value
                        }]
                        return {...old,tiktok:{
                            link:e.target.value
                        }}
                    })
                    }}  type="text" placeholder="TikTok link" />
                </div>
                <div className="formFields">
                    <label style={{ fontSize: "16px" }}>Facebook</label>
                    <input onChange={(e)=>{
                       setsocialLinks((prev)=>{
                        let old=prev;
                        data.socialLinks=[...data.socialLinks,{
                            social_type:"facebook",
                            link:e.target.value
                        }]
                        return {...old,facebook:{
                            link:e.target.value
                        }}
                    })
                    }}  type="text" placeholder="Facebook link" />
                </div>
                <div className="formFields">
                    <label style={{ fontSize: "16px" }}>Instagram</label>
                    <input onChange={(e)=>{
                     setsocialLinks((prev)=>{
                        data.socialLinks=[...data.socialLinks,{
                            social_type:"instagram",
                            link:e.target.value
                        }]
                        let old=prev;
                        return {...old,instagram:{
                            link:e.target.value
                        }}
                    })
                    }}  type="text" placeholder="Instagram link" />
                </div>
            </div>
        </div>
    );
};

export default ContactInformationForm;
