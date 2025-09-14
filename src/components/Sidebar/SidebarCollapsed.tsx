import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import { ChevronRight, Search } from "@mui/icons-material";
import React from "react";
import HomeIcon from "./SVGs/Home_hero_icon";
import Library_icon from "./SVGs/Library_icon";
import History_icon from "./SVGs/History_icon";
import Explore_icon from "./SVGs/Explore_icon";

interface Props {
  toggleSidebar: () => void;
}

const SidebarCollapsed: React.FC<Props> = ({ toggleSidebar }) => {
  // Reusable style for all IconButtons
  const iconButtonStyles = {
    color: "#6B7280",
    "&:hover": { color: "#2563EB" },
  };

  return (
    <Box
      sx={{
        width: 72,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#F9FAFB",
        py: 2,
        gap: 1.5,
      }}
    >
      {/* Top Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1.5, // 👈 increase this number to control space
        }}
      >
        <IconButton onClick={toggleSidebar} sx={iconButtonStyles}>
          <ChevronRight />
        </IconButton>

        <Tooltip title="Search" placement="right">
          <IconButton sx={iconButtonStyles}>
            <Search />
          </IconButton>
        </Tooltip>

        <Tooltip title="Home" placement="right">
          <IconButton sx={iconButtonStyles}>
            <HomeIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Library" placement="right">
          <IconButton sx={iconButtonStyles}>
            <Library_icon />
          </IconButton>
        </Tooltip>

        <Tooltip title="History" placement="right">
          <IconButton sx={iconButtonStyles}>
            <History_icon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Explore" placement="right">
          <IconButton sx={iconButtonStyles}>
            <Explore_icon />
          </IconButton>
        </Tooltip>
      </Box>

      {/* Bottom Section */}
      <Box>
        <Tooltip title="Try Pro!" placement="right">
          <Box sx={{ backgroundColor: "#fff", borderRadius: 1, mb: 1, p: 0.5 }}>
            <Typography variant="caption">Try Pro!</Typography>
          </Box>
        </Tooltip>

        <img
          src="/pp.jpeg"
          alt="avatar"
          style={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            marginBottom: 30,
            marginLeft: 4,
          }}
        />
      </Box>
    </Box>
  );
};

export default SidebarCollapsed;
