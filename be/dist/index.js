import Anthropic from '@anthropic-ai/sdk';
import dotenv from "dotenv";
dotenv.config();
const client = new Anthropic({});
async function main() {
    const message = await client.messages.create({
        max_tokens: 1024,
        messages: [{ role: "user", content: "Hello, Claude" }],
        model: "claude-opus-4-8"
    });
    console.log(message);
    for (const block of message.content) {
        if (block.type === "text") {
            console.log(block.text);
        }
    }
}
main();
//# sourceMappingURL=index.js.map