


var configObj = {
    STAGING: {
        AWS_REGION: "ap-southeast-1",
        AWS_ENDPOINT: "https://dynamodb.ap-southeast-1.amazonaws.com",
        DYNAMO_TABLE_NAME: "rec-tools-7983d2ef6ffd0506",
        DYNAMO_NESTED_TABLE_NAME: "rec-tools-nested-rules-45303448fc27ec32"
    },
    PRODUCTION: {
        AWS_REGION: "ap-southeast-1",
        AWS_ENDPOINT: "https://dynamodb.ap-southeast-1.amazonaws.com",
        DYNAMO_TABLE_NAME: "",
        DYNAMO_NESTED_TABLE_NAME: ""
    },
}


module.exports = configObj.STAGING;


