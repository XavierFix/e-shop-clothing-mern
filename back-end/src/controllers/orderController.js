<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const { Order } = require("../models/orders");
const { User } = require("../models/user");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
=======
const { Order } = require('../models/orders')
const { User } = require('../models/user')
>>>>>>> 23f74ae (refactored product edit and create screen)

module.exports = {
  async addOrderItems(req, res) {
    const { cart } = req.body
    const {
      user,
      orderItems,
      shippingAddress,
      paymentMethod,
      shippingCost,
      tax,
      totalPrice,
      itemsPrice,
    } = cart

    try {
      if (!orderItems && orderItems.length === 0) {
        throw new Error('No order items')
      }
      if (
        !user ||
        !user.email ||
        !user.contactNum ||
        !user.name ||
        !user.surname
      ) {
        throw new Error('User Information is incomplete')
      }

      if (!shippingAddress) {
        throw new Error('Shipping address is required')
      }

      if (
        !paymentMethod ||
        !shippingCost ||
        !tax ||
        !totalPrice ||
        !itemsPrice
      ) {
        throw new Error(
          'Some shipping information such as payment methods, shipping fees are missing',
        )
      }

      const order = new Order(cart)

      const createdOrder = await Order.create(order)

      // Now add the order to user
      const foundUser = await User.findById(user.userId)
      foundUser.orders = foundUser.orders.concat(createdOrder._id)

      await foundUser.save()

<<<<<<< HEAD
            // send the created orders
            res.status(201).send(createdOrder);
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    },
    async getOrder(req, res) {
        console.log("get order");
        const orderId = req.params.id;
        try {
            const order = await Order.findById(orderId);
            res.send(order);
        } catch (error) {
            res.status(404).send({ message: error.message });
        }
    },
    // update order to paid
    async updateOrderToPaid(req, res) {
        const orderId = req.params.id;
        try {
            const order = await Order.findById(orderId);
            order.isPaid = true;
            order.paidAt = Date.now();
            // from paypal
            order.paymentResult = {
                id: req.body.id,
                status: req.body.status,
                update_time: req.body.update_time,
                email_address: req.body.pair.email_address,
            };
            const updatedOrder = await order.save();
            res.send(updatedOrder);
        } catch (error) {
            res.status(404).send({ message: error.message });
        }
    },
    // Checkout session with Stripe
    async createCheckOutSessionWithStripe(req, res) {
        const { line_items, email, payment_method_types, tax, shippingCost } =
            req.body;
        const orderId = req.params.id;
        //console.log(process.env.WEB_APP_URL);
        // add Shipping
        line_items.push({
            price_data: {
                currency: "hkd",
                product_data: {
                    name: "Shipping Fee",
                    description: "standard shipping",
                },
                unit_amount: shippingCost * 100,
            },
            quantity: 1,
        });

        // add tax
        line_items.push({
            price_data: {
                currency: "hkd",
                product_data: {
                    name: "Tax",
                    description: "Tax",
                },
                unit_amount: tax * 100,
            },
            quantity: 1,
        });

        let session;

        try {
            if (!email || !payment_method_types) {
                throw new Error("Email or payment method is required");
            }
            if (!shippingCost) {
                throw new Error("Shipping cost is missing");
            }
            session = await stripe.checkout.sessions.create({
                line_items: line_items,
                customer_email: email,
                payment_method_types,
                payment_method_options: {
                    wechat_pay: {
                        client: "web",
                    },
                },

                // for guest checkout
                // shipping_rates: [process.env.STRIPE_SHIPPING_RATE_ID],
                // shipping_address_collection: {
                //   allowed_countries: ['HK', 'JP'],
                // },
                client_reference_id: orderId,
                mode: "payment",
                success_url: `${process.env.WEB_APP_URL}/order/${orderId}/success?session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${process.env.WEB_APP_URL}/order/${orderId}`,
            });
            console.log("here");

            if (!session) {
                console.log("error");
                throw new Error();
            }

            res.status(200).send(session.id);
        } catch (error) {
            res.status(400).send({
                message:
                    "An error occured, unable to create a checkout session",
            });
        }
    },
    async webhookStripe(req, res) {
        const event = req.body;
        switch (event.type) {
            case "checkout.session.completed":
                const checkoutSession = event.data.object;
                // Update the order
                console.log(checkoutSession);
                const {
                    id,
                    client_reference_id, // orderId
                    customer_email,
                    payment_status,
                } = checkoutSession;

                try {
                    const updateOrder = await Order.findById(
                        client_reference_id
                    );

                    // update order info
                    updateOrder.paymentResult = {
                        id: id,
                        status: payment_status,
                        update_time: Date.now(),
                        email_address: customer_email,
                        provider: "Stripe",
                    };

                    updateOrder.isPaid = true
                        ? payment_status === "paid"
                        : false;

                    updateOrder.paidAt = Date.now();
                    await updateOrder.save();

                    console.log(updateOrder.user.userId);

                    const updateUser = await User.findById(
                        updateOrder.user.userId
                    );
                    updateUser.orderHistory.push(client_reference_id);
                    await updateUser.save();

                    // Future email support
                } catch (error) {
                    res.send({ message: error.message });
                }

                console.log("Checkout session was successful");
                break;
            default:
                console.log(`Unhandled event type ${event.type}`);
        }
        res.json({ received: true });
    },
};
=======
const { Order } = require('../models/orders')
const { User } = require('../models/user')
=======
const { Order } = require("../models/orders");
const { User } = require("../models/user");
>>>>>>> 83e089f (added order list for admin, refactored search component and header  and added reducers, need to finish the filter function)

module.exports = {
    async addOrderItems(req, res) {
        const { cart } = req.body;
        const {
            user,
            orderItems,
            shippingAddress,
            paymentMethod,
            shippingCost,
            tax,
            totalPrice,
            itemsPrice,
        } = cart;

        try {
            if (!orderItems && orderItems.length === 0) {
                throw new Error("No order items");
            }
            if (
                !user ||
                !user.email ||
                !user.contactNum ||
                !user.name ||
                !user.surname
            ) {
                throw new Error("User Information is incomplete");
            }

            if (!shippingAddress) {
                throw new Error("Shipping address is required");
            }

            if (
                !paymentMethod ||
                !shippingCost ||
                !tax ||
                !totalPrice ||
                !itemsPrice
            ) {
                throw new Error(
                    "Some shipping information such as payment methods, shipping fees are missing"
                );
            }

            const order = new Order(cart);

            const createdOrder = await Order.create(order);

            // Now add the order to user
            const foundUser = await User.findById(user.userId);
            foundUser.orders = foundUser.orders.concat(createdOrder._id);

            await foundUser.save();

<<<<<<< HEAD
=======
>>>>>>> 23f74ae (refactored product edit and create screen)
      // send the created orders
      res.status(201).send(createdOrder)
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
  },
  async getOrder(req, res) {
    const orderId = req.params.id
    try {
      const order = await Order.findById(orderId)
      res.send(order)
    } catch (error) {
      res.status(404).send({ message: error.message })
    }
  },
<<<<<<< HEAD
  
}
>>>>>>> 095a905 (added paypal support and refactor the backend and frontend)
=======

  async deleteOrder(req, res) {
    const orderId = req.params.id
    try {
      const order = await Order.findById(orderId)
      await order.remove()
      res.status(200).send('Successfully deleted order')
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
  },
  async getAllOrders(req, res) {
    try {
      const orders = await Orders.find({}).sort({ createdAt: -1 }).limit(8)
      res.status(200).send(orders)
    } catch (error) {
      res.status(404).send({ message: error.message })
    }
  },
}
>>>>>>> 23f74ae (refactored product edit and create screen)
=======
            // send the created orders
            res.status(201).send(createdOrder);
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    },
    async getOrder(req, res) {
        const orderId = req.params.id;
        try {
            const order = await Order.findById(orderId);
            res.send(order);
        } catch (error) {
            res.status(404).send({ message: error.message });
        }
    },

    async deleteOrder(req, res) {
        const orderId = req.params.id;
        try {
            const order = await Order.findById(orderId);

            const user = await User.findById(order.user.userId);

            const orders = user.orders.filter(
                (item) => item.toString() !== orderId
            );

            user.orders = orders;
            await user.save();

            await order.remove();
            res.status(200).send("Successfully deleted order");
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    },
    async getAllOrders(req, res) {
        try {
            const orders = await Order.find({})
                .populate("user", "id name")
                .sort({ createdAt: -1 })
                .limit(12);
            res.status(200).send(orders);
        } catch (error) {
            res.status(404).send({ message: error.message });
        }
    },
    async updateOrderToDelivered(req, res) {
        const orderId = req.params.id;
        try {
            const order = await Order.findById(orderId);
            if (order.isDelivered === true) {
                order.isDelivered = false;
                order.deliveredAt = null;
            } else {
                order.isDelivered = true;
                order.deliveredAt = Date.now();
            }
            const updatedOrder = await order.save();
            res.send(updatedOrder);
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    },
};
>>>>>>> 83e089f (added order list for admin, refactored search component and header  and added reducers, need to finish the filter function)
