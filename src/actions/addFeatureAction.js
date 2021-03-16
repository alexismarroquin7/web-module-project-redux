export const ADD_FEATURE = "ADD_FEATURE";

export const addFeature = (name) => {
    return {type: ADD_FEATURE, payload:{ name }};
};