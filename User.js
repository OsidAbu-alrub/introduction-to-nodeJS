const convertTextToJson = (file) =>{
    const arrayOfLinesWithHeader = file.split('\n');
    const arrayOfLines = arrayOfLinesWithHeader.splice(1,arrayOfLinesWithHeader.length);

    const userObjects = arrayOfLines.map(parseUser);
    return userObjects;
}

// UTILITY FUNCTION TO PARSE USER
function parseUser(user){
    const data = user.split(',');
    return {
        id: data[0],
        firstName: data[1],
        lastName: data[2],
        email: data[3],
        gender: data[4],
        ipAddress: data[5],
        color:data[6],
        parentId: data[7]
    };
}

module.exports = convertTextToJson;