import React from "react";
import "./forms.css";

const AcademicsForm = ({data,setState}) => {
    const [academics,setAcademics]=React.useState({
        gpa: data.academics.gpa,
        satScore: data.academics.satScore,
        actScore: data.academics.actScore,
        ncaaId:data.academics.ncaaId
    })
    return (
        <div className="academicsForm">
            <h2 style={{ fontSize: "22px" }}>Academics</h2>
            <div className="form-data">
                <div className="formFields">
                    <label style={{ fontSize: "16px" }}>GPA</label>
                    <input onChange={(e)=>{
                            setState((prev)=>{
                                let old=prev;
                                return {...old,academics:{
                                    ...old.academics,
                                    gpa:e.target.value
                                }}
                             })
                             setAcademics((prev)=>{
                                let old=prev;
                                data.academics={
                                    ...data.academics,
                                    gpa:e.target.value
                                }
                                console.log(prev)
                                return {...old,gpa:e.target.value}
                             })
                     
                    }} value={academics.gpa} type="text" placeholder="write GPA" />
                </div>
                <div className="formFields">
                    <label style={{ fontSize: "16px" }}>SAT Score</label>
                    <input 
                    onChange={(e)=>{
                        setState((prev)=>{
                            let old=prev;
                            return {...old,academics:{
                                ...old.academics,
                                satScore:e.target.value
                            }}
                         })
                         setAcademics((prev)=>{
                            let old=prev;
                            data.academics={
                                ...data.academics,
                                satScore:e.target.value
                            }
                            console.log(prev)
                            return {...old, satScore:e.target.value}
                         })
                    }}
                    
                    type="text" value={academics.satScore} placeholder="write SAT Score" />
                </div>
                <div className="formFields">
                    <label style={{ fontSize: "16px" }}>AST Score</label>
                    <input onChange={(e)=>{
                           setState((prev)=>{
                            let old=prev;
                            return {...old,academics:{
                                ...old.academics,
                               actScore:e.target.value
                            }}
                         })
                         setAcademics((prev)=>{
                            let old=prev;
                            data.academics={
                                ...data.academics,
                                actScore:e.target.value
                            }
                            console.log(prev)
                            return {...old,actScore:e.target.value}
                         })
                    }} value={academics.actScore} type="text" placeholder="write AST Score" />
                </div>
                <div className="formFields">
                    <label style={{ fontSize: "16px" }}>NCAA ID</label>
                    <input onChange={(e)=>{
                              setState((prev)=>{
                                let old=prev;
                                return {...old,academics:{
                                    ...old.academics,
                                    ncaaId:e.target.value
                                }}
                             })

                             setAcademics((prev)=>{
                                let old=prev;
                                data.academics={
                                    ...data.academics,
                                    ncaaId:e.target.value
                                }
                                console.log(prev)
                                return {...old,ncaaId:e.target.value}
                             })
                    }} type="text" value={academics.ncaaId} placeholder="write NCAA ID" />
                </div>
            </div>
        </div>
    );
};

export default AcademicsForm;
