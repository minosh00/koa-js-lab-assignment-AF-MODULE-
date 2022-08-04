import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DisplayAllProduct from "./components/DisplayAllProduct";
import Display from "./components/AddProduct";
import RegisterCustomerAccount from "./components/RegisterCustomerAccount";
import RegisterTraderAccount from "./components/RegisterTraderAccount";
import NavBar from "./components/NavBars";
import TradeLogin from "./components/TradeLogin";
import RegisterSelectPage from "./components/RegisterSelectPage";
import LoginCus from "./components/CustomerLogin";
import TraderHome from "./components/TraderHome";
import ViewPromotion from "./components/ViewPromotion";
import AddPromotion from "./components/AddPromotion";
import DisplayAllCustomers from "./components/DisplayAllCustomers";
import AddProduct from "./components/AddProduct";
import AllProducts from "./components/AllInventory";
import EditItem from "./components/EditProduct";
import Purchase from "./components/Purchase";
import CartList from './components/CartListmenu';

function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route exact path="/" element={<RegisterSelectPage />} />
            <Route path="/" element={<NavBar />} />
            <Route path="/cuslogin" element={<LoginCus />} />
            <Route path="/registercustomer" element={<RegisterCustomerAccount />}/>
            <Route  path="/RegisterTraderAccount" element={<RegisterTraderAccount />} />
            <Route path="/adproduct" element={<Display />} />
            <Route path="/register" element={<RegisterSelectPage />} />
            <Route path="/DisplayAllProduct" element={<DisplayAllProduct />} />
            <Route path="/TradeLogin" element={<TradeLogin />} />
            <Route path="/TraderHome" element={<TraderHome />} />
            <Route path="/Purchase" element={<Purchase />} />

      <Route path="/AllProduct" element={<AllProducts />} />
            <Route path="/DisplayAllCustomers"element={<DisplayAllCustomers />} />
            <Route path="/AddProduct" element={<AddProduct />} />
            <Route path="/AddPromotion" element={<AddPromotion />} />
            <Route path="/ViewPromotion" element={<ViewPromotion />} />
            <Route path="/CartList" element={<CartList/>}/>

            <Route path="/updateProductByID/:id" element={<EditItem/>}/>
            
          </Routes>
        </Router>
      </div>
    </>
  );
}
export default App;
