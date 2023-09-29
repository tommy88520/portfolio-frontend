import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation';
import Spinner from './components/spinner/spinner';
import Hello from './routes/home/home';
import TestPage from './routes/testPage';
import WorkPage from './routes/workPage/workPage';
import Footer from '~/components/footer/footer';

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Navigation />
      <div className='content'>
        <Routes>
          <Route path='/' element={<Hello />} />
          <Route path='/work/:id' element={<WorkPage />} />
          <Route path='/testPage' element={<TestPage />} />
        </Routes>
      </div>
      <Footer /> {/* 渲染Footer组件 */}
    </Suspense>
  );
}

export default App;
