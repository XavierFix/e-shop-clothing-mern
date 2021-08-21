import React, { useState, useEffect } from 'react'
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Message from '../components/message'
import Loader from '../components/loader'
import { getOrderDetails } from '../actions/order'
import { addDecimals } from '../Utils/addDecimals'

const OrderScreen = ({ history, match }) => {
  const orderId = match.params.id

  // Get states from redux
  // Order Reducer
  const orderDetails = useSelector((state) => state.orderDetails)
  const { order, loading, error } = orderDetails

  const dispatch = useDispatch()

  useEffect(() => {
    if (!order || order._id !== orderId) {
      dispatch(getOrderDetails(orderId))
    }
    if (!orderId) {
      history.push('/place-order')
    }
  }, [dispatch, order, orderId])

  const placeOrderHandler = () => {
    console.log('to pay')
  }

  return order ? (
    <>
      <h1>Order Number: #{order._id}</h1>
      <Row>
        <Col md={9}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Shipping Information</h2>
              <p>
                <strong>Name:</strong>
                {` ${order.user.name} ${order.user.surname}`}
              </p>
              <p>
                <strong>Email address:</strong>
                <a
                  href={`mailto:${order.user.email}`}
                >{` ${order.user.email}`}</a>
              </p>
              <p>
                <strong>Address:</strong>
                {` ${order.shippingAddress.address1}, ${order.shippingAddress.address2}, ${order.shippingAddress.city}, ${order.shippingAddress.country}`}
              </p>
              {order.isDelivered ? (
                <Message variant="success">{`Paid on ${order.isDelivered}`}</Message>
              ) : (
                <Message variant="danger">Not delieverd</Message>
              )}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Payment Method</h2>
              <p>
                <strong>Method: </strong>
                {order.paymentMethod}
              </p>
              {order.isPaid ? (
                <Message variant="success">{`Paid on ${order.paidAt}`}</Message>
              ) : (
                <Message variant="danger">Not paid</Message>
              )}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Order Items</h2>
              {order.orderItems.length === 0 ? (
                <Message variant="danger">Your order seems to be empty</Message>
              ) : (
                <ListGroup variant="flush">
                  {order.orderItems.map((item, index) => {
                    return (
                      <ListGroup.Item key={index}>
                        <Row>
                          <Col md={1}>
                            <Image
                              src={item.image}
                              alt={item.name}
                              fluid
                              rounded
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
                  <Col>${addDecimals(order.itemsPrice)}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Shipping</Col>
                  <Col>${addDecimals(order.shippingCost)}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Tax</Col>
                  <Col>${addDecimals(order.tax)}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>${addDecimals(order.totalPrice)}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <span className="d-grid gap-2">
                  <Button
                    type="button"
                    disabled={order.orderItems.length === 0}
                    onClick={placeOrderHandler}
                  >
                    Pay
                  </Button>
                </span>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  ) : loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <></>
  )
}

export default OrderScreen
