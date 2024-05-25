# ChatInteraction


## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `actor`                                                    | *string*                                                   | :heavy_minus_sign:                                         | The actor (USER or AI) of the interaction                  |
| `createdAt`                                                | *string*                                                   | :heavy_minus_sign:                                         | The timestamp when the interaction was created             |
| `dwData`                                                   | [components.DwData](../../models/components/dwdata.md)     | :heavy_minus_sign:                                         | The data related to the data warehouse integration         |
| `id`                                                       | *number*                                                   | :heavy_minus_sign:                                         | The unique identifier of the interaction                   |
| `message`                                                  | *string*                                                   | :heavy_minus_sign:                                         | The message content of the interaction                     |
| `metadata`                                                 | [components.Metadata](../../models/components/metadata.md) | :heavy_minus_sign:                                         | The metadata associated with the interaction               |
| `model`                                                    | *string*                                                   | :heavy_minus_sign:                                         | The name of the model used for the interaction             |
| `reference`                                                | *components.Reference*[]                                   | :heavy_minus_sign:                                         | The list of references associated with the interaction     |
| `threadId`                                                 | *string*                                                   | :heavy_minus_sign:                                         | The ID of the chat thread associated with the interaction  |
| `timestamp`                                                | *string*                                                   | :heavy_minus_sign:                                         | The timestamp when the interaction occurred                |
| `userCredits`                                              | *number*                                                   | :heavy_minus_sign:                                         | The number of credits used by the user for the interaction |