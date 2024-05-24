# PostChatRequestBody


## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `brainId`                                                        | *string*                                                         | :heavy_check_mark:                                               | The ID of the brain to associate with the chat                   |                                                                  |
| `name`                                                           | *string*                                                         | :heavy_check_mark:                                               | The name of the chat                                             | Test_chat2                                                       |
| `integration`                                                    | [operations.Integration](../../models/operations/integration.md) | :heavy_minus_sign:                                               | The integration to use for the chat                              | files                                                            |