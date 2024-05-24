# Chatbot

(_chatbot_)

### Available Operations

- [postChatbotCreate](#postchatbotcreate) - Create Chatbot
- [postChatbotList](#postchatbotlist) - List Chatbots
- [postChatbotGet](#postchatbotget) - Get Chatbot
- [getChatbotAnalytics](#getchatbotanalytics) - Get Chatbot analytics
- [getChatbotGetMessages](#getchatbotgetmessages) - Get Chatbot messages
- [postChatbotUpdate](#postchatbotupdate) - Update Chatbot
- [postChatbotDelete](#postchatbotdelete) - Delete Chatbot
- [postChatbotReset](#postchatbotreset) - Reset Token

## postChatbotCreate

Create Chatbot

### Example Usage

```typescript
import { AthenaCopilot } from "athena-copilot";

const athenaCopilot = new AthenaCopilot({
  security: {
    username: "<YOUR_USERNAME_HERE>",
    password: "<YOUR_PASSWORD_HERE>",
  },
});

async function run() {
  const result = await athenaCopilot.chatbot.postChatbotCreate({
    name: "Chatbot -1",
    brainId: "1f1d7a6a-e45b-4974-a0ba-98935650cb9c",
    urls: ["https://byteleap.co"],
  });

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter              | Type                                                                                               | Required           | Description                                                                                                                                                                    |
| ---------------------- | -------------------------------------------------------------------------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`              | [operations.PostChatbotCreateRequestBody](../../models/operations/postchatbotcreaterequestbody.md) | :heavy_check_mark: | The request object to use for the request.                                                                                                                                     |
| `options`              | RequestOptions                                                                                     | :heavy_minus_sign: | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions` | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)            | :heavy_minus_sign: | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |

### Response

**Promise\<[operations.PostChatbotCreateResponse](../../models/operations/postchatbotcreateresponse.md)\>**

### Errors

| Error Object    | Status Code | Content Type |
| --------------- | ----------- | ------------ |
| errors.SDKError | 4xx-5xx     | _/_          |

## postChatbotList

List Chatbots

### Example Usage

```typescript
import { AthenaCopilot } from "athena-copilot";

const athenaCopilot = new AthenaCopilot({
  security: {
    username: "<YOUR_USERNAME_HERE>",
    password: "<YOUR_PASSWORD_HERE>",
  },
});

async function run() {
  const result = await athenaCopilot.chatbot.postChatbotList();

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter              | Type                                                                                    | Required           | Description                                                                                                                                                                    |
| ---------------------- | --------------------------------------------------------------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`              | RequestOptions                                                                          | :heavy_minus_sign: | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions` | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options) | :heavy_minus_sign: | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |

### Response

**Promise\<[operations.PostChatbotListResponse](../../models/operations/postchatbotlistresponse.md)\>**

### Errors

| Error Object    | Status Code | Content Type |
| --------------- | ----------- | ------------ |
| errors.SDKError | 4xx-5xx     | _/_          |

## postChatbotGet

Get Chatbot

### Example Usage

```typescript
import { AthenaCopilot } from "athena-copilot";

const athenaCopilot = new AthenaCopilot({
  security: {
    username: "<YOUR_USERNAME_HERE>",
    password: "<YOUR_PASSWORD_HERE>",
  },
});

async function run() {
  const result = await athenaCopilot.chatbot.postChatbotGet(
    "7a2e792d-cf48-49d2-a36d-186be034a9dc"
  );

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter              | Type                                                                                    | Required           | Description                                                                                                                                                                    | Example         |
| ---------------------- | --------------------------------------------------------------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------- |
| `chatbotId`            | _string_                                                                                | :heavy_minus_sign: | N/A                                                                                                                                                                            | [object Object] |
| `options`              | RequestOptions                                                                          | :heavy_minus_sign: | Used to set various options for making HTTP requests.                                                                                                                          |                 |
| `options.fetchOptions` | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options) | :heavy_minus_sign: | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                 |

### Response

**Promise\<[operations.PostChatbotGetResponse](../../models/operations/postchatbotgetresponse.md)\>**

### Errors

| Error Object    | Status Code | Content Type |
| --------------- | ----------- | ------------ |
| errors.SDKError | 4xx-5xx     | _/_          |

## getChatbotAnalytics

Get Chatbot analytics

### Example Usage

```typescript
import { AthenaCopilot } from "athena-copilot";

const athenaCopilot = new AthenaCopilot({
  security: {
    username: "<YOUR_USERNAME_HERE>",
    password: "<YOUR_PASSWORD_HERE>",
  },
});

async function run() {
  const result = await athenaCopilot.chatbot.getChatbotAnalytics(
    "1a718a80-71c0-414b-915c-5c5991597ac7"
  );

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter              | Type                                                                                    | Required           | Description                                                                                                                                                                    | Example         |
| ---------------------- | --------------------------------------------------------------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------- |
| `chatbotId`            | _string_                                                                                | :heavy_minus_sign: | N/A                                                                                                                                                                            | [object Object] |
| `options`              | RequestOptions                                                                          | :heavy_minus_sign: | Used to set various options for making HTTP requests.                                                                                                                          |                 |
| `options.fetchOptions` | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options) | :heavy_minus_sign: | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                 |

### Response

**Promise\<[operations.GetChatbotAnalyticsResponse](../../models/operations/getchatbotanalyticsresponse.md)\>**

### Errors

| Error Object    | Status Code | Content Type |
| --------------- | ----------- | ------------ |
| errors.SDKError | 4xx-5xx     | _/_          |

## getChatbotGetMessages

note: there is a limit of 10000 messages

### Example Usage

```typescript
import { AthenaCopilot } from "athena-copilot";

const athenaCopilot = new AthenaCopilot({
  security: {
    username: "<YOUR_USERNAME_HERE>",
    password: "<YOUR_PASSWORD_HERE>",
  },
});

async function run() {
  const result = await athenaCopilot.chatbot.getChatbotGetMessages(
    "1a718a80-71c0-414b-915c-5c5991597ac7"
  );

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter              | Type                                                                                    | Required           | Description                                                                                                                                                                    | Example         |
| ---------------------- | --------------------------------------------------------------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------- |
| `chatbotId`            | _string_                                                                                | :heavy_minus_sign: | N/A                                                                                                                                                                            | [object Object] |
| `options`              | RequestOptions                                                                          | :heavy_minus_sign: | Used to set various options for making HTTP requests.                                                                                                                          |                 |
| `options.fetchOptions` | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options) | :heavy_minus_sign: | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                 |

### Response

**Promise\<[operations.GetChatbotGetMessagesResponse](../../models/operations/getchatbotgetmessagesresponse.md)\>**

### Errors

| Error Object    | Status Code | Content Type |
| --------------- | ----------- | ------------ |
| errors.SDKError | 4xx-5xx     | _/_          |

## postChatbotUpdate

Update Chatbot

### Example Usage

```typescript
import { AthenaCopilot } from "athena-copilot";

const athenaCopilot = new AthenaCopilot({
  security: {
    username: "<YOUR_USERNAME_HERE>",
    password: "<YOUR_PASSWORD_HERE>",
  },
});

async function run() {
  const result = await athenaCopilot.chatbot.postChatbotUpdate({
    name: "Chatbot -1",
    urls: ["https://byteleap.co", "https://anshgoyal.com"],
  });

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter              | Type                                                                                               | Required           | Description                                                                                                                                                                    |
| ---------------------- | -------------------------------------------------------------------------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`              | [operations.PostChatbotUpdateRequestBody](../../models/operations/postchatbotupdaterequestbody.md) | :heavy_check_mark: | The request object to use for the request.                                                                                                                                     |
| `options`              | RequestOptions                                                                                     | :heavy_minus_sign: | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions` | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)            | :heavy_minus_sign: | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |

### Response

**Promise\<[operations.PostChatbotUpdateResponse](../../models/operations/postchatbotupdateresponse.md)\>**

### Errors

| Error Object    | Status Code | Content Type |
| --------------- | ----------- | ------------ |
| errors.SDKError | 4xx-5xx     | _/_          |

## postChatbotDelete

Delete Chatbot

### Example Usage

```typescript
import { AthenaCopilot } from "athena-copilot";

const athenaCopilot = new AthenaCopilot({
  security: {
    username: "<YOUR_USERNAME_HERE>",
    password: "<YOUR_PASSWORD_HERE>",
  },
});

async function run() {
  const result = await athenaCopilot.chatbot.postChatbotDelete(
    "2de69bc3-3f60-46a2-be30-e95c98ab7a87"
  );

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter              | Type                                                                                    | Required           | Description                                                                                                                                                                    | Example         |
| ---------------------- | --------------------------------------------------------------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------- |
| `chatbotId`            | _string_                                                                                | :heavy_minus_sign: | N/A                                                                                                                                                                            | [object Object] |
| `options`              | RequestOptions                                                                          | :heavy_minus_sign: | Used to set various options for making HTTP requests.                                                                                                                          |                 |
| `options.fetchOptions` | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options) | :heavy_minus_sign: | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                 |

### Response

**Promise\<[operations.PostChatbotDeleteResponse](../../models/operations/postchatbotdeleteresponse.md)\>**

### Errors

| Error Object    | Status Code | Content Type |
| --------------- | ----------- | ------------ |
| errors.SDKError | 4xx-5xx     | _/_          |

## postChatbotReset

Reset Token

### Example Usage

```typescript
import { AthenaCopilot } from "athena-copilot";

const athenaCopilot = new AthenaCopilot({
  security: {
    username: "<YOUR_USERNAME_HERE>",
    password: "<YOUR_PASSWORD_HERE>",
  },
});

async function run() {
  const result = await athenaCopilot.chatbot.postChatbotReset(
    "c7af119a-a5c6-47a4-a5fd-fbf96ef08851"
  );

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter              | Type                                                                                    | Required           | Description                                                                                                                                                                    | Example         |
| ---------------------- | --------------------------------------------------------------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------- |
| `chatbotId`            | _string_                                                                                | :heavy_minus_sign: | N/A                                                                                                                                                                            | [object Object] |
| `options`              | RequestOptions                                                                          | :heavy_minus_sign: | Used to set various options for making HTTP requests.                                                                                                                          |                 |
| `options.fetchOptions` | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options) | :heavy_minus_sign: | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                 |

### Response

**Promise\<[operations.PostChatbotResetResponse](../../models/operations/postchatbotresetresponse.md)\>**

### Errors

| Error Object    | Status Code | Content Type |
| --------------- | ----------- | ------------ |
| errors.SDKError | 4xx-5xx     | _/_          |
