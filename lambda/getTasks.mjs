import AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';

const { DynamoDB } = AWS;
const dynamoDb = new DynamoDB.DocumentClient();

export const getTasks = async (event) => {
    const params = {
        TableName: 'Tasks',
    };

    try {
        const taskList = await dynamoDb.scan(params).promise();
        return {
            statusCode: 200,
            body: JSON.stringify(taskList.Items),
        };
    } catch (error) {
        console.error('Error', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed...:(' }),
        };
    }
};
