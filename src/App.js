import { Route, Routes } from 'react-router-dom';
import './App.css';
import EditProfileCSR from './Pages/CSR_Dashboard.jsx/EditProfileCSR';
import Login from './Pages/Login';
import HomeCSR from './Pages/CSR_Dashboard.jsx/HomeCSR'
import HomeSuperAdmin from './Pages/SuperAdminDashboard/HomeSuperAdmin';
import SuperAdminEditProfile from './Pages/SuperAdminDashboard/SuperAdminEditProfile';
import AllEmployeesSuperAdmin from "./Pages/SuperAdminDashboard/AllEmployeesSuperAdmin"
import AddEmployessSuperAdmin from './Pages/SuperAdminDashboard/AddEmployessSuperAdmin';
import VehicleSuperAdmin from './Pages/SuperAdminDashboard/VehicleSuperAdmin';
import EditEmployeSuperAdmin from './Pages/SuperAdminDashboard/EditEmployeSuperAdmin';
import AttendenceReportSuperAdmin from './Pages/SuperAdminDashboard/AttendenceReportSuperAdmin';
import LogSuperAdmin from './Pages/SuperAdminDashboard/LogSuperAdmin';
import VehicleInformation from './Pages/SuperAdminDashboard/VehicleInformation';
import DataLogCSR from './Pages/CSR_Dashboard.jsx/DataLogCSR';
import TechHome from './Pages/TechnicalDashboard.jsx/TechHome';
import AllUserTech from './Pages/TechnicalDashboard.jsx/AllUserTech'
import DataLogTech from './Pages/TechnicalDashboard.jsx/DataLogTech';
import AddUserTech from './Pages/TechnicalDashboard.jsx/AddUserTech';
import ComplainLogTech from './Pages/TechnicalDashboard.jsx/ComplainLogTech';
import FormTech from './Pages/TechnicalDashboard.jsx/FromTech';
import UpdateProfileTech from './Pages/TechnicalDashboard.jsx/UpdateProfileTech'
import DevicesTech from './Pages/TechnicalDashboard.jsx/DevicesTech';
import InventroyListTech from './Pages/TechnicalDashboard.jsx/InventoryListTech';
import RemovalTech from './Pages/TechnicalDashboard.jsx/RemovalTech';
import RedoTech from './Pages/TechnicalDashboard.jsx/RedoTech';
import MISITech from './Pages/TechnicalDashboard.jsx/MISITech';
import SuperVisorHome from './Pages/SuperVisorDashboard/SuperVisorHome'
import AddUserSuperVisor from './Pages/SuperVisorDashboard/AddUserSuperVisor';
import AllUserSuperVisor from './Pages/SuperVisorDashboard/AllUserSuperVisor';
import SuperVisorLogs from './Pages/SuperVisorDashboard/SuperVisorLogs';
import EditProfileSuperVisor from './Pages/SuperVisorDashboard/EditProfileSuperVisor'
import DataLogSuperVisor from './Pages/SuperVisorDashboard/DataLogSuperVisor';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login/>}/>

      {/* CSR Routes  */}
      <Route path='/csr' element={<HomeCSR/>}/>
      <Route path="/csr/updateProfile" element={<EditProfileCSR/>}/>
      {/* <Route path="/csr/logs" element={<HomeCSR/>}/> */}
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


      {/* Technical Routes  */}
      <Route path='/tech' element={<TechHome/>}/>
      <Route path='/tech/allUser' element={<AllUserTech/>}/>
      <Route path='/tech/Datalog' element={<DataLogTech/>}/>
      <Route path='/tech/addUser' element={<AddUserTech/>}/>
      <Route path='/tech/complains' element={<ComplainLogTech/>}/>
      <Route path='/tech/form' element={<FormTech/>}/>
      <Route path='/tech/devices' element={<DevicesTech/>}/>
      <Route path='/tech/inventory' element={<InventroyListTech/>}/>
      <Route path='/tech/removal' element={<RemovalTech/>}/>
      <Route path='/tech/misi' element={<MISITech/>}/>
      <Route path='/tech/redo' element={<RedoTech/>}/>
      <Route path='/tech/updateProfile' element={<UpdateProfileTech/>}/>

      {/* Super Visor Routes  */}
      <Route path='/sv' element={<SuperVisorHome/>}/>
      <Route path='/sv/addUser' element={<AddUserSuperVisor/>}/>
      <Route path='/sv/allUser' element={<AllUserSuperVisor/>}/>
      <Route path='/sv/logs' element={<SuperVisorLogs/>}/>
      <Route path='/sv/Datalog' element={<DataLogSuperVisor/>}/>
      <Route path="/sv/updateProfile" element={<EditProfileSuperVisor/>}/>
    </Routes>
  );
}

export default App;
