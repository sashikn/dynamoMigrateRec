


var configObj = {
    STAGING: {
        AWS_REGION: "ap-southeast-1",
        AWS_ENDPOINT: "https://dynamodb.ap-southeast-1.amazonaws.com",
        DYNAMO_TABLE_NAME: "rec-tools-7983d2ef6ffd0506",
        DYNAMO_NESTED_TABLE_NAME: "rec-tools-nested-rules-45303448fc27ec32",
        REDIS_HOST : "recdata-app-c43da0e4.gwof26.clustercfg.apse1.cache.amazonaws.com",
        REDIS_PORT : 6379
    },
    PRODUCTION: {
        AWS_REGION: "ap-southeast-1",
        AWS_ENDPOINT: "https://dynamodb.ap-southeast-1.amazonaws.com",
        DYNAMO_TABLE_NAME: "rec-tools-535447419580b072",
        DYNAMO_NESTED_TABLE_NAME: "rec-tools-nested-rules-d503df5d846f93d0",
        REDIS_HOST : "recdata-app-7957af02.ikdnxw.clustercfg.apse1.cache.amazonaws.com",
        REDIS_PORT : 6379
    },
}


module.exports = configObj.STAGING;


