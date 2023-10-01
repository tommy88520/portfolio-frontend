import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation';
import Spinner from './components/spinner/spinner';
import Hello from './routes/home/home';
import Footer from '~/components/footer/footer';
// import NotFound from '~/components/notFound/notFound';

const NotFound = lazy(() => import('~/components/notFound/notFound'));
const TestPage = lazy(() => import('./routes/testPage'));
const WorkPage = lazy(() => import('./routes/workPage/workPage'));

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Navigation />
      {/* <div className='content'> */}
      <Routes>
        <Route path='/' element={<Hello />} />
        <Route path='/work/:id' element={<WorkPage />} />
        <Route path='/testPage' element={<TestPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      {/* </div> */}
      <Footer />
    </Suspense>
  );
}

export default App;
