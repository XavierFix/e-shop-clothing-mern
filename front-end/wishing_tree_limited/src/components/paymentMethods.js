import React from "react";
import { Col, Row, Image } from "react-bootstrap";

const PaymentMethods = () => {
    const paymentIcons = [
        "/images/visa.svg",
        "/images/master.svg",
        "/images/paypal.svg",
        "/images/apple_pay.svg",
        "/images/google_pay.svg",
        "/images/alipay.svg",
        "/images/wechat.svg",
        "/images/fps.svg",
    ];

    return (
        <Row className="mt-2">
            {paymentIcons.map((p, i) => {
                return (
                    <Col md={"auto"}>
                        <Image width={35} height={25} src={p} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default PaymentMethods;
