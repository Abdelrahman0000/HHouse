
import React, { useState, createContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "./Components";
import { About, ContactUs, Event, Home, RoomDetial, Rooms } from "./Pages";
import Navbar from "./Components/Navbar";

export const LanguageContext = createContext();
export const SetRoomContext = createContext();

export default function App() {
  const [language, setLanguage] = useState("en");
  const [room, setRoom] = useState();

  return (
    <LanguageContext.Provider value={language}>
      <SetRoomContext.Provider value={setRoom}>
        <Router>
          <div>
            <Navbar setLanguage={setLanguage} language={language} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/rooms" element={<Rooms />} />
              <Route path="/room_detail" element={<RoomDetial room={room} />} />
              <Route path="/event" element={<Event />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact_us" element={<ContactUs />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </SetRoomContext.Provider>
    </LanguageContext.Provider>
  );
}