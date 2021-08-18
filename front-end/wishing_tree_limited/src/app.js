import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/header'
import Footer from './components/footer'
import HomeScreen from './screens/homeScreen'
import ProductScreen from './screens/ProductScreen/productScreen'
import LoginScreen from './screens/loginScreen'
import CartScreen from './screens/cartScreen'
import RegisterScreen from './screens/registerScreen'
import ProfileScreen from './screens/profileScreen'
import './index.css'

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/login" exact component={LoginScreen} />
          <Route path="/register" exact component={RegisterScreen} />
          <Route path="/profile">
            <ProfileScreen />
          </Route>
          <Route path="/product/:id" exact component={ProductScreen} />
          <Route path="/cart/:id?" exact component={CartScreen} />
          <Route path="/" exact component={HomeScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
