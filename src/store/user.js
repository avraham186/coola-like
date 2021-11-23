import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
    name: "user",
    initialState: {
        imageUrl: '',
        email: '',
        name: '',
        view: ''
    },
    reducers: {
        addUser: (user, action) => {
            user.imageUrl = action.payload.imageUrl;
            user.email = action.payload.email;
            user.name = action.payload.name;
        },
        facebookProfile: (user, action) => {
            const graphQL = `https://graph.facebook.com/${action.payload.userID}?fields=id,name,email,picture&access_token=${action.payload.accessToken}`

            fetch(graphQL)
                .then(response => response.json())
                .then((jsonData) => {
                    // jsonData is parsed json object received from url
                    console.log(jsonData)
                    user.imageUrl = jsonData.picture.data.url;
                    user.email = jsonData.email;
                    user.name = jsonData.name;
                })
                .catch((error) => {
                    // handle your errors here
                    console.error(error)
                })


        },
        setLogin: (user, action) => {
            user.view = action.payload.view;
        },
    },
});

export const {
    addUser,
    setLogin,
    facebookProfile
} = slice.actions;

export default slice.reducer;