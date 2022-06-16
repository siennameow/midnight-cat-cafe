import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ReactAudioPlayer from 'react-audio-player';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/nav/Navbar";
import Events from "./pages/Events";
import Event from "./pages/Event";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Shopping from "./pages/Shopping";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer/footer";
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
            <Route path="/" element={<Home />} />
            <Route path="/shopping" element={<Shopping />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:title" element={<Event />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
          <center><ReactAudioPlayer
          src="https://sharefs.ali.kugou.com/202206170138/ef092363528463ab26c0a7cff9d1a388/KGTX/CLTX001/4e5569c305e7dbe0e42f9bfed6b7e000.mp3"
          autoPlay
          controls
            /></center>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
