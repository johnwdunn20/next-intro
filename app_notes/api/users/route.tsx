// route is a special file name that allows us to create a dynamic route

// Next.js suppports the below http methods:
// GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS

// to create a route:
// this route can be called at /api/users
export async function GET(request: Request) {
  // return a response object
  return new Response(JSON.stringify({ message: 'Hello world' }))
}