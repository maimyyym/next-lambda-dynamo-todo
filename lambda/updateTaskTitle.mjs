import AWS from "aws-sdk";

const { DynamoDB } = AWS;
const dynamoDb = new DynamoDB.DocumentClient();

export const updateTaskTitle = async (event) => {
    const data = JSON.parse(event.body);
    const timestamp = new Date().toISOString();

    const params = {
        TableName: "Tasks",
        Key: {
            id:event.pathParameters.id,
        },
        UpdateExpression: "set title = :title, updatedAt = :updatedAt",
        ExpressionAttributeValues: {
            "title": data.title,
            "updatedAt": new Date().toISOString(),
        },
        ReturnValue:"ALL_NEW",
    };


    try {
        await dynamoDb.update(params).promise();
        return {
            statusCode: 200,
            body: JSON.stringify(params.Item),
        };
    } catch (error) {
        console.error("Error", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Failed...:(" }),
        };
    }
    };





