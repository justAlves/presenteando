export async function GET(){

  return Response.json({
    status: 200,
    data: {
      message: 'Hello World'
    }
  })
}