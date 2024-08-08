import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import CafeDetails from "./pages/CafeDetails";
import CafeList from "./pages/CafeList";
import WriteAReview from "./pages/WriteAReview";
import Header from "./compnents/Header";

export default function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cafe-details" element={<CafeDetails />} />
        <Route path="/cafe-list" element={<CafeList />} />
        <Route path="/write-review" element={<WriteAReview />} />
      </Routes>
    </BrowserRouter>
  );
}
