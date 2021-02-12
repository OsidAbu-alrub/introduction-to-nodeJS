const fs = require('fs');
const convertTextToJson = require('./User.js');
const URL = './MOCK_DATA.csv';

const readPlain = ()=>{
    const file = fs.readFileSync(URL).toString();
    return file;
}

const saveToFileAsJson = (users) =>{
    const usersStringified = JSON.stringify(users);
    fs.writeFileSync('data.json',usersStringified);
}

const readJsonFile = (jsonFile) =>{
    const file = fs.readFileSync(jsonFile).toString();
    console.log(file);
}

const file = readPlain();
const arrayOfUserObjects = convertTextToJson(file);
saveToFileAsJson(arrayOfUserObjects);

readJsonFile('data.json');