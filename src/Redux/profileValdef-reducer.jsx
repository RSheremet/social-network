import React from "react";
const ADD_POST = 'ADD-POST'
const DYNAMIC_CHANGE = 'DYNAMIC-CHANGE'

let initialProfile = {

    profile: {
        posts: [
            {id: 1, posti: 'Its my own cosial network', ILikeIt: 15},
            {id: 2, posti: 'Sounds fantastic!', ILikeIt: 20}
        ]
    },

    valdef: {
        valueDefault: 'Так написано по дефолту'
    },

}

const  reduceAddPost = (state = initialProfile, action) => {
    if (action.type === ADD_POST) {
        let description = {
            id: 3,
            posti: state.valdef.valueDefault,
            ILikeIt: 2
        }

        state.profile.posts.push(description)
        state.valdef.valueDefault = ''
    } else if (action.type === DYNAMIC_CHANGE) {
        state.valdef.valueDefault = action.toHeal
    }
    return state
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const addDynamicChangeCreator = (toHeal) => ({ type: DYNAMIC_CHANGE, toHeal })

export default reduceAddPost;