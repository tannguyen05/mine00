const uuidv4 = require('uuid/v4');
let Items = [
    {
        id: uuidv4(),
        name: "abc",
        level: 2 //low
    },
    {
        id: uuidv4(),
        name: "Somthing here...",
        level: 2 //low
    },
    {
        id: uuidv4(),
        name: "bhi",
        level: 0 //high
    },
    {
        id: uuidv4(),
        name: "ark",
        level: 1 //medium
    }
];
export default Items;