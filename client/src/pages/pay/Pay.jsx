import React, { useEffect, useState } from "react";
import "./Pay.scss";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import newRequest from "../../utils/newRequest";
import { useParams } from "react-router-dom";
import CheckoutForm from "../../components/checkoutForm/CheckoutForm.jsx";

const stripePromise = loadStripe(
    "pk_test_51NhagoI86KdPpjuen51ZCXHF2kydTk0RQVXIY4kf2eYwKw6Wwligy6m9O3hYQS0DcoPHBZsmVaChsvdQrXzDN6DC00Xgki9g5i"
    // "pk_test_51Ngu1gSHDh01lG3mdbURfrt7x3Y8CWmHfhHPAQUVIf7PnD85gLR6SstT3d3tC4CcbopxjmJK4bf7FuWrdLXcAbTe00olyNpoBc"
);

const Pay = () => {
    const [clientSecret, setClientSecret] = useState("");

    const { id } = useParams();

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await newRequest.post(
                    `/orders/create-payment-intent/${id}`
                );
                setClientSecret(res.data.clientSecret);
            } catch (err) {
                console.log(err);
            }
        };
        makeRequest();
    }, []);

    const appearance = {
        theme: 'stripe',
    };
    const options = {
        clientSecret,
        appearance,
    };

    return <div className="pay">
        {clientSecret && (
            <Elements options={options} stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
        )}
    </div>;
};

export default Pay;