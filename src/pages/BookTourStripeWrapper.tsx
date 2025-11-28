
import { useForm } from "react-hook-form";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY");

type FormData = {
  fullName: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zip: string;
};

function CheckoutForm({ amount }: { amount: number }) {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>();
  const stripe = useStripe();
  const elements = useElements();

  const onSubmit = async (data: FormData) => {
    if (!stripe || !elements) return;

    // 1) Create PaymentIntent via your server
    const resp = await fetch("/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount }), // cents
    });
    const { clientSecret } = await resp.json();

    // 2) Confirm card payment using Stripe Elements
    const cardElement = elements.getElement(CardElement)!;
    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
        billing_details: {
          name: data.fullName,
          email: data.email,
          address: {
            city: data.city,
            country: "US",
            line1: data.address,
            postal_code: data.zip,
            state: data.state
          }
        }
      }
    });

    if (result.error) {
      alert(result.error.message);
    } else if (result.paymentIntent && result.paymentIntent.status === "succeeded") {
      // success — save booking details to your DB (store paymentIntent.id)
      await fetch("/save-booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ booking: data, paymentId: result.paymentIntent.id })
      });
      alert("Payment successful — booking confirmed!");
    }
  };

  return (
   
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Full name</label>
        <input {...register("fullName", { required: true })} className="mt-1 w-full border rounded px-3 py-2" />
        {errors.fullName && <p className="text-red-600 text-sm">Required</p>}
      </div>
      <div>
        <label className="block text-sm font-medium">Email</label>
        <input {...register("email", { required: true })} type="email" className="mt-1 w-full border rounded px-3 py-2" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <input {...register("address", { required: true })} placeholder="Address" className="mt-1 w-full border rounded px-3 py-2" />
        <input {...register("city", { required: true })} placeholder="City" className="mt-1 w-full border rounded px-3 py-2" />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <input {...register("state", { required: true })} placeholder="State" className="mt-1 w-full border rounded px-3 py-2" />
        <input {...register("zip", { required: true })} placeholder="ZIP" className="mt-1 w-full border rounded px-3 py-2" />
      </div>

      <div>
        <label className="block text-sm font-medium">Card details</label>
        <div className="mt-1 p-3 border rounded">
          <CardElement options={{ style: { base: { fontSize: "16px" } } }} />
        </div>
      </div>

      <button disabled={!stripe || isSubmitting} type="submit" className="w-full bg-green-600 text-white py-2 rounded-lg">
        {isSubmitting ? "Processing..." : `Pay $${(amount/100).toFixed(2)}`}
      </button>
    </form>
    
  );
}

export default function BookTourStripeWrapper() {
  // amount in cents (example: $49)
  const amount = 4900;

  return (
    <div className="max-w-2xl mx-auto p-4 mt-20 bg-white rounded-2xl shadow">
      <h2 className="text-2xl font-bold mb-3">Book Tour</h2>
      <Elements stripe={stripePromise}>
        <CheckoutForm amount={amount} />
      </Elements>
    </div>
  );
}
