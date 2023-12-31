import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigator from "./components/navigator/Navigator";
import AllAdverts from './components/pages/AllAdverts';
import CategoriesAdverts from './components/pages/CategoriesAdverts';
import PricesAdverts from './components/pages/PricesAdverts';
import NotFound from './components/pages/NotFound';
import AddAdvert from './components/pages/AddAdvert';

function App() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navigator />}>
                <Route index element={<AllAdverts />} />
                <Route path="byCategories" element={<CategoriesAdverts />} />
                <Route path="byPrices" element={<PricesAdverts />} />
                <Route path="addAdvert" element={<AddAdvert />} />
                <Route path="/*" element={<NotFound />} />
            </Route>
        </Routes>
    </BrowserRouter>
}

export default App;
