


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
        DYNAMO_TABLE_NAME: "rec-tools-535447419580b072",
        DYNAMO_NESTED_TABLE_NAME: "rec-tools-nested-rules-d503df5d846f93d0"
    },
}


module.exports = configObj.PRODUCTION;


