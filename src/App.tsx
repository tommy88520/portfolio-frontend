import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation';
// import PrivateRoutes from './utils/authguard';
import Spinner from './components/spinner/spinner';
import Hello from './routes/home';
import TestPage from './routes/testPage';
function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Hello />} />
          <Route path='/testPage' element={<TestPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
