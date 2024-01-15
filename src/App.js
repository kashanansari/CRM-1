import { Route, Routes } from 'react-router-dom';
import './App.css';
import EditProfileCSR from './Pages/CSR_Dashboard.jsx/EditProfileCSR';
import Login from './Pages/Login';
import HomeCSR from './Pages/CSR_Dashboard.jsx/HomeCSR';
import CSRLogs from './Pages/CSR_Dashboard.jsx/CSRLogs'
import HomeSuperAdmin from './Pages/SuperAdminDashboard.jsx/HomeSuperAdmin';
import SuperAdminEditProfile from './Pages/SuperAdminDashboard.jsx/SuperAdminEditProfile';
import AllEmployeesSuperAdmin from "./Pages/SuperAdminDashboard.jsx/AllEmployeesSuperAdmin"
import AddEmployessSuperAdmin from './Pages/SuperAdminDashboard.jsx/AddEmployessSuperAdmin';
import VehicleSuperAdmin from './Pages/SuperAdminDashboard.jsx/VehicleSuperAdmin';
import EditEmployeSuperAdmin from './Pages/SuperAdminDashboard.jsx/EditEmployeSuperAdmin';
import AttendenceReportSuperAdmin from './Pages/SuperAdminDashboard.jsx/AttendenceReportSuperAdmin';
import LogSuperAdmin from './Pages/SuperAdminDashboard.jsx/LogSuperAdmin';
import VehicleInformation from './Pages/SuperAdminDashboard.jsx/VehicleInformation';
import DataLogCSR from './Pages/CSR_Dashboard.jsx/DataLogCSR';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login/>}/>

      {/* CSR Routes  */}
      <Route path='/csr' element={<HomeCSR/>}/>
      <Route path="/csr/updateProfile" element={<EditProfileCSR/>}/>
      <Route path="/csr/logs" element={<CSRLogs/>}/>
      <Route path="/csr/dataLogs" element={<DataLogCSR/>}/>

      {/* Super Admin Routes  */}
      <Route path='/superAdmin' element={<HomeSuperAdmin/>}/>
      <Route path="/superAdmin/updateProfile" element={<SuperAdminEditProfile/>}/>
      <Route path="/superAdmin/allEmployees" element={<AllEmployeesSuperAdmin/>}/>
      <Route path='/superAdmin/addEmployee' element={<AddEmployessSuperAdmin/>}/>
      <Route path='/superAdmin/vehiclesInfo' element={<VehicleSuperAdmin/>}/>
      <Route path='/superAdmin/editEmployee' element={<EditEmployeSuperAdmin/>}/>
      <Route path='/superAdmin/logs' element={<LogSuperAdmin/>}/>
      <Route path='/superAdmin/attendence' element={<AttendenceReportSuperAdmin/>}/>
      <Route path='/superAdmin/vehiclesInfo/:id' element={<VehicleInformation/>}/>
    </Routes>
  );
}

export default App;
