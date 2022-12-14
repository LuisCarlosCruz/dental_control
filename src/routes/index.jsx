import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PAGES from '../pages';

const MainRoutes = () => (
  <Routes>
    <Route path="/" element={<Navigate replace to="/home" />} />
    <Route path="/home" element={<PAGES.Home />} />
    <Route path="/filter" element={<PAGES.Filter />} />
    <Route path="/procedures" element={<PAGES.Procedures />} />
  </Routes>
);

export default MainRoutes;
