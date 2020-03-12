const config = require("./config");
let dynamoDBClient = require("./dynamoDBClient");






let deleteData = async (ruleList) => {
    try {
        
        for (let i = 0; i < ruleList.length; i++) {
            const rule = ruleList[i];
            let params = {
                TableName: config.DYNAMO_NESTED_TABLE_NAME,
                Key: {
                    id : rule.id
                }
            }

            let data = await dynamoDBClient.delete(params).promise();


            console.log("Delete an Item : ", data);
        }
    } catch (error) {
        console.log("Delete error : ", error);
    }
}


let getAllRules = async () => {
    try {
        let params = {
            TableName: config.DYNAMO_TABLE_NAME
        }

        let data = await dynamoDBClient.scan(params).promise();
        console.log("Get Rules data : ", (data));

        return data;
    } catch (error) {
        console.log("Get Rules data : ", JSON.stringify(error));
        return {
            Items: [],
            Count: 0,
            ScannedCount: 0
        }
    }
}






let init = async () => {

    let data = await getAllRules();
    await deleteData(data.Items);

}



init();