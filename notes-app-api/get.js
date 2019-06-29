import * as dynamoDbLib from "./libs/dynamodb-lib";
import { success, failure } from "./libs/response-lib";

export async function main(event, context) {
  const params = {
    TableName: "clients",
    // 'Key' defines the partition key and sort key of the item to be retrieved
    // - 'userId': Identity Pool identity id of the authenticated user
    // - 'clientId': path parameter
    Key: {
      userId: event.requestContext.identity.cognitoIdentityId,
      clientId: event.pathParameters.id
    }
  };

  try {
    const result = await dynamoDbLib.call("get", params);
    if (result.Item) {
      // Return the retrieved client
      return success(result.Item);
    } else {
      return failure({ status: false, error: "Client not found." });
    }
  } catch (e) {
    return failure({ status: false });
  }
}
