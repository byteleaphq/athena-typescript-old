# Chat

(_chat_)

### Available Operations

- [postChat](#postchat) - Create New Chat
- [getChat](#getchat) - List Chats
- [getChatChatId](#getchatchatid) - Get Chat
- [putChatChatId](#putchatchatid) - Update Chat
- [deleteChatChatId](#deletechatchatid) - Delete Chat
- [postChatGetResponse](#postchatgetresponse) - Get Response
- [postChatListInteractions](#postchatlistinteractions) - List Interactions

## postChat

integration - defaults to files (superpowered). supported values - files | data-warehouse

### Example Usage

```typescript
import { AthenaCopilot } from "@athena-ai/sdk";
import { Integration } from "@athena-ai/sdk/models/operations";

const athenaCopilot = new AthenaCopilot({
  security: {
    username: "<YOUR_USERNAME_HERE>",
    password: "<YOUR_PASSWORD_HERE>",
  },
});

async function run() {
  const result = await athenaCopilot.chat.postChat({
    brainId: "{{brain_id}}",
    name: "Test_chat2",
    integration: Integration.Files,
  });

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter              | Type                                                                                    | Required           | Description                                                                                                                                                                    |
| ---------------------- | --------------------------------------------------------------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`              | [operations.PostChatRequestBody](../../models/operations/postchatrequestbody.md)        | :heavy_check_mark: | The request object to use for the request.                                                                                                                                     |
| `options`              | RequestOptions                                                                          | :heavy_minus_sign: | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions` | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options) | :heavy_minus_sign: | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |

### Response

**Promise\<[operations.PostChatResponse](../../models/operations/postchatresponse.md)\>**

### Errors

| Error Object    | Status Code | Content Type |
| --------------- | ----------- | ------------ |
| errors.SDKError | 4xx-5xx     | _/_          |

## getChat

List Chats

### Example Usage

```typescript
import { AthenaCopilot } from "@athena-ai/sdk";

const athenaCopilot = new AthenaCopilot({
  security: {
    username: "<YOUR_USERNAME_HERE>",
    password: "<YOUR_PASSWORD_HERE>",
  },
});

async function run() {
  const result = await athenaCopilot.chat.getChat();

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

**Promise\<[operations.GetChatResponse](../../models/operations/getchatresponse.md)\>**

### Errors

| Error Object    | Status Code | Content Type |
| --------------- | ----------- | ------------ |
| errors.SDKError | 4xx-5xx     | _/_          |

## getChatChatId

Get Chat

### Example Usage

```typescript
import { AthenaCopilot } from "@athena-ai/sdk";

const athenaCopilot = new AthenaCopilot({
  security: {
    username: "<YOUR_USERNAME_HERE>",
    password: "<YOUR_PASSWORD_HERE>",
  },
});

async function run() {
  const result = await athenaCopilot.chat.getChatChatId("{{chat_id}}");

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter              | Type                                                                                    | Required           | Description                                                                                                                                                                    | Example         |
| ---------------------- | --------------------------------------------------------------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------- |
| `chatId`               | _string_                                                                                | :heavy_check_mark: | N/A                                                                                                                                                                            | [object Object] |
| `options`              | RequestOptions                                                                          | :heavy_minus_sign: | Used to set various options for making HTTP requests.                                                                                                                          |                 |
| `options.fetchOptions` | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options) | :heavy_minus_sign: | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                 |

### Response

**Promise\<[operations.GetChatChatIdResponse](../../models/operations/getchatchatidresponse.md)\>**

### Errors

| Error Object    | Status Code | Content Type |
| --------------- | ----------- | ------------ |
| errors.SDKError | 4xx-5xx     | _/_          |

## putChatChatId

Update Chat

### Example Usage

```typescript
import { AthenaCopilot } from "@athena-ai/sdk";

const athenaCopilot = new AthenaCopilot({
  security: {
    username: "<YOUR_USERNAME_HERE>",
    password: "<YOUR_PASSWORD_HERE>",
  },
});

async function run() {
  const result = await athenaCopilot.chat.putChatChatId("{{chat_id}}", {
    temperature: null,
    name: "Test_chat2",
    systemMessage: "test system message",
    additionalProperties: {},
  });

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter              | Type                                                                                       | Required           | Description                                                                                                                                                                    | Example         |
| ---------------------- | ------------------------------------------------------------------------------------------ | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------- |
| `chatId`               | _string_                                                                                   | :heavy_check_mark: | N/A                                                                                                                                                                            | [object Object] |
| `requestBody`          | [operations.PutChatChatIdRequestBody](../../models/operations/putchatchatidrequestbody.md) | :heavy_minus_sign: | N/A                                                                                                                                                                            | [object Object] |
| `options`              | RequestOptions                                                                             | :heavy_minus_sign: | Used to set various options for making HTTP requests.                                                                                                                          |                 |
| `options.fetchOptions` | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)    | :heavy_minus_sign: | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                 |

### Response

**Promise\<[operations.PutChatChatIdResponse](../../models/operations/putchatchatidresponse.md)\>**

### Errors

| Error Object    | Status Code | Content Type |
| --------------- | ----------- | ------------ |
| errors.SDKError | 4xx-5xx     | _/_          |

## deleteChatChatId

Delete Chat

### Example Usage

```typescript
import { AthenaCopilot } from "@athena-ai/sdk";

const athenaCopilot = new AthenaCopilot({
  security: {
    username: "<YOUR_USERNAME_HERE>",
    password: "<YOUR_PASSWORD_HERE>",
  },
});

async function run() {
  const result = await athenaCopilot.chat.deleteChatChatId(
    "8474f310-a2a9-4cf8-b16f-8d01a5a6b5fa"
  );

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter              | Type                                                                                    | Required           | Description                                                                                                                                                                    | Example         |
| ---------------------- | --------------------------------------------------------------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------- |
| `chatId`               | _string_                                                                                | :heavy_check_mark: | N/A                                                                                                                                                                            | [object Object] |
| `options`              | RequestOptions                                                                          | :heavy_minus_sign: | Used to set various options for making HTTP requests.                                                                                                                          |                 |
| `options.fetchOptions` | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options) | :heavy_minus_sign: | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                 |

### Response

**Promise\<[operations.DeleteChatChatIdResponse](../../models/operations/deletechatchatidresponse.md)\>**

### Errors

| Error Object    | Status Code | Content Type |
| --------------- | ----------- | ------------ |
| errors.SDKError | 4xx-5xx     | _/_          |

## postChatGetResponse

Get Response

### Example Usage

```typescript
import { AthenaCopilot } from "@athena-ai/sdk";

const athenaCopilot = new AthenaCopilot({
  security: {
    username: "<YOUR_USERNAME_HERE>",
    password: "<YOUR_PASSWORD_HERE>",
  },
});

async function run() {
  const result = await athenaCopilot.chat.postChatGetResponse({
    chatThreadId: "d504386d-6cba-4e38-96f0-aa16b83e1cd8",
    text: "hi",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter              | Type                                                                                                   | Required           | Description                                                                                                                                                                    |
| ---------------------- | ------------------------------------------------------------------------------------------------------ | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`              | [operations.PostChatGetResponseRequestBody](../../models/operations/postchatgetresponserequestbody.md) | :heavy_check_mark: | The request object to use for the request.                                                                                                                                     |
| `options`              | RequestOptions                                                                                         | :heavy_minus_sign: | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions` | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                | :heavy_minus_sign: | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |

### Response

**Promise\<[operations.PostChatGetResponseResponse](../../models/operations/postchatgetresponseresponse.md)\>**

### Errors

| Error Object    | Status Code | Content Type |
| --------------- | ----------- | ------------ |
| errors.SDKError | 4xx-5xx     | _/_          |

## postChatListInteractions

List Interactions

### Example Usage

```typescript
import { AthenaCopilot } from "@athena-ai/sdk";

const athenaCopilot = new AthenaCopilot({
  security: {
    username: "<YOUR_USERNAME_HERE>",
    password: "<YOUR_PASSWORD_HERE>",
  },
});

async function run() {
  const result = await athenaCopilot.chat.postChatListInteractions({
    chatThreadId: "d504386d-6cba-4e38-96f0-aa16b83e1cd8",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter              | Type                                                                                                             | Required           | Description                                                                                                                                                                    |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`              | [operations.PostChatListInteractionsRequestBody](../../models/operations/postchatlistinteractionsrequestbody.md) | :heavy_check_mark: | The request object to use for the request.                                                                                                                                     |
| `options`              | RequestOptions                                                                                                   | :heavy_minus_sign: | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions` | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                          | :heavy_minus_sign: | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |

### Response

**Promise\<[operations.PostChatListInteractionsResponse](../../models/operations/postchatlistinteractionsresponse.md)\>**

### Errors

| Error Object    | Status Code | Content Type |
| --------------- | ----------- | ------------ |
| errors.SDKError | 4xx-5xx     | _/_          |
