import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  IconButton,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import HelpOutlineIcon from "@mui/icons-material/HelpSharp";
import AddIcon from "@mui/icons-material/Add";
import Gpt_icon from "./Sidebar/SVGs/Gpt_Icon";

const Header = () => {
  const [model, setModel] = useState("ChatGPT 4");
  const navigate = useNavigate();

  const handleChange = (event: SelectChangeEvent) => {
    setModel(event.target.value);
  };

  const handleNewChat = () => {
    navigate("/");
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: 1.5,
        borderBottom: "1px solid #e0e0e0",
        backgroundColor: "#fff",
        position: "sticky",
        top: 0,
        zIndex: 10,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          backgroundColor: "#f9f9f9",
          border: "1px solid #ccc",
          borderRadius: "999px",
          px: 1.5,
          py: 0.5,
          minWidth: 120,
        }}
      >
        <Gpt_icon />
        <Select
          value={model}
          onChange={handleChange}
          variant="standard"
          disableUnderline
          sx={{
            fontWeight: 500,
            minWidth: 100,
            "& .MuiSelect-select": {
              pr: "24px !important",
            },
          }}
        >
          <MenuItem value="ChatGPT 3.5">ChatGPT 3.5</MenuItem>
          <MenuItem value="ChatGPT 4">ChatGPT 4</MenuItem>
        </Select>
      </Box>

      {/* Right Buttons */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mr: 2 }}>
        <IconButton>
          <ShareIcon />
        </IconButton>
        <IconButton>
          <HelpOutlineIcon />
        </IconButton>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleNewChat}
          sx={{
            backgroundColor: "#2E7DFF",
            borderRadius: "999px",
            textTransform: "none",
            fontWeight: 600,
            px: 2.5,
            py: 1,
            fontSize: "0.95rem",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#1E66E6",
            },
          }}
        >
          New Chat
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
