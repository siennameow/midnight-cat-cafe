import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from './components/nav/Navbar';
import Events from "./pages/Events";
// import Home from "./pages/Home";
import Menu from "./pages/Menu";
// import Register from "./pages/Register";
import Shopping from "./pages/Shopping";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Navbar />
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            {/* <Route path="/register" element={<Register />} /> */}
            <Route path="/shopping" element={<Shopping />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/events" element={<Events />} />
          </Routes>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
