import Anthropic from '@anthropic-ai/sdk';
import dotenv from "dotenv";

dotenv.config();

const anthropic = new Anthropic();

const stream = anthropic.messages
  .stream({
    model: "claude-opus-4-8",
    max_tokens: 1024,
    messages: [
      {
        role: "user",
        content: "Say hello there!"
      }
    ]
  })
  .on("text", (text) => {
    console.log(text);
  });

const message = await stream.finalMessage();
console.log(message);