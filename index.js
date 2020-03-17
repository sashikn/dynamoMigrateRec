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


let evaluteOldRules =async  (items) => {
    try {

        let postData = {
            id: 0,
            method: "getUserEntityValues",
            params: [{
                profileId: "10253381",
                entityDefinitionIds: []
            }]
        };


        for (let i = 0; i < items.length; i++) {
            const rule = items[i];
            postData.params.entityDefinitionIds.push(rule.id.toString());
        }



        let data =  await axios.post("https://recqry.rec.stg-tvlk.cloud/v1/recommendation/query", postData);

        console.log(" evaluate old rules data  : "+data);


    } catch (error) {

        console.log("error evalute old rules : ", error);
    }
}


convertDataToNewStructure = (ruleList) => {
    try {

        for (let i = 0; i < ruleList.length; i++) {
            const rule = ruleList[i];
            rule.operands = [];


            if (rule.recommendationToolRuleList && rule.recommendationToolRuleList.length > 0) {
                rule.recommendationToolRuleList = rule.recommendationToolRuleList
                    .sort((a, b) => {
                        return a.index > b.index ? 1 : -1;
                    });

                let jOp = null;
                for (let j = 0; j < rule.recommendationToolRuleList.length; j++) {
                    const ru = rule.recommendationToolRuleList[j];

                    if (!(ru.deleted || ru.deleted === "true")) {
                        let obj = {};
                        obj.depth = 0;
                        obj.operands = [];
                        obj.deleted = ru.deleted;
                        obj.index = ru.index;
                        obj.joinOperator = jOp;
                        obj.rule = { ...ru };
                        rule.operands.push(obj);
                        jOp = ru.joinOperator;
                        if (!ru.joinOperator) {
                            jOp = "OR";
                        }
                    }
                }
            }


            rule.recommendationToolRuleList = null;
        }

        console.log("Convert Data List : ", (ruleList));

        return ruleList;
    } catch (error) {
        console.log("Convert data : ", error);
        return [];
    }
}



let insertToNewTable = async (ruleList) => {
    try {

        for (let i = 0; i < ruleList.length; i++) {
            const rule = ruleList[i];
            let params = {
                TableName: config.DYNAMO_NESTED_TABLE_NAME,
                Item: rule
            }

            let data = await dynamoDBClient.put(params).promise();


            console.log("Put an Item : ", data);
        }
    } catch (error) {
        console.log("Put error : ", error);
    }
}




let init = async () => {
    let data = await getAllRules();

    let da = await evaluteOldRules(data.Items);

    //let ruleList = convertDataToNewStructure(data.Items);

   // insertToNewTable(ruleList);

}



init();