import React, { useEffect } from 'react'
import { Button, Row, Col, ListGroup, Card } from 'react-bootstrap'
import { Image } from 'cloudinary-react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Message from '../components/message'
import CheckoutSteps from '../components/checkoutSteps'
import { addDecimals } from '../Utils/addDecimals'
import { createOrder } from '../actions/order'
import { currencyDecoder } from '../Utils/currencyDecoder'

const PlaceOrderScreen = ({ history }) => {
  // Get states from redux
  // Cart Reducer
  const cart = useSelector((state) => state.cart)
  const { cartItems, shippingAddress, paymentMethod, userShippingInfo } = cart
  const { address1, address2, city, country } = shippingAddress

  // Order Reducer
  const orderCreate = useSelector((state) => state.orderCreate)
  const { order, success, error } = orderCreate

  // Settings
  const settings = useSelector((state) => state.settings)
  const { language, currency } = settings

  cart.itemsPrice = Number(
    addDecimals(
      cart.cartItems.reduce((acc, curr) => curr.price * curr.qty + acc, 0),
    ),
  )

  // EDIT THE SHIPPING ARRANGEMENT
  cart.shippingCost = Number(addDecimals(100))
  cart.tax = Number(addDecimals(40))
  cart.totalPrice = Number(cart.itemsPrice + cart.shippingCost + cart.tax)

  const dispatch = useDispatch()

  useEffect(() => {
    if (!shippingAddress || !userShippingInfo) {
      history.push('/shipping')
    }
    if (success) {
      setTimeout(() => {
        history.push(`/order/${order._id}`)
      }, 1500)
    }
  }, [
    dispatch,
    history,
    cart,
    success,
    shippingAddress,
    userShippingInfo,
    order,
  ])

  // TO: EDIT THE CURRENCY
  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        user: userShippingInfo,
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: paymentMethod,
        shippingCost: cart.shippingCost,
        tax: cart.tax,
        totalPrice: cart.totalPrice,
        itemsPrice: cart.itemsPrice,
        currency: currencyDecoder(currency),
      }),
    )
  }

  return (
    <>
      <CheckoutSteps step1 step2 step3 step4 />
      {error && <Message variant="danger">{error}</Message>}
      {success && (
        <Message variant="success">
          {'Shipping Information checks out! Proceed to payment'}
        </Message>
      )}
      <Row>
        <h1>Order Summary</h1>
        <Col md={9}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Shipping</h2>
              <p>
                <strong>Address:</strong>
                {` ${address1}, ${address2}, ${city}, ${country}`}
              </p>
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Payment Method</h2>
              <strong>Method: </strong>
              {paymentMethod}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Order Items</h2>
              {cartItems.length === 0 ? (
                <Message variant="danger">Your cart is empty</Message>
              ) : (
                <ListGroup variant="flush">
                  {cartItems.map((item, index) => {
                    return (
                      <ListGroup.Item key={index}>
                        <Row>
                          <Col md={1}>
                            <Image
                              cloudName="diqw1axjb"
                              publicId={item.image[0]}
                              alt={item.name}
                              width={50}
                              fluid
                            />
                          </Col>
                          <Col md={2}>
                            <Link
                              to={`/product/${item.productId}`}
                              className="text-primary"
                            >
                              {item.name}
                            </Link>
                          </Col>
                          <Col md={2}>Size: {item.size}</Col>
                          <Col md={2}>Color: {item.color}</Col>
                          <Col md={2}>Price: ${item.price}</Col>
                          <Col md={1}>x{item.qty}</Col>
                          <Col md={2}>= ${item.price * item.qty}</Col>
                        </Row>
                      </ListGroup.Item>
                    )
                  })}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Order Summary</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items</Col>
                  <Col>${cart.itemsPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Shipping</Col>
                  <Col>${cart.shippingCost}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Tax</Col>
                  <Col>${cart.tax}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>${cart.totalPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <span className="d-grid gap-2">
                  <Button
                    type="button"
                    disabled={cartItems.length === 0 || success}
                    onClick={placeOrderHandler}
                  >
                    Proceed to Payment
                  </Button>
                </span>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default PlaceOrderScreen
