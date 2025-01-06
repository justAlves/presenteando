export async function POST(req: Request){
  console.log('req', req)

  return Response.json({
    status: 200,
    body: {
      message: 'Chamou o Webhook'
    }
  })
}