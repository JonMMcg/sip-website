import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Index from './pages/Index';
import Contact from './pages/Contact';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import FeaturedGroupsPage from './features/featuredGroups/featuredGroupsPage';
import GroupMemberPage from './features/groupMemberPage/groupMemberPage';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/featured-groups" element={<FeaturedGroupsPage />} />
        <Route path="/yi-ama" element={<GroupMemberPage groupId="smqKyEAq4hZfY1ApzVEH" />} />
        <Route path="/sip-founders" element={<GroupMemberPage groupId="oF7Slg0YEEEtsfyKSkdV" />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
