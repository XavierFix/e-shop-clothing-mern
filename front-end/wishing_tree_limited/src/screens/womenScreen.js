import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWomenProduct } from "../actions/product";
import { Row, Col } from "react-bootstrap";
import Loader from "../components/loader";
import Message from "../components/message";
import Product from "../components/product";
import FilterComponent from "../components/filterComponent";

const WomenScreen = () => {
    const womenProduct = useSelector((state) => state.womenProduct);
    const { loading, products, error } = womenProduct;

    const settings = useSelector((state) => state.settings);
    const { language, currency } = settings;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getWomenProduct());
    }, [dispatch]);

    return (
        <>
            <h1>All Womens products</h1>
            {products ? (
                <Row>
                    {/* Insert filter function */}
                    <FilterComponent />
                    {products.map((product, i) => {
                        return (
                            <Col key={i} sm={12} md={6} lg={4} xl={3}>
                                <Product
                                    menu="women"
                                    product={product}
                                    lang={language}
                                    currency={currency}
                                />
                            </Col>
                        );
                    })}
                </Row>
            ) : loading ? (
                <Loader />
            ) : error ? (
                <Message variant="danger">{error}</Message>
            ) : null}
        </>
    );
};

export default WomenScreen;
