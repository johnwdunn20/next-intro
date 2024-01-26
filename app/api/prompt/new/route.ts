
import { connectToDatabase } from "@utils/database";
import Prompt from "@models/prompt";

// this is a lambda function that will end as soon as it hits a return statement
export const POST = async (req, res) => {
  try {
    const { userId, prompt, tag } = await req.json();
    await connectToDatabase();
    const newPrompt = new Prompt({
      creator: userId,
      prompt,
      tag
    })

    await newPrompt.save();
    return new Response(JSON.stringify(newPrompt), {
      status: 201,
    });

  } catch(e) {
    console.log('Error in prompt/new: ', e);
    return new Response('Failed to create new prompt', {
      status: 500
    })
  }
}