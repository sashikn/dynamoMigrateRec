const config = require("./config");
let dynamoDBClient = require("./dynamoDBClient");



let deleteData = async () =>{
    try {
        let params = {
            TableName : config.DYNAMO_NESTED_TABLE_NAME,
        }


        let data = await dynamoDBClient.delete(params).promise();

        console.log("Delete data : ", data);
    } catch (error) {
        console.log("Delete data error : ", error);
    }
}







let init = async () => {
    await deleteData();

}



init();