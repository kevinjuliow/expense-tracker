import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import { Login } from "./pages/auth/Login";
import { Register } from "./pages/auth/Register";
import { ApiProvider } from "./api/ApiProvider";
import Dashboard from "./pages/dashboard/Dashboard";
import ProtectedRoutes from "./components/ProtectedRoutes";
import ExpensesApiProvider from "./api/ExpensesApiProvider";
import WalletApiProvider from "./api/WalletApiProvider";
import HomeDash from "./pages/dashboard/HomeDash";
import Expenses from "./pages/dashboard/Expenses";
import CreateExpense from "./pages/dashboard/CreateExpense";
import Wallet from "./pages/dashboard/Wallet";
import ShowWallet from "./pages/dashboard/ShowWallet";
import CreateWallet from "./pages/dashboard/CreateWallet";


function App() {
  return (
    <Router>
      <ApiProvider>
        <ExpensesApiProvider>
          <WalletApiProvider>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/dashboard/*"
                element={
                  <ProtectedRoutes>
                    <Dashboard />
                  </ProtectedRoutes>
                }
                
              >
                 <Route path="home" element={<HomeDash />} />
                 <Route path="expenses" element={<Expenses />}/>
                 <Route path="wallet" element={<Wallet />}/>
                 <Route path="wallet/create" element={<CreateWallet />}/>
                 <Route path="wallet/:id" element={<ShowWallet/>}/>
                 <Route path="expenses/create" element={<CreateExpense />}/>
                
              </Route>
             
            
            </Routes>
          </WalletApiProvider>
        </ExpensesApiProvider>
      </ApiProvider>
    </Router>
  );
}

export default App;
