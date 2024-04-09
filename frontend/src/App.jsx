import { useState } from 'react'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ProductsPage from './pages/Products';
import UseCasesPage from './pages/UseCases';
import ResourcesPage from './pages/Resources';
import PricingPage from './pages/Pricing';
import AboutUsPage from './pages/AboutUs';
import SignInPage from './pages/SignIn';
import SignUpPage from './pages/SignUp';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/usecases" element={<UseCasesPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Router>
    </>
  )
}

export const userStateAtom = atom({
  key: "userNameKey",
  default: "",
});

export default App
