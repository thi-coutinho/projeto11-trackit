import { BrowserRouter, Routes, Route } from "react-router-dom";
import HistoryPage from "./pages/HistoryPage";
import LoginPage from "./pages/LoginPage";
import MyHabitsPage from "./pages/MyHabitsPage";
import SignUpPage from "./pages/SignUpPage";
import TodayPage from "./pages/TodayPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/cadastro" element={<SignUpPage/>}/>
        <Route path="/habitos" element={<MyHabitsPage/>}/>
        <Route path="/historico" element={<HistoryPage/>}/>
        <Route path="/hoje" element={<TodayPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
