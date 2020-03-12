const config = require("./config");
let dynamoDBClient = require("./dynamoDBClient");



let getAllRules = async () => {
    try {
        let params = {
            TableName : config.DYNAMO_TABLE_NAME
        }

        let data = await dynamoDBClient.scan(params).promise();



        console.log("data", data);
    } catch (error) {
        console.log(error);
    }
}




getAllRules();