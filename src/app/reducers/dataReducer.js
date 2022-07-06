const initialsate = require('../../data/test_data.json');

export const dataReducer = (state = initialsate, action) => {
    switch(action.type) {
        case 'ADD_DATA':
            return[...action.data];      
        default:
            return [...state];
    }
};