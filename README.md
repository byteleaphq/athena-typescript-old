# athena-copilot

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>

## 🏗 **Welcome to your new SDK!** 🏗

It has been generated successfully based on your OpenAPI spec. However, it is not yet ready for production use. Here are some next steps:

- [ ] 🛠 Make your SDK feel handcrafted by [customizing it](https://www.speakeasyapi.dev/docs/customize-sdks)
- [ ] ♻️ Refine your SDK quickly by iterating locally with the [Speakeasy CLI](https://github.com/speakeasy-api/speakeasy)
- [ ] 🎁 Publish your SDK to package managers by [configuring automatic publishing](https://www.speakeasyapi.dev/docs/advanced-setup/publish-sdks)
- [ ] ✨ When ready to productionize, delete this section from the README

<!-- Start SDK Installation [installation] -->

## SDK Installation

### NPM

```bash
npm add <UNSET>
```

### Yarn

```bash
yarn add <UNSET>
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
import { AthenaCopilot } from "athena-copilot";

const athenaCopilot = new AthenaCopilot({
  security: {
    username: "<YOUR_USERNAME_HERE>",
    password: "<YOUR_PASSWORD_HERE>",
  },
});

async function run() {
  const result = await athenaCopilot.brain.postBrain({
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

### [brain](https://github.com/byteleaphq/athena-typescript/tree/main/docs/sdks/brain/README.md)

- [postBrain](https://github.com/byteleaphq/athena-typescript/tree/main/docs/sdks/brain/README.md#postbrain) - Create Brain
- [getBrain](https://github.com/byteleaphq/athena-typescript/tree/main/docs/sdks/brain/README.md#getbrain) - Get All Brains
- [putBrainBrainId](https://github.com/byteleaphq/athena-typescript/tree/main/docs/sdks/brain/README.md#putbrainbrainid) - Update Brain
- [getBrainBrainId](https://github.com/byteleaphq/athena-typescript/tree/main/docs/sdks/brain/README.md#getbrainbrainid) - Get Brain by ID
- [deleteBrainBrainId](https://github.com/byteleaphq/athena-typescript/tree/main/docs/sdks/brain/README.md#deletebrainbrainid) - Delete Brain

### [document](https://github.com/byteleaphq/athena-typescript/tree/main/docs/sdks/document/README.md)

- [postDocumentBrainIdText](https://github.com/byteleaphq/athena-typescript/tree/main/docs/sdks/document/README.md#postdocumentbrainidtext) - Create Text Document
- [postDocumentBrainIdUrl](https://github.com/byteleaphq/athena-typescript/tree/main/docs/sdks/document/README.md#postdocumentbrainidurl) - Create Document by URL
- [getDocumentBrainIdDocumentIdDownload](https://github.com/byteleaphq/athena-typescript/tree/main/docs/sdks/document/README.md#getdocumentbrainiddocumentiddownload) - Download
- [getDocumentBrainId](https://github.com/byteleaphq/athena-typescript/tree/main/docs/sdks/document/README.md#getdocumentbrainid) - List Documents
- [getDocumentBrainIdDocumentId](https://github.com/byteleaphq/athena-typescript/tree/main/docs/sdks/document/README.md#getdocumentbrainiddocumentid) - Get Document
- [deleteDocumentBrainIdDocumentId](https://github.com/byteleaphq/athena-typescript/tree/main/docs/sdks/document/README.md#deletedocumentbrainiddocumentid) - Delete Document
- [postDocumentBrainIdFile](https://github.com/byteleaphq/athena-typescript/tree/main/docs/sdks/document/README.md#postdocumentbrainidfile) - Upload Document

### [chat](https://github.com/byteleaphq/athena-typescript/tree/main/docs/sdks/chat/README.md)

- [postChat](https://github.com/byteleaphq/athena-typescript/tree/main/docs/sdks/chat/README.md#postchat) - Create New Chat
- [getChat](https://github.com/byteleaphq/athena-typescript/tree/main/docs/sdks/chat/README.md#getchat) - List Chats
- [getChatChatId](https://github.com/byteleaphq/athena-typescript/tree/main/docs/sdks/chat/README.md#getchatchatid) - Get Chat
- [putChatChatId](https://github.com/byteleaphq/athena-typescript/tree/main/docs/sdks/chat/README.md#putchatchatid) - Update Chat
- [deleteChatChatId](https://github.com/byteleaphq/athena-typescript/tree/main/docs/sdks/chat/README.md#deletechatchatid) - Delete Chat
- [postChatGetResponse](https://github.com/byteleaphq/athena-typescript/tree/main/docs/sdks/chat/README.md#postchatgetresponse) - Get Response
- [postChatListInteractions](https://github.com/byteleaphq/athena-typescript/tree/main/docs/sdks/chat/README.md#postchatlistinteractions) - List Interactions

### [chatbot](https://github.com/byteleaphq/athena-typescript/tree/main/docs/sdks/chatbot/README.md)

- [postChatbotCreate](https://github.com/byteleaphq/athena-typescript/tree/main/docs/sdks/chatbot/README.md#postchatbotcreate) - Create Chatbot
- [postChatbotList](https://github.com/byteleaphq/athena-typescript/tree/main/docs/sdks/chatbot/README.md#postchatbotlist) - List Chatbots
- [postChatbotGet](https://github.com/byteleaphq/athena-typescript/tree/main/docs/sdks/chatbot/README.md#postchatbotget) - Get Chatbot
- [getChatbotAnalytics](https://github.com/byteleaphq/athena-typescript/tree/main/docs/sdks/chatbot/README.md#getchatbotanalytics) - Get Chatbot analytics
- [getChatbotGetMessages](https://github.com/byteleaphq/athena-typescript/tree/main/docs/sdks/chatbot/README.md#getchatbotgetmessages) - Get Chatbot messages
- [postChatbotUpdate](https://github.com/byteleaphq/athena-typescript/tree/main/docs/sdks/chatbot/README.md#postchatbotupdate) - Update Chatbot
- [postChatbotDelete](https://github.com/byteleaphq/athena-typescript/tree/main/docs/sdks/chatbot/README.md#postchatbotdelete) - Delete Chatbot
- [postChatbotReset](https://github.com/byteleaphq/athena-typescript/tree/main/docs/sdks/chatbot/README.md#postchatbotreset) - Reset Token

### [integration](https://github.com/byteleaphq/athena-typescript/tree/main/docs/sdks/integration/README.md)

- [getIntegrationIntegrationNameConnect](https://github.com/byteleaphq/athena-typescript/tree/main/docs/sdks/integration/README.md#getintegrationintegrationnameconnect) - Connect
- [getIntegrationIntegrationNameDisconnect](https://github.com/byteleaphq/athena-typescript/tree/main/docs/sdks/integration/README.md#getintegrationintegrationnamedisconnect) - Disconnect
- [getIntegrationIntegrationNameList](https://github.com/byteleaphq/athena-typescript/tree/main/docs/sdks/integration/README.md#getintegrationintegrationnamelist) - List
- [postIntegrationIntegrationNameAdd](https://github.com/byteleaphq/athena-typescript/tree/main/docs/sdks/integration/README.md#postintegrationintegrationnameadd) - Add To Brain

### [ogranisation](https://github.com/byteleaphq/athena-typescript/tree/main/docs/sdks/ogranisation/README.md)

- [getOrganisation](https://github.com/byteleaphq/athena-typescript/tree/main/docs/sdks/ogranisation/README.md#getorganisation) - get user org
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
import { AthenaCopilot } from "athena-copilot";

const athenaCopilot = new AthenaCopilot({
  security: {
    username: "<YOUR_USERNAME_HERE>",
    password: "<YOUR_PASSWORD_HERE>",
  },
});

async function run() {
  const result = await athenaCopilot.document.postDocumentBrainIdFile(
    "{{brain_id}}",
    {}
  );

  // Handle the result
  console.log(result);
}

run();
```

<!-- End File uploads [file-upload] -->

<!-- Start Error Handling [errors] -->

## Error Handling

All SDK methods return a response object or throw an error. If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object                      | Status Code | Content Type     |
| --------------------------------- | ----------- | ---------------- |
| errors.PostBrainResponseBody      | 401         | application/json |
| errors.PostBrainBrainResponseBody | 500         | application/json |
| errors.SDKError                   | 4xx-5xx     | _/_              |

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging.

```typescript
import { AthenaCopilot } from "athena-copilot";
import * as errors from "athena-copilot/models/errors";

const athenaCopilot = new AthenaCopilot({
  security: {
    username: "<YOUR_USERNAME_HERE>",
    password: "<YOUR_PASSWORD_HERE>",
  },
});

async function run() {
  let result;
  try {
    result = await athenaCopilot.brain.postBrain({
      name: "Test - brain",
    });
  } catch (err) {
    switch (true) {
      case err instanceof errors.SDKValidationError: {
        // Validation errors can be pretty-printed
        console.error(err.pretty());
        // Raw value may also be inspected
        console.error(err.rawValue);
        return;
      }
      case err instanceof errors.PostBrainResponseBody: {
        console.error(err); // handle exception
        return;
      }
      case err instanceof errors.PostBrainBrainResponseBody: {
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
import { AthenaCopilot } from "athena-copilot";

const athenaCopilot = new AthenaCopilot({
  serverIdx: 0,
  security: {
    username: "<YOUR_USERNAME_HERE>",
    password: "<YOUR_PASSWORD_HERE>",
  },
});

async function run() {
  const result = await athenaCopilot.brain.postBrain({
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
import { AthenaCopilot } from "athena-copilot";

const athenaCopilot = new AthenaCopilot({
  serverURL: "https://backend.athenacopilot.ai",
  security: {
    username: "<YOUR_USERNAME_HERE>",
    password: "<YOUR_PASSWORD_HERE>",
  },
});

async function run() {
  const result = await athenaCopilot.brain.postBrain({
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
import { AthenaCopilot } from "athena-copilot";
import { HTTPClient } from "athena-copilot/lib/http";

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
import { AthenaCopilot } from "athena-copilot";

const athenaCopilot = new AthenaCopilot({
  security: {
    username: "<YOUR_USERNAME_HERE>",
    password: "<YOUR_PASSWORD_HERE>",
  },
});

async function run() {
  const result = await athenaCopilot.brain.postBrain({
    name: "Test - brain",
  });

  // Handle the result
  console.log(result);
}

run();
```

<!-- End Authentication [security] -->

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
