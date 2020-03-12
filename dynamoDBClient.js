const config = require("./config");


var AWS = require("aws-sdk");

AWS.config.update({
  region: config.AWS_REGION,
  endpoint: config.AWS_ENDPOINT
});

const dynamoDBClient = new AWS.DynamoDB.DocumentClient();


module.exports = dynamoDBClient;