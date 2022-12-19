import { BrowserRouter, Routes, Route } from "react-router-dom";
// import TopBar from "./components/TopBar";
// import NavBar from "./components/NavBar";
import LoadingProvider from "./context/LoadingProvider";
import TokenProvider, { useToken } from "./context/TokenProvider";
import HistoryPage from "./pages/HistoryPage";
import LoginPage from "./pages/LoginPage";
import MyHabitsPage from "./pages/MyHabitsPage";
import SignUpPage from "./pages/SignUpPage";
import TodayPage from "./pages/TodayPage";

function App() {
  return (
    <TokenProvider>
      <LoadingProvider>
        <BrowserRouter>
        {/* {useToken() && <TopBar/>} */}
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/cadastro" element={<SignUpPage />} />
            <Route path="/habitos" element={<MyHabitsPage />} />
            <Route path="/historico" element={<HistoryPage />} />
            <Route path="/hoje" element={<TodayPage />} />
          </Routes>
          {/* {useToken() && <NavBar/>} */}
        </BrowserRouter>
      </LoadingProvider>
    </TokenProvider>
  );
}

export default App;
