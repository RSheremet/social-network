import React from "react";
import {profileAPI, usersAPI} from "../components/API/API";
const ADD_POST = 'ADD-POST';

const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = 'SET-USER-STATUS';

let initialProfile = {

    profile: {
        posts: [
            {id: 1, posti: 'Its my own cosial network', ILikeIt: 15},
            {id: 2, posti: 'Sounds fantastic!', ILikeIt: 20}
        ],
        singleProfile: null
    },

    status: ''

};

const  profileRD = (state = initialProfile, action) => {

    let stateCopy;
    switch (action.type) {

        case ADD_POST:
            stateCopy = {
                ...state,
                profile: {
                    posts: [...state.profile.posts, {id: 3, posti: action.text.postForm, ILikeIt: 2}]
                }
            };
            return stateCopy;

        case SET_USER_PROFILE:
            stateCopy = {
                ...state,
                profile: {
                    posts: [...state.profile.posts],
                    singleProfile: action.file
                }
            };
            return stateCopy;

        case SET_USER_STATUS:
            stateCopy = {
                ...state,
                status: action.status
            };
            return stateCopy;

        default:
            return state;

    }
};

export const addPostActionCreatorr = ( text ) => ({ type: ADD_POST, text });
export const setUserProfile = (file) => ({ type: SET_USER_PROFILE, file });
export const setUsersStatus = (status) => ({ type: SET_USER_STATUS, status });

export const getUserProfileThunkCreatorr = ( userID ) => {
    return (dispatch) => {
        usersAPI.getUserProfile( userID ).then(data => {
            dispatch(setUserProfile(data))
        })
    }
};

export const sendUsersStatusThunkCreator = ( status ) => {
    return () => {
        profileAPI.sendStatus( status )
    }
};

export const getUsersStatusThunkCreator = (userID) => {
    return (dispatch) => {
        profileAPI.getUsersStatus( userID ).then(data => {
            dispatch(setUsersStatus(data))
        })
    }
};




export default profileRD;