
import React, { useState, createContext} from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "./Components";
import { About, Booking, ContactUs, Event, Gallery, Home, Payment, Privacy, RoomDetial, Rooms } from "./Pages";
import Navbar from "./Components/Navbar";
import { QueryClient, QueryClientProvider } from "react-query";

export const LanguageContext = createContext();


const queryClient = new QueryClient();

export default function App() {
  const [language, setLanguage] = useState("en");

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageContext.Provider value={language}>
       
          <Router>
            <div className={` ${language ==='en'? 'enFont' : 'arFont'}`} >
              <Navbar setLanguage={setLanguage} language={language} />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/rooms" element={<Rooms />} />
                <Route path="/rooms/:roomName" element={<RoomDetial />} />
                <Route path="/event" element={<Event />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact_us" element={<ContactUs />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/gallery" element={<Gallery />} />
              </Routes>
              <Footer />
            </div>
          </Router>
      
      </LanguageContext.Provider>
    </QueryClientProvider>
  );
}