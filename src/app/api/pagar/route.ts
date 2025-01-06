import payment from "@/services/mercadopagoClient";

export async function POST() {
  const paymentResponse = await payment.create({
    body: {
      transaction_amount: 20.00,
      description: 'Pagamento de pagina basica',
      payment_method_id: 'visa',
      payer: {
        email: 'iamalves.jpg@gmail.com'
      },
      metadata: {

      }
    }
  })

  return Response.json({
    status: 200,
    body: paymentResponse
  })
}