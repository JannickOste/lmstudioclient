# lmstudioapi

TypeScript client for the LM Studio REST API.

This package provides a small typed wrapper around common LM Studio model and chat endpoints, including model listing, downloads, loading, unloading, and chat completions.

## Installation

```sh
npm install github:JannickOste/lmstudioclient
```

## Requirements

- LM Studio running locally or on a reachable host.
- The LM Studio local server enabled.
- Node.js with `fetch` support.

By default, the client uses:

```ts
http://localhost:1234
```

You can pass a different base URL when creating the client.

## Quick Start

```ts
import LMStudioClient, {
  DownloadModelResult,
  ModelListResult,
  ModelLoadResult,
  ModelUnloadResult,
  SendMessageResult,
} from "lmstudioapi";

const client: LMStudioClient = new LMStudioClient("http://localhost:1234");
const targetModel: string = "qwen2.5-7b-instruct";

(async () => {
  console.log("Listing out all available models:");
  const modelList: ModelListResult = await client.model.list();
  console.dir(modelList);

  console.log(`Attempting to download model: ${targetModel}`);
  const downloadModel: DownloadModelResult = await client.model.download({
    model: targetModel,
  });
  console.dir(downloadModel);

  console.log(`Attempting to load model ${targetModel}`);
  const loadResult: ModelLoadResult = await client.model.load({
    model: targetModel,
  });
  console.dir(loadResult);

  const messageContent = "What is the capital of France?";
  console.log(`Sending message '${messageContent}'`);
  const message: SendMessageResult = await client.chat.send({
    input: [
      {
        type: "text",
        content: messageContent,
      },
    ],
    model: targetModel,
  });
  console.dir(message);

  const continuationMessageContent = "How many people live there?";
  console.log(
    `Sending message '${continuationMessageContent}' in previous conversation`
  );
  const continuationMessage: SendMessageResult = await client.chat.send({
    input: [
      {
        type: "text",
        content: continuationMessageContent,
      },
    ],
    model: targetModel,
    previous_response_id: message.response_id,
  });
  console.dir(continuationMessage);

  console.dir("Attempting to unload model from memory");
  const unloadResult: ModelUnloadResult = await client.model.unload({
    instance_id: targetModel,
  });
  console.dir(unloadResult);
})();
```

## API

### Client

```ts
const client = new LMStudioClient(baseUrl);
```

`baseUrl` is optional and defaults to `http://localhost:1234`.

### Models

```ts
await client.model.list();
```

Lists available local models.

```ts
await client.model.download({
  model: "qwen2.5-7b-instruct",
});
```

Downloads an LLM or embedding model. The `model` value can be a model catalog identifier or an exact Hugging Face URL. Hugging Face URLs may also include a `quantization` option.

```ts
await client.model.load({
  model: "qwen2.5-7b-instruct",
});
```

Loads a model into memory. Additional load configuration can be supplied through the typed load options.

```ts
await client.model.unload({
  instance_id: "qwen2.5-7b-instruct",
});
```

Unloads a loaded model instance from memory.

### Chat

```ts
await client.chat.send({
  model: "qwen2.5-7b-instruct",
  input: [
    {
      type: "text",
      content: "What is the capital of France?",
    },
  ],
});
```

Sends a chat message to a loaded model.

Common chat options include:

- `system_prompt`
- `temperature`
- `top_p`
- `top_k`
- `min_p`
- `repeat_penalty`
- `max_output_tokens`
- `reasoning`
- `context_length`
- `store`
- `previous_response_id`
- `integrations`
- `stream`

## Exported Types

The package exports the client classes and public request and response types from the package root.

```ts
import LMStudioClient, {
  ChatClient,
  ModelClient,
  DownloadModelOptions,
  DownloadModelResult,
  ModelListResult,
  ModelLoadOptions,
  ModelLoadResult,
  ModelUnloadOptions,
  ModelUnloadResult,
  SendMessageOptions,
  SendMessageResult,
} from "lmstudioapi";
```

Model and chat domain types are also exported, including:

- `LMStudioModel`
- `LLMModel`
- `EmbeddingModel`
- `ModelBase`
- `ModelType`
- `ModelFileFormat`
- `ModelQuantization`
- `ModelReasoningConfig`
- `ReasoningMode`
- `LoadedModelConfig`
- `LoadedModelInstance`
- `ChatInputItem`
- `ChatOutputItem`
- `ChatTextMessage`
- `ChatImageMessage`
- `ToolCallMessage`
- `ReasoningMessage`
- `InvalidToolCallMessage`
- `Integration`
- `MCPIntegration`
- `PluginIntegration`
- `ProviderInfo`
- `MCPProviderInfo`
- `PluginProviderInfo`
- `ResponseStatistics`

## Development

Install dependencies:

```sh
npm install
```

Build the package:

```sh
npm run build
```

The compiled JavaScript and TypeScript declarations are emitted to `dist`.
