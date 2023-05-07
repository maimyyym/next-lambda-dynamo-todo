import AWS from "aws-sdk";
import { v4 as uuidv4 } from "uuid";

const { DynamoDB } = AWS;
const dynamoDb = new DynamoDB.DocumentClient();

export const handler = async (event) => {
    const data = JSON.parse(event.body);
    const timestamp = new Date().toISOString();

    const params = {
        TableName: "Tasks",
        Item: {
            id: uuidv4(),
            title: data.title,
            dueDate: data.dueDate,
            done: false,
            createdAt: timestamp,
            updatedAt: timestamp,
        },
    };

    console.log("Put parameters", JSON.stringify(params));

    try {
        await dynamoDb.put(params).promise();
        return {
            headers: { 
            "Access-Control-Allow-Origin" : "*"
            },
            statusCode: 200,
            body: JSON.stringify(params.Item),
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

