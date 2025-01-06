import { MercadoPagoConfig, Payment } from 'mercadopago';

const client = new MercadoPagoConfig({
  accessToken: process.env.NEXT_PUBLIC_MERCADOPAGO_ACCESS_TOKEN as string,
  options: {
    timeout: 10000,
    idempotencyKey: 'idempotencyKey',
  }
});

const payment = new Payment(client);

export default payment;