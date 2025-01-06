import payment from "@/services/mercadopagoClient"

export async function POST(req: Request){
  const params = new URLSearchParams(req.url)

  const id = params.get('data.id')

  const paymentStatus = payment.get({ id: id as string})

  console.log(paymentStatus)


  return Response.json({
    status: 200,
    body: {
      message: 'Chamou o Webhook'
    }
  })
}