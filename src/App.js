import { BrowserRouter, Routes, Route } from "react-router-dom";
import BaseScreen from "./components/BaseScreen";
import LoadingProvider from "./context/LoadingProvider";
import ProgressProvider from "./context/ProgressProvider";
import TokenProvider from "./context/TokenProvider";
import HistoryPage from "./pages/HistoryPage";
import LoginPage from "./pages/LoginPage";
import MyHabitsPage from "./pages/MyHabitsPage";
import SignUpPage from "./pages/SignUpPage";
import TodayPage from "./pages/TodayPage";

function App() {
  return (
    <TokenProvider>
      <LoadingProvider>
        <ProgressProvider>
          <BrowserRouter>
            <BaseScreen>
              <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/cadastro" element={<SignUpPage />} />
                <Route path="/habitos" element={<MyHabitsPage />} />
                <Route path="/historico" element={<HistoryPage />} />
                <Route path="/hoje" element={<TodayPage />} />
              </Routes>
            </BaseScreen>
          </BrowserRouter>
        </ProgressProvider>
      </LoadingProvider>
    </TokenProvider>
  );
}

export default App;
