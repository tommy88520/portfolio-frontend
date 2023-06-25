import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation';
// import PrivateRoutes from './utils/authguard';
import Spinner from './components/spinner/spinner';
import Hello from './components/Hello';
function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path='/' element={<Navigation />} />
        {/* <Route index element={<Hello />} /> */}
      </Routes>
    </Suspense>
  );
}

export default App;
