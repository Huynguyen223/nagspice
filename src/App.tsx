import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page from './app/page';
import ProductPage from './app/products/[slug]/page';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/products/:slug" element={<ProductPage />} />
        <Route path="*" element={<Page />} />
      </Routes>
    </BrowserRouter>
  );
}
