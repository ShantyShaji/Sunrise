// Routes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './login/login';
import Dashboard from './pages/Dashboard';
import CompanyManagement from './components/CompanyManagement';
import UserManagement from './components/UserManagement';
import ViewStaff from './components/ViewStaff';
import UserRights from './components/UserRights';
import AdminDashboard from './pages/AdminDashboard';
import ClientLocation from './components/ClientLocation';
import ClientTable from './components/ClientTable';
import LocationTable from './components/LocationTable';
import Contract from './components/contract';
import AddContract from './components/AddContract';
import ActiveContractTable from './components/ActiveContractTable';
import ExpiredContractTable from './components/ExpiredContractTable';
import ExpiredSoonContractTable from './components/ExpiredSoonContractTable';
import RateCardTable from './components/RateCardTable';
import MaterialDashboard from './components/Admin/Material/MaterialDashboard';
import ViewMaterial from './components/Admin/Material/ViewMaterial';
import MaterialRequest from './components/Admin/Material/MaterialRequest';
import PendingMaterialRequest from './components/Admin/Material/PendingMaterialRequest';
import MaterialConsumption from './components/Admin/Material/MaterialConsumption';
import StoreData from './components/Admin/Material/StoreData';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/company-management" element={<CompanyManagement />} />
      <Route path="/user-management" element={<UserManagement />} />
      <Route path="/staff/:companyId" element={<ViewStaff />} />
      <Route path="/user-rights" element={<UserRights />} />

      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/client-location" element={<ClientLocation />} />
      <Route path="/clients" element={<ClientTable />} />
      <Route path="/locations" element={<LocationTable />} />
      <Route path="/contract" element={<Contract />} />
      <Route path="/add-contract" element={<AddContract />} />
      <Route path="/active-contracts" element={<ActiveContractTable />} />
      <Route path="/expired-contracts" element={<ExpiredContractTable />} />
      <Route
        path="/expiredsoon-contracts"
        element={<ExpiredSoonContractTable />}
      />
      <Route path="/ratecardtable" element={<RateCardTable />} />

      <Route path="/material-dashboard" element={<MaterialDashboard />} />
      <Route path="/view-material" element={<ViewMaterial />} />
      <Route path="/material-requests" element={<MaterialRequest />} />
      <Route
        path="/pending-material-requests"
        element={<PendingMaterialRequest />}
      />
      <Route path="/material-consumption" element={<MaterialConsumption />} />
      <Route path="/store-data" element={<StoreData />} />
    </Routes>
  );
};

export default AppRoutes;
