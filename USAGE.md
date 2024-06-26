<!-- Start SDK Example Usage [usage] -->
```typescript
import { AthenaCopilot } from "@athena-ai/sdk";

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