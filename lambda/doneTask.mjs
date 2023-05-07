import AWS from 'aws-sdk';

const { DynamoDB } = AWS;
const dynamoDb = new DynamoDB.DocumentClient();

export const handler = async (event) => {
    const data = JSON.parse(event.body);
    const timestamp = new Date().toISOString();

    const params = {
        TableName: 'Tasks',
        Key: {
            id: event.pathParameters.id,
        },
        UpdateExpression: 'set done = :done, updatedAt = :updatedAt',
        ExpressionAttributeValues: {
            done: data.done,
            updatedAt: new Date().toISOString(),
        },
        ReturnValue: 'ALL_NEW',
    };

    try {
        await dynamoDb.update(params).promise();
        return {
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
            statusCode: 200,
            body: JSON.stringify(params.Item),
        };
    } catch (error) {
        console.error('Error', error);
        return {
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed...:(' }),
        };
    }
};
