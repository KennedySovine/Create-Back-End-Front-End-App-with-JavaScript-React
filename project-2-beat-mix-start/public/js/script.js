// Drum Arrays
let kicks = new Array(16).fill(false);
let snares = new Array(16).fill(false);
let hiHats = new Array(16).fill(false);
let rideCymbals = new Array(16).fill(false);

function toggleDrum(drumType, index){
    if (index < 0 || index >= 16) {
        console.error('Index out of bounds');
        return;
    }
    switch (drumType) {
        case 'kicks':
            kicks[index] = !kicks[index];
            break;
        case 'snares':
            snares[index] = !snares[index];
            break;
        case 'hiHats':
            hiHats[index] = !hiHats[index];
            break;
        case 'rideCymbals':
            rideCymbals[index] = !rideCymbals[index];
            break;
        default:
            console.error('Invalid drum type');
            break;
    }
}

function clear (drumType){
    switch (drumType) {
        case 'kicks':
            kicks.fill(false);
            break;
        case 'snares':
            snares.fill(false);
            break;
        case 'hiHats':
            hiHats.fill(false);
            break;
        case 'rideCymbals':
            rideCymbals.fill(false);
            break;
        default:
            console.error('Invalid drum type');
            break;
    }
}

function invert(drumType){
    switch (drumType) {
        case 'kicks':
            kicks = kicks.map(value => !value);
            break;
        case 'snares':
            snares = snares.map(value => !value);
            break;
        case 'hiHats':
            hiHats = hiHats.map(value => !value);
            break;
        case 'rideCymbals':
            rideCymbals = rideCymbals.map(value => !value);
            break;
        default:
            console.error('Invalid drum type');
            break;
    }
}

function getNeighborPads(x, y, size){
    let neighborPads = [];
    
    // Check each direction before adding
    if (x + 1 < size) neighborPads.push([x + 1, y]);      // Right
    if (x - 1 >= 0) neighborPads.push([x - 1, y]);        // Left  
    if (y + 1 < size) neighborPads.push([x, y + 1]);      // Up
    if (y - 1 >= 0) neighborPads.push([x, y - 1]);        // Down

    console.log(neighborPads);
    
    return neighborPads;
}