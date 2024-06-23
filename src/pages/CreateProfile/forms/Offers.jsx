import React from "react";
import "./forms.css";

const OffersForm = ({ data, setState }) => {
  const formatDateForInput = (dateString) => {
    if (!dateString) return ""; 
    const date = new Date(dateString);
  
    return date.toISOString().split("T")[0];
  };
const [offerdata,setOfferData]=React.useState({
  type:data.offers[0].status,
  university:data.offers[0].university,
  status: data.offers[0].status,
  date: formatDateForInput(data.offers[0].date),
  logo:data.offers[0].logo
})


  const handleInputChange = (field, value) => {
    setState((prev) => {
       
        data.offers = [
            {
                ...data.offers[0], 
                [field]: value,   
            },
      
        ];

   
        return {
            ...prev,
            offers: [
                {
                    ...prev.offers[0], 
                    [field]: value,    
                },
               
            ],
        };
    });
setOfferData({
  ...offerdata,
  [field]:value
})
    
};

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setState((prev) => {
      data.offers[0]={
        ...data.offers[0],
        logo:file
      }
        return { ...prev, logo:file };
    });
 
};

  return (
    <div className="offersForm">
      <h2 style={{ fontSize: "22px" }}>Offers</h2>
      <div className="form-data">
        <div className="formFields">
          <label style={{ fontSize: "16px" }}>Status</label>
          <input
            onChange={(e) => handleInputChange("status", e.target.value)}
            type="text"
            placeholder="Offer status"
          value={offerdata.status}
          />
        </div>
        <div className="formFields">
          <label style={{ fontSize: "16px" }}>Date</label>
          <input
            onChange={(e) => handleInputChange("date", e.target.value)}
            type="date"
            placeholder="Offer date"
            value={offerdata.date}
          />
        </div>
        <div className="formFields">
          <label style={{ fontSize: "16px" }}>University</label>
          <input
            onChange={(e) => handleInputChange("university", e.target.value)}
            type="text"
            placeholder="University name"
            value={offerdata.university}
          />
        </div>
        <div className="formFields">
          <label style={{ fontSize: "16px" }}>Type</label>
          <input
            onChange={(e) => handleInputChange("type", e.target.value)}
            type="text"
            placeholder="Offer type"
            value={offerdata.type}
          />
        </div>
        <div className="formFields">
                    <label style={{ fontSize: "16px" }}>University Logo</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                    />
                </div>
        
      </div>
    </div>
  );
};

export default OffersForm;
