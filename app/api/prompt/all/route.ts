
import { connectToDatabase } from "@utils/database";
import Prompt from "@models/prompt";

// this is a lambda function that will end as soon as it hits a return statement
export const GET = async () => {
  try {
    await connectToDatabase();
    const prompts = await Prompt.find({});
    return new Response(JSON.stringify(prompts), {
      status: 201,
    });

  } catch(e) {
    console.log('Error in prompt/all: ', e);
    return new Response('Failed to get prompts', {
      status: 500
    })
  }
}