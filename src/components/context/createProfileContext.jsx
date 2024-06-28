import { createContext, useContext, useEffect, useReducer } from "react";
import Reducer from "../reducer/profileReducer";
import axios from "axios";
import { BASE_URL } from "../../baseurl/baseurl";
const ProfileCreateContext = createContext();
const initialState = {
    personalInformation: [],
    contactDetail: [],
    academics: [],
    aboutme: "",
    accomplishments: [],
    coachinformation: [],
    offers: [],
    mediaFiles: []
}


const ProfileProvider = ({ children }) => {

    useEffect(() => {
        const fetchProfile = async () => {
            if (window.location.href.match(/create-profile/)) {
                let userId = JSON.parse(localStorage.getItem('user'))?._id;

                if (userId) {
                    try {
                        let url = `${BASE_URL}/get-profile/${userId}`;
                        let response = await axios.get(url);
                        console.log("response GET")
                        console.log(response.data)
                        if (response.status === 200) {
                            let { profile, players } = response.data;
                            console.log("RES");

                            console.log(profile);
                            console.log(profile)
                            console.log("PROFI:E")
                            if (profile.about) {
                                dispatch({ type: 'UPDATE_ABOUT_ME', payload: profile.about });
                            }
                            if (players && players.length > 0) {
                                const player = players[0];
                                const fieldsToDispatch = {
                                    name: player.auth.name,
                                    email: player.auth.email,
                                    universityName: profile?.player?.institute?.universityName,
                                    height: player.height,
                                    jerseyNumber: player.jerseyNumber,
                                    weight: player.weight,
                                    playerClass: player.class,
                                    birthPlace: player.birthPlace,
                                    location: player.location,
                                    position: player.position,
                                    // picture:player.picture
                                };

                                for (const [fieldName, value] of Object.entries(fieldsToDispatch)) {
                                    dispatch({ type: 'UPDATE_PERSONAL_INFORMATION', payload: { fieldName, value } });
                                }
                            }
                            if (profile.auth.phoneNumber) {
                                dispatch({ type: 'UPDATE_CONTACT_INFORMATION', payload: { fieldName: 'phoneNumber', value: profile.auth.phoneNumber } });
                            }
                            if (profile.academics && profile.academics.length > 0) {
                                const academics = profile.academics[0];
                                const academicFields = ['gpa', 'satScore', 'actScore', 'ncaaId'];

                                for (const field of academicFields) {
                                    if (academics[field] !== undefined) {
                                        dispatch({ type: 'UPDATE_ACADEMICS', payload: { fieldName: field, value: academics[field] } });
                                    }
                                }
                            }
                            if (profile.athleticaccomplishments && profile.athleticaccomplishments.length > 0) {
                                const accomplishments = profile.athleticaccomplishments;
                                dispatch({ type: 'UPDATE_ACCOMPLISHMENTS', payload: accomplishments });
                            }
                            if (profile.offers && profile.offers.length > 0) {
                                const offers = profile.offers[0];
                                const offerFields = ['university', 'logo', 'status', 'date', 'type'];

                                for (const field of offerFields) {
                                    if (offers[field] !== undefined) {
                                        dispatch({ type: 'UPDATE_Offers', payload: { fieldName: field, value: offers[field] } });
                                    } else if (field === 'type') {
                                        dispatch({ type: 'UPDATE_Offers', payload: { fieldName: 'type', value: '' } });
                                    }
                                }
                            }
                            if (profile.photos && profile.photos.length > 0) {
                                dispatch({ type: 'ADD_MEDIA_FILES', payload: profile.photos });
                            }
                            console.log("this is the coach", profile.coach.length)
                            if (profile.coach) {
                                const coach = profile.coach;


                                const updatedCoach = {
                                    ...coach,
                                    role: coach.coachProgram,
                                    phoneNumber: coach.phone
                                };


                                delete updatedCoach.coachProgram;
                                delete updatedCoach.phone;


                                dispatch({
                                    type: 'UPDATE_COACH_INFORMATION',
                                    payload: updatedCoach
                                });
                            }
                            if (profile.socialLinks && profile.socialLinks.length > 0) {
                              console.log(profile.socialLinks)
                             profile.socialLinks.filter(u=>u!=null).map((link,i)=>{
                            
                                dispatch({
                                    type: 'UPDATE_CONTACT_INFORMATION',
                                    payload: { fieldName: link.social_type, value: link.link }
                                });
                             })
                            }

                        }
                    } catch (error) {
                        console.error("Failed to fetch profile data:", error);
                    }
                }
            }
        };

        fetchProfile();
    }, []);
    const [state, dispatch] = useReducer(Reducer, initialState);
    return (
        <ProfileCreateContext.Provider value={{ state, dispatch }}>{children}</ProfileCreateContext.Provider>
    )
}
const useProfileContext = () => {
    return useContext(ProfileCreateContext)
}
export { ProfileProvider, ProfileCreateContext, useProfileContext };