import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//importing all the router page 
const Signuppage = lazy(() => import('./components/Signuppage.jsx'));
const UserShow = lazy(() => import('./components/UserShow.jsx'));
const Profile = lazy(()=>import("./components/Profile.jsx"))

function App() {
  return (
    
      <Suspense fallback={<p className="text-center mt-10 text-lg">Loading...</p>}>
        <Routes>
          <Route path="/signup" element={<Signuppage />} />
          <Route path="/show" element={<UserShow />} />
          <Route path="/profile" element ={<Profile />} />
        </Routes>
      </Suspense>
   
  );
}

export default App;
