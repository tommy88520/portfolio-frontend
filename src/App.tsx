import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation';
import Spinner from './components/spinner/spinner';
import Hello from './routes/home/home';
import TestPage from './routes/testPage';
import WorkPage from './routes/workPage/workPage';

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Hello />} />
          <Route path='/work/:id' element={<WorkPage />} />
          <Route path='/testPage' element={<TestPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
