import React, {useState} from 'react';
import Inputs from "../inputs/Inputs";

const textFieldArr = [
    {id: "Email", label: "אימייל", type: 'email', required: false},
    {id: "Profession", label: "מקצוע", type: 'text', required: false},
    {id: "LinkedIn", label: "פרופיל לינקדאין", type: 'text', required: false},
];


const UpdateProfile = () => {

    const [formData, setFormData] = useState({
        Email: '',
        password: '',
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        switch (name) {
            case 'Email':
                setFormData({...formData, Email: value});
                break;
            case 'password':
                setFormData({...formData, password: value});
                break;
            default:
                break;
        }
    }

    return (
        <div>
            <form>
                <Inputs inputs={textFieldArr} handleChange={handleChange}/>
            </form>
        </div>
    );
};

export default UpdateProfile;