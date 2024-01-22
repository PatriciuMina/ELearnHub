var name = "";
var email = "";
var product_id = "";
var amount = 0.0;

window.onload = function () {

    name = document.getElementById('name').value;
    email =  document.getElementById('email').value;
    product_id = document.getElementById('stripe_id').value;
    amount = document.getElementById('total_price').value;

    paypal.Buttons({

        style: {
            color: "blue",
            shape: "pill",
        },

        // Sets up the transaction when a payment button is clicked
        createOrder: (data, actions) => {


            return actions.order.create({
                purchase_units: [{
                    amount: {
                        value: amount // Can also reference a variable or function
                    }
                }]
            });
        },
        // Finalize the transaction after payer approval
        onApprove: (data, actions) => {
            return actions.order.capture().then(async function (orderData) {
                // Successful capture! For dev/demo purposes:
                console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));
                const transaction = orderData.purchase_units[0].payments.captures[0];
                //{method: 'POST'}, {body : ordered_items});
                //alert(`Transaction ${transaction.status}: ${transaction.id}\n\nSee console for all available details`);
                // When ready to go live, remove the alert and show a success message within this page. For example:
                // const element = document.getElementById('paypal-button-container');
                // element.innerHTML = '<h3>Thank you for your payment!</h3>';
                // Or go to another URL:  actions.redirect('thank_you.html');
                await fetch('/checkout/success_pay_pal_order/',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            name: name,
                            email: email,
                            product_id: product_id,
                            amount: amount
                        })
                    });

                alert("You will be redirected after the transaction will be processed.");
                setTimeout(redirect, 3000);

                function redirect() {
                    actions.redirect('http://ubb.lms.com:3000/shop?page=1');
                }


            });
        },

        onCancel: (data) => {
            window.location.replace("http://ubb.lms.com:3000/");
        }
    }).render("#paypal-button-container");
};