import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PAGES from '../pages';

const MainRoutes = () => (
  <Routes>
    <Route path="/" element={<Navigate replace to="/home" />} />
    <Route path="/home" element={<PAGES.Home />} />
    <Route path="/details" element={<PAGES.Details />} />
    <Route path="/Payments" element={<PAGES.Payments />} />
  </Routes>
);

export default MainRoutes;
