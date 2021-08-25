import React, { useState, useEffect } from "react";
import {
    Form,
    Button,
    Row,
    Col,
    InputGroup,
    FormControl,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress, saveUserShippingInfo } from "../actions/cart";
import FormContainer from "../components/formContainer";
import FormComponent from "../components/formComponent";
import CheckoutSteps from "../components/checkoutSteps";
import Loader from "../components/loader";
import { getUserInfo } from "../actions/user";

const ShippingScreen = ({ history }) => {
    // Local states
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [contactNum, setContactNum] = useState("");

    // Get States from Redux
    // authentication redux store
    const userAuth = useSelector((state) => state.userAuth);
    const { userInfo } = userAuth;

    const userDetails = useSelector((state) => state.userDetails);
    const { user, loading } = userDetails;

    const dispatch = useDispatch();

    useEffect(() => {
        if (!userInfo) {
            history.push("/login");
        } else {
            if (!user) {
                dispatch(getUserInfo(userInfo._id));
            } else {
                setName(user.name ? user.name : "d");
                setSurname(user.surname ? user.surname : "d");

                setAddress1(user.address1 ? user.address1 : "");
                setAddress2(user.address2 ? user.address2 : "");
                setCountry(user.country ? user.country : "");
                setCity(user.city ? user.city : "");

                setEmail(user.email ? user.email : "");
                setName(user.name ? user.name : "");
                setSurname(user.surname ? user.surname : "");
                setContactNum(user.contactNum ? user.contactNum : "");
            }
        }
    }, [dispatch, history, userInfo, user]);

    const submitHandler = (e) => {
        e.preventDefault();

        dispatch(
            saveShippingAddress({
                address1,
                address2,
                country,
                city,
            })
        );

        dispatch(
            saveUserShippingInfo({
                name,
                surname,
                email,
                contactNum,
                userId: userInfo._id,
            })
        );
        history.push("/payment");
    };

    return (
        <FormContainer>
            <CheckoutSteps step1 step2 />
            <h1>Shipping</h1>
            {loading ? (
                <Loader />
            ) : (
                <Form onSubmit={submitHandler} autoComplete="on">
                    <Row>
                        <Col md={6}>
                            <FormComponent
                                label="Given Name"
                                type="text"
                                value={name}
                                required={true}
                                placeholder="Enter your given name"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Col>
                        <Col md={6}>
                            <FormComponent
                                label="Surname"
                                type="text"
                                value={surname}
                                required={true}
                                placeholder="Enter your surname"
                                onChange={(e) => setSurname(e.target.value)}
                            />
                        </Col>
                    </Row>
                    <FormComponent
                        label="Email"
                        type="email"
                        value={email}
                        required={true}
                        placeholder="Enter your email address"
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <FormComponent
                        label="Address Line 1"
                        type="text"
                        value={address1}
                        required={true}
                        placeholder="Enter your Flat, Room No., Block No., and Building Name"
                        onChange={(e) => setAddress1(e.target.value)}
                    />
                    <FormComponent
                        label="Address Line 2"
                        type="text"
                        value={address2}
                        required={true}
                        placeholder="Enter the street name and district"
                        onChange={(e) => setAddress2(e.target.value)}
                    />
                    <Form.Group className="py-2">
                        <Form.Label>Country or Region</Form.Label>
                        <Form.Select
                            onChange={(e) => setCountry(e.target.value)}
                            required
                            value={country}
                        >
                            <option value="">Select a Country or Region</option>
                            <option value="Hong Kong">Hong Kong</option>
                            <option value="Japan">Japan</option>
                        </Form.Select>
                    </Form.Group>
                    <FormComponent
                        required={true}
                        label="City"
                        type="text"
                        placeholder={"Enter City"}
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <Form.Group className="py-2">
                        <Form.Label>{"Contact Number"}</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>
                                {country === "Hong Kong" ? "+852" : "+81"}
                            </InputGroup.Text>
                            <FormControl
                                value={contactNum}
                                onChange={(e) => setContactNum(e.target.value)}
                            />
                        </InputGroup>
                    </Form.Group>
                    <div className="py-3">
                        <Button
                            type="submit"
                            variant="primary"
                            disabled={
                                name === "" ||
                                surname === "" ||
                                email === "" ||
                                address1 === "" ||
                                address2 === "" ||
                                contactNum === "" ||
                                country === "" ||
                                city === ""
                            }
                        >
                            Proceed to Payment
                        </Button>
                    </div>
                </Form>
            )}
        </FormContainer>
    );
};

export default ShippingScreen;
