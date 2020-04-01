const config = require("./config");
let dynamoDBClient = require("./dynamoDBClient");

let axios = require("axios");



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


let evaluteOldRules = async (items) => {
    try {



        let ids = []


        for (let i = 0; i < items.length; i++) {
            const rule = items[i];
            ids.push(rule.id.toString());
        }


        let postData = {
            id: 0,
            method: "getUserEntityValues",
            params: [{
                profileId: "10253381",
                entityDefinitionIds: ids
            }]
        };


        let data = await axios.post("https://recqry.rec.stg-tvlk.cloud/v1/recommendation/query", postData);

        let ress = JSON.stringify(data.data);

        console.log(" evaluate old rules data  : " + ress);


    } catch (error) {

        console.log("error evalute old rules : ", error);
    }
}









let init = async () => {
    let data = await getAllRules();
    let da = await evaluteOldRules(data.Items)

}



init();