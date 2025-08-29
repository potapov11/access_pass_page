import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { PassCreatePage } from './pages/PassCreatePage/PassCreatePage';
import { PagePasses } from './pages/PagePasses/PagePasses';
import NotFound from './pages/NotFound';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/page_passes" element={<PagePasses />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/passcreate" element={<PassCreatePage />} />
      <Route path="/passcreate/:id" element={<PassCreatePage />} />
    </Routes>
  );
}

export function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
