import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header";
import NewChat from "./pages/NewChat";
import ActiveChat from "./pages/ActiveChat";
import { Box } from "@mui/material";
import "./App.css";

function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      <Box
        sx={{
          width: collapsed ? "70px" : "292px",
          height: "100vh",
          overflowY: collapsed ? "hidden" : "auto",
          overflowX: "hidden",
          flexShrink: 0,
          bgcolor: "#f9f9f9",
          transition: "width 0.3s ease",
        }}
      >
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
        <Header />

        <Box sx={{ flexGrow: 1, overflow: "auto" }}>
          <Routes>
            <Route path="/" element={<NewChat />} />
            <Route path="/chat/:chatId" element={<ActiveChat />} />
          </Routes>
        </Box>
      </Box>
    </div>
  );
}

export default App;
