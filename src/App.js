import React from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import CoinDetailPage from "./pages/CoinDetailsPage";
import DashboardPage from "./pages/DashboardPage";
import Header from "./components/Header/Header";
import { WatchListContextProvider } from "./context/WatchlistContext";

export default function App() {
  return (
    <WatchListContextProvider>
      <Router>
        <Header />
        <Route exact path="/" component={DashboardPage} />
        <Route path="/coins/:id" component={CoinDetailPage} />
      </Router>
    </WatchListContextProvider>
  );
}
