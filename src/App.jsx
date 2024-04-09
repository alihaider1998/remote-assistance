// // // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // // import Sidebar from './components/Sidebar';
// // // import Navbar from './components/Navbar';
// // // import HomePage from './pages/HomePage';
// // // import AlertsPage from './pages/AlertsPage';
// // // import VehiclesPage from './pages/VehiclesPage';
// // import EmailPasswordAuth from './EmailPasswordAuth';
// // import GoogleAuth from "./GoogleAuth";

// // const App = () => {
// //   return (
// //     <div>
// //     <EmailPasswordAuth />
// //     <GoogleAuth />
// //   </div>
// //     // <Router>
// //     //   <div className="flex min-h-screen bg-gray-700">
// //     //     <Sidebar />
// //     //     <div className="flex flex-col flex-1">
// //     //       <Navbar />
// //     //       <div className="flex-1 text-white bg-gray-700">
// //     //         <Routes>
// //     //           <Route path="/" element={<HomePage />} />
// //     //           <Route path="/alerts" element={<AlertsPage />} />
// //     //           <Route path="/vehicles" element={<VehiclesPage />} />
// //     //         </Routes>
// //     //       </div>
// //     //     </div>
// //     //   </div>
// //     // </Router>
// //   );
// // };

// // export default App;

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Sidebar from './components/Sidebar';
// import Navbar from './components/Navbar';
// import HomePage from './pages/HomePage';
// import AlertsPage from './pages/AlertsPage';
// import VehiclesPage from './pages/VehiclesPage';
// import EmailPasswordAuth from './EmailPasswordAuth';
// import GoogleAuth from "./GoogleAuth";
// import ProtectedRoute from './components/ProtectedRoute';

// const App = () => {
//   return (
//     <Router>
//       <div className="flex min-h-screen bg-gray-700">
//         <Sidebar />
//         <div className="flex flex-col flex-1">
//           <Navbar />
//           <div className="flex-1 text-white bg-gray-700">
//             <Routes>
//               <Route path="/" element={<HomePage />} />
//               <Route path="/alerts" element={
//                 <ProtectedRoute>
//                   <AlertsPage />
//                 </ProtectedRoute>
//               } />
//               <Route path="/vehicles" element={
//                 <ProtectedRoute>
//                   <VehiclesPage />
//                 </ProtectedRoute>
//               } />
//               <Route path="/login" element={<EmailPasswordAuth />} />
//               <Route path="/google-login" element={<GoogleAuth />} />
//             </Routes>
//           </div>
//         </div>
//       </div>
//     </Router>
//   );
// };

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AlertsPage from "./pages/AlertsPage";
import VehiclesPage from "./pages/VehiclesPage";
import LoginPage from "./pages/LoginPage";
import { useAuth } from "./firebase";

const App = () => {
  const currentUser = useAuth();
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-700">
        {currentUser && <Sidebar />}
        <div className="flex flex-col flex-1">
          <Navbar />
          <div className="flex-1 text-white bg-gray-700">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/alerts" element={<AlertsPage />} />
              <Route path="/vehicles" element={<VehiclesPage />} />
              <Route path="/login" element={<LoginPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
