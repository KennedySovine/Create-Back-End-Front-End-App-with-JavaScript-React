// Use this presets array inside your presetHandler
const { request } = require('express');
const presets = require('./presets');

// Complete this function:
const presetHandler = (requestType, index, newPresetArray) => {
    // Check for invalid request type first
    if (requestType.toUpperCase() !== 'GET' && requestType.toUpperCase() !== 'PUT') {
        return [400]; // Bad Request
    }
    
    // Check for invalid index
    if (index < 0 || index >= presets.length) {
        return [404]; // Not Found
    }
    
    // Handle GET request
    if (requestType.toUpperCase() === 'GET') {
        return [200, presets[index]];
    }
    
    // Handle PUT request
    if (requestType.toUpperCase() === 'PUT') {
        presets[index] = newPresetArray;
        return [200, presets[index]];
    }
};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
