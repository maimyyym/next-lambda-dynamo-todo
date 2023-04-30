import AWS from "aws-sdk";
import { v4 as uuidv4 } from "uuid";

const { DynamoDB } = AWS;
const dynamoDb = new DynamoDB.DocumentClient();

export const updateTaskDate = async (event) => {
    const data = JSON.parse(event.body);
    const timestamp = new Date().toISOString();

    const params = {
        TableName: "Tasks",
        Key: {
            id:event.pathParameters.id,
        },
        UpdateExpression: "set dueDate = :dueDate, updatedAt = :updatedAt",
        ExpressionAttributeValues: {
            "dueDate": data.dueDate,
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



