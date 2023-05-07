import AWS from "aws-sdk";

const { DynamoDB } = AWS;
const dynamoDb = new DynamoDB.DocumentClient();

export const handler = async (event) => {

    const params = {
        TableName: "Tasks",
        Key: {
            id: event.pathParameters.id,
        },
    };

    try {
        await dynamoDb.delete(params).promise();
        return {
            headers: { 
            "Access-Control-Allow-Origin" : "*"
            },
            statusCode: 200,
            body: JSON.stringify({}),
        };
    } catch (error) {
        console.error("Error", error);
        return {
            headers: { 
            "Access-Control-Allow-Origin" : "*"
            },
            statusCode: 500,
            body: JSON.stringify({ error: "Failed...:(" }),
        };
    }
    };


