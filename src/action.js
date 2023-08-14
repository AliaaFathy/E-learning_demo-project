// actions.js
export const setToken = (newToken) => {
    return {
        type: 'SET_TOKEN',
        payload: newToken,
    };
};

export const clearToken = () => {
    return {
        type: 'CLEAR_TOKEN',
    };
};
