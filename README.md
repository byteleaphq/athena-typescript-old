# @athena-ai/sdk

## SDK Installation

### NPM

```bash
npm add @athena-ai/sdk
```

### Yarn

```bash
yarn add @athena-ai/sdk
```

<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->

## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](https://github.com/byteleaphq/athena-typescript/blob/main/RUNTIMES.md).

<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->

## SDK Example Usage

### Example

```typescript
import { AthenaCopilot } from "@athena-ai/sdk";

const athenaCopilot = new AthenaCopilot({
  security: {
    username: "<YOUR_USERNAME_HERE>",
    password: "<YOUR_PASSWORD_HERE>",
  },
});

async function run() {
  const result = await athenaCopilot.brain.createNewBrain({
    name: "Test - brain",
  });

  // Handle the result
  console.log(result);
}

run();
```

<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->

## Available Resources and Operations

### [brain](https://github.com/byteleaphq/athena-typescript/blob/main/docs/sdks/brain/README.md)

- [createNewBrain](https://github.com/byteleaphq/athena-typescript/blob/main/docs/sdks/brain/README.md#createnewbrain) - Create Brain
- [getAllBrains](https://github.com/byteleaphq/athena-typescript/blob/main/docs/sdks/brain/README.md#getallbrains) - Get All Brains
- [updateBrain](https://github.com/byteleaphq/athena-typescript/blob/main/docs/sdks/brain/README.md#updatebrain) - Update Brain
- [getBrainById](https://github.com/byteleaphq/athena-typescript/blob/main/docs/sdks/brain/README.md#getbrainbyid) - Get Brain by ID
- [deleteBrain](https://github.com/byteleaphq/athena-typescript/blob/main/docs/sdks/brain/README.md#deletebrain) - Delete Brain

### [document](https://github.com/byteleaphq/athena-typescript/blob/main/docs/sdks/document/README.md)

- [createTextDocument](https://github.com/byteleaphq/athena-typescript/blob/main/docs/sdks/document/README.md#createtextdocument) - Create Text Document
- [createUrlDocument](https://github.com/byteleaphq/athena-typescript/blob/main/docs/sdks/document/README.md#createurldocument) - Create Document by URL
- [downloadDocument](https://github.com/byteleaphq/athena-typescript/blob/main/docs/sdks/document/README.md#downloaddocument) - Download
- [getAllDocuments](https://github.com/byteleaphq/athena-typescript/blob/main/docs/sdks/document/README.md#getalldocuments) - List Documents
- [getDocumentById](https://github.com/byteleaphq/athena-typescript/blob/main/docs/sdks/document/README.md#getdocumentbyid) - Get Document
- [deleteDocument](https://github.com/byteleaphq/athena-typescript/blob/main/docs/sdks/document/README.md#deletedocument) - Delete Document
- [uploadDocument](https://github.com/byteleaphq/athena-typescript/blob/main/docs/sdks/document/README.md#uploaddocument) - Upload Document
- [searchDocuments](https://github.com/byteleaphq/athena-typescript/blob/main/docs/sdks/document/README.md#searchdocuments) - Search documents
- [createDocumentReview](https://github.com/byteleaphq/athena-typescript/blob/main/docs/sdks/document/README.md#createdocumentreview) - Create document review
- [listDocumentReviews](https://github.com/byteleaphq/athena-typescript/blob/main/docs/sdks/document/README.md#listdocumentreviews) - List document reviews

### [chat](https://github.com/byteleaphq/athena-typescript/blob/main/docs/sdks/chat/README.md)

- [createNewChat](https://github.com/byteleaphq/athena-typescript/blob/main/docs/sdks/chat/README.md#createnewchat) - Create New Chat
- [listChats](https://github.com/byteleaphq/athena-typescript/blob/main/docs/sdks/chat/README.md#listchats) - List Chats
- [getChatById](https://github.com/byteleaphq/athena-typescript/blob/main/docs/sdks/chat/README.md#getchatbyid) - Get Chat
- [updateChat](https://github.com/byteleaphq/athena-typescript/blob/main/docs/sdks/chat/README.md#updatechat) - Update Chat
- [deleteChat](https://github.com/byteleaphq/athena-typescript/blob/main/docs/sdks/chat/README.md#deletechat) - Delete Chat
- [createNewChatWithMsg](https://github.com/byteleaphq/athena-typescript/blob/main/docs/sdks/chat/README.md#createnewchatwithmsg) - Create New Chat With Message
- [getResponse](https://github.com/byteleaphq/athena-typescript/blob/main/docs/sdks/chat/README.md#getresponse) - Get Response
- [listInteractions](https://github.com/byteleaphq/athena-typescript/blob/main/docs/sdks/chat/README.md#listinteractions) - List Interactions

### [chatbot](https://github.com/byteleaphq/athena-typescript/blob/main/docs/sdks/chatbot/README.md)

- [postChatbotCreate](https://github.com/byteleaphq/athena-typescript/blob/main/docs/sdks/chatbot/README.md#postchatbotcreate) - Create Chatbot
- [getChatbotList](https://github.com/byteleaphq/athena-typescript/blob/main/docs/sdks/chatbot/README.md#getchatbotlist) - List Chatbots
- [postChatbotGet](https://github.com/byteleaphq/athena-typescript/blob/main/docs/sdks/chatbot/README.md#postchatbotget) - Get Chatbot
- [getChatbotAnalytics](https://github.com/byteleaphq/athena-typescript/blob/main/docs/sdks/chatbot/README.md#getchatbotanalytics) - Get Chatbot analytics
- [getChatbotGetMessages](https://github.com/byteleaphq/athena-typescript/blob/main/docs/sdks/chatbot/README.md#getchatbotgetmessages) - Get Chatbot messages
- [postChatbotUpdate](https://github.com/byteleaphq/athena-typescript/blob/main/docs/sdks/chatbot/README.md#postchatbotupdate) - Update Chatbot
- [postChatbotDelete](https://github.com/byteleaphq/athena-typescript/blob/main/docs/sdks/chatbot/README.md#postchatbotdelete) - Delete Chatbot
- [postChatbotReset](https://github.com/byteleaphq/athena-typescript/blob/main/docs/sdks/chatbot/README.md#postchatbotreset) - Reset Token

### [integration](https://github.com/byteleaphq/athena-typescript/blob/main/docs/sdks/integration/README.md)

- [postIntegrationIntegrationNameConnect](https://github.com/byteleaphq/athena-typescript/blob/main/docs/sdks/integration/README.md#postintegrationintegrationnameconnect) - Connect
- [postIntegrationIntegrationNameDisconnect](https://github.com/byteleaphq/athena-typescript/blob/main/docs/sdks/integration/README.md#postintegrationintegrationnamedisconnect) - Disconnect
- [getIntegrationIntegrationNameList](https://github.com/byteleaphq/athena-typescript/blob/main/docs/sdks/integration/README.md#getintegrationintegrationnamelist) - List
- [postIntegrationIntegrationNameAdd](https://github.com/byteleaphq/athena-typescript/blob/main/docs/sdks/integration/README.md#postintegrationintegrationnameadd) - Add To Brain

### [ogranisation](https://github.com/byteleaphq/athena-typescript/blob/main/docs/sdks/ogranisation/README.md)

- [getOrganisation](https://github.com/byteleaphq/athena-typescript/blob/main/docs/sdks/ogranisation/README.md#getorganisation) - get user org
<!-- End Available Resources and Operations [operations] -->

<!-- Start File uploads [file-upload] -->

## File uploads

Certain SDK methods accept files as part of a multi-part request. It is possible and typically recommended to upload files as a stream rather than reading the entire contents into memory. This avoids excessive memory consumption and potentially crashing with out-of-memory errors when working with very large files. The following example demonstrates how to attach a file stream to a request.

> [!TIP]
>
> Depending on your JavaScript runtime, there are convenient utilities that return a handle to a file without reading the entire contents into memory:
>
> - **Node.js v20+:** Since v20, Node.js comes with a native `openAsBlob` function in [`node:fs`](https://nodejs.org/docs/latest-v20.x/api/fs.html#fsopenasblobpath-options).
> - **Bun:** The native [`Bun.file`](https://bun.sh/docs/api/file-io#reading-files-bun-file) function produces a file handle that can be used for streaming file uploads.
> - **Browsers:** All supported browsers return an instance to a [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) when reading the value from an `<input type="file">` element.
> - **Node.js v18:** A file stream can be created using the `fileFrom` helper from [`fetch-blob/from.js`](https://www.npmjs.com/package/fetch-blob).

```typescript
import { AthenaCopilot } from "@athena-ai/sdk";

const athenaCopilot = new AthenaCopilot({
  security: {
    username: "<YOUR_USERNAME_HERE>",
    password: "<YOUR_PASSWORD_HERE>",
  },
});

async function run() {
  const result = await athenaCopilot.document.uploadDocument("<value>", {});

  // Handle the result
  console.log(result);
}

run();
```

<!-- End File uploads [file-upload] -->

<!-- Start Error Handling [errors] -->

## Error Handling

All SDK methods return a response object or throw an error. If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object                           | Status Code | Content Type     |
| -------------------------------------- | ----------- | ---------------- |
| errors.CreateNewBrainResponseBody      | 401         | application/json |
| errors.CreateNewBrainBrainResponseBody | 500         | application/json |
| errors.SDKError                        | 4xx-5xx     | _/_              |

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging.

```typescript
import { AthenaCopilot } from "@athena-ai/sdk";
import { SDKValidationError } from "@athena-ai/sdk/models/errors";

const athenaCopilot = new AthenaCopilot({
  security: {
    username: "<YOUR_USERNAME_HERE>",
    password: "<YOUR_PASSWORD_HERE>",
  },
});

async function run() {
  let result;
  try {
    result = await athenaCopilot.brain.createNewBrain({
      name: "Test - brain",
    });
  } catch (err) {
    switch (true) {
      case err instanceof SDKValidationError: {
        // Validation errors can be pretty-printed
        console.error(err.pretty());
        // Raw value may also be inspected
        console.error(err.rawValue);
        return;
      }
      case err instanceof errors.CreateNewBrainResponseBody: {
        console.error(err); // handle exception
        return;
      }
      case err instanceof errors.CreateNewBrainBrainResponseBody: {
        console.error(err); // handle exception
        return;
      }
      default: {
        throw err;
      }
    }
  }

  // Handle the result
  console.log(result);
}

run();
```

<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->

## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| #   | Server                             | Variables |
| --- | ---------------------------------- | --------- |
| 0   | `https://backend.athenacopilot.ai` | None      |

```typescript
import { AthenaCopilot } from "@athena-ai/sdk";

const athenaCopilot = new AthenaCopilot({
  serverIdx: 0,
  security: {
    username: "<YOUR_USERNAME_HERE>",
    password: "<YOUR_PASSWORD_HERE>",
  },
});

async function run() {
  const result = await athenaCopilot.brain.createNewBrain({
    name: "Test - brain",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

```typescript
import { AthenaCopilot } from "@athena-ai/sdk";

const athenaCopilot = new AthenaCopilot({
  serverURL: "https://backend.athenacopilot.ai",
  security: {
    username: "<YOUR_USERNAME_HERE>",
    password: "<YOUR_PASSWORD_HERE>",
  },
});

async function run() {
  const result = await athenaCopilot.brain.createNewBrain({
    name: "Test - brain",
  });

  // Handle the result
  console.log(result);
}

run();
```

<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->

## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { AthenaCopilot } from "@athena-ai/sdk";
import { HTTPClient } from "@athena-ai/sdk/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  },
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000),
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new AthenaCopilot({ httpClient });
```

<!-- End Custom HTTP Client [http-client] -->

<!-- Start Authentication [security] -->

## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name       | Type | Scheme     |
| ---------- | ---- | ---------- |
| `password` | http | HTTP Basic |

You can set the security parameters through the `security` optional parameter when initializing the SDK client instance. For example:

```typescript
import { AthenaCopilot } from "@athena-ai/sdk";

const athenaCopilot = new AthenaCopilot({
  security: {
    username: "<YOUR_USERNAME_HERE>",
    password: "<YOUR_PASSWORD_HERE>",
  },
});

async function run() {
  const result = await athenaCopilot.brain.createNewBrain({
    name: "Test - brain",
  });

  // Handle the result
  console.log(result);
}

run();
```

## Retries

Some of the endpoints in this SDK support retries. If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API. However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:

```typescript
import { AthenaCopilot } from "@athena-ai/sdk";

const athenaCopilot = new AthenaCopilot({
  security: {
    username: "<YOUR_USERNAME_HERE>",
    password: "<YOUR_PASSWORD_HERE>",
  },
});

async function run() {
  const result = await athenaCopilot.brain.createNewBrain(
    {
      name: "Test - brain",
    },
    {
      retries: {
        strategy: "backoff",
        backoff: {
          initialInterval: 1,
          maxInterval: 50,
          exponent: 1.1,
          maxElapsedTime: 100,
        },
        retryConnectionErrors: false,
      },
    }
  );

  // Handle the result
  console.log(result);
}

run();
```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:

```typescript
import { AthenaCopilot } from "@athena-ai/sdk";

const athenaCopilot = new AthenaCopilot({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  security: {
    username: "<YOUR_USERNAME_HERE>",
    password: "<YOUR_PASSWORD_HERE>",
  },
});

async function run() {
  const result = await athenaCopilot.brain.createNewBrain({
    name: "Test - brain",
  });

  // Handle the result
  console.log(result);
}

run();
```

<!-- End Retries [retries] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
