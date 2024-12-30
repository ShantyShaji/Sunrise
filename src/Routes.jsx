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
import MaterialDashboard from './components/Admin/Material/MaterialDashboard';
import ViewMaterial from './components/Admin/Material/ViewMaterial';
import MaterialRequest from './components/Admin/Material/MaterialRequest';
import PendingMaterialRequest from './components/Admin/Material/PendingMaterialRequest';
import MaterialConsumption from './components/Admin/Material/MaterialConsumption';
import StoreData from './components/Admin/Material/StoreData';
import UsermanagementDashboard from './components/Admin/UserManagement/UsermanagementDashboard';
import Staffdetails from './components/Admin/UserManagement/Staffdetails';
import Userrights from './components/Admin/UserManagement/Userrights';
import TermsandConditionDashboard from './components/Admin/TermsandConditions/TermsandConditionDashboard';
import GeneralTermsandCondition from './components/Admin/TermsandConditions/GeneralTermsandCondition';
import CompletionandDelivery from './components/Admin/TermsandConditions/CompletionandDelivery';
import Paymentterms from './components/Admin/TermsandConditions/Paymentterms';
import Quotationvalidity from './components/Admin/TermsandConditions/Quotationvalidity';
import Warranty from './components/Admin/TermsandConditions/Warranty';
import ContractDashboard from './components/Admin/Contract/ContractDashboard';
import AddContract from './components/Admin/Contract/AddContract';
import ActiveContract from './components/Admin/Contract/ActiveContract';
import ExpiredContracts from './components/Admin/Contract/ExpiredContracts';
import ExpiringSoon from './components/Admin/Contract/ExpiringSoon';
import ViewRateCard from './components/Admin/Contract/ViewRateCard';

// import AddUser from './components/Admin/UserManagement/AddUser';
// import ViewUsers from './components/Admin/UserManagement/ViewUsers';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/company-management" element={<CompanyManagement />} />
      <Route path="/user-management" element={<UserManagement />} />
      <Route path="/staff/:companyId" element={<ViewStaff />} />
      <Route path="/user-rights" element={<Userrights />} />

      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/client-location" element={<ClientLocation />} />
      <Route path="/clients" element={<ClientTable />} />
      <Route path="/locations" element={<LocationTable />} />

      {/* contract */}

      {/* Material */}

      <Route path="/material-dashboard" element={<MaterialDashboard />} />
      <Route path="/view-material" element={<ViewMaterial />} />
      <Route path="/material-requests" element={<MaterialRequest />} />
      <Route
        path="/pending-material-requests"
        element={<PendingMaterialRequest />}
      />
      <Route path="/material-consumption" element={<MaterialConsumption />} />
      <Route path="/store-data" element={<StoreData />} />

      {/* User-management */}

      <Route
        path="/user-management-dashboard"
        element={<UsermanagementDashboard />}
      />
      <Route path="/staff-details" element={<Staffdetails />} />
      <Route path="/userrights" element={<Userrights />} />

      {/* terms & conditions */}

      <Route
        path="/terms-and-conditions-dashboard"
        element={<TermsandConditionDashboard />}
      />

      <Route path="/general-terms" element={<GeneralTermsandCondition />} />
      <Route path="/completion-delivery" element={<CompletionandDelivery />} />
      <Route path="/payment-terms" element={<Paymentterms />} />
      <Route path="/quotation-validity" element={<Quotationvalidity />} />
      <Route path="/warranty-terms" element={<Warranty />} />

      {/* Contract Management Routes */}
      <Route path="/contract-dashboard" element={<ContractDashboard />} />
      <Route path="/add-contract" element={<AddContract />} />
      <Route path="/active-contracts" element={<ActiveContract />} />
      <Route path="/expired-contracts" element={<ExpiredContracts />} />
      <Route path="/expiring-soon-contracts" element={<ExpiringSoon />} />
      <Route path="/view-ratecard" element={<ViewRateCard />} />
    </Routes>
  );
};

export default AppRoutes;
