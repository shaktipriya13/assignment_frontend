import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InputAdornment from "@mui/material/InputAdornment";
import { ChevronLeft } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";

import Logo from "./SVGs/Logo";
import HomeIcon from "./SVGs/Home_hero_icon";
import Library_icon from "./SVGs/Library_icon";
import History_icon from "./SVGs/History_icon";
import Explore_icon from "./SVGs/Explore_icon";
import RocketIcon from "./SVGs/Rocket_icon";
import UpDownArrow from "./SVGs/Up_downArrow";

interface Props {
  toggleSidebar: () => void;
}

const SidebarExpanded: React.FC<Props> = ({ toggleSidebar }) => {
  return (
    <Box
      sx={{
        width: 260,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#F9FAFB",
        borderRight: "1px solid #E5E7EB",
        px: 2,
        pt: 2,
        pb: 3,
      }}
    >
      <Box>
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Logo />
            <Typography variant="h5" fontWeight="bold">
              Inteliq
            </Typography>
          </Box>

          <IconButton onClick={toggleSidebar}>
            <ChevronLeft />
          </IconButton>
        </Box>

        {/* Search */}
        <Box
          sx={{
            mt: 2,
            mb: 2,
            backgroundColor: "#fff",
            borderRadius: 2,
            px: 1,
            py: 0.5,
          }}
        >
          <InputBase
            placeholder="Search for chats..."
            fullWidth
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
          />
        </Box>

        {/* Menu List */}
        <List>
          {[
            {
              label: "Home",
              icon: <HomeIcon />,
              shortcut: "⌘ H",
              active: true,
            },
            {
              label: "Library",
              icon: <Library_icon />,
              shortcut: "⌘ T",
              active: false,
            },
            {
              label: "History",
              icon: <History_icon />,
              shortcut: "⌘ G",
              active: false,
            },
            {
              label: "Explore",
              icon: <Explore_icon />,
              shortcut: "⌘ L",
              active: false,
            },
          ].map((item, i) => (
            <ListItem key={i} disablePadding sx={{ mb: 1 }}>
              <ListItemButton
                sx={{
                  borderRadius: "12px",
                  px: 2,
                  py: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  backgroundColor: item.active ? "#fff" : "transparent",
                  boxShadow: item.active
                    ? "0px 1px 3px rgba(0,0,0,0.1)"
                    : "none",
                  "&:hover": {
                    backgroundColor: "#f3f4f6",
                    "& svg": { color: "#2563EB" },
                    "& .MuiListItemText-root": { color: "#2563EB" },
                  },
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <ListItemIcon
                    sx={{
                      color: item.active ? "#2563EB" : "#6B7280",
                      minWidth: 36,
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.label}
                    sx={{
                      color: item.active ? "#000" : "#374151",
                      fontWeight: item.active ? "500" : "400",
                    }}
                  />
                </Box>

                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "13px",
                    color: "#4B5563",
                    backgroundColor: "#F3F4F6",
                    px: 1,
                    py: 0.2,
                    borderRadius: "6px",
                  }}
                >
                  {item.shortcut}
                </Typography>
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider sx={{ my: 1 }} />

        <Box>
          <Typography variant="subtitle2" fontWeight="bold" sx={{ mb: 1 }}>
            Recent Chats
          </Typography>
          {[
            "Write a Shakespearean sonnet about a cat...",
            "If cereal commercials were directed by Christo…",
            "Renewable Energy Trends",
            "Describe a medieval jousting tournament wher…",
            "What would a job interview be like if aliens wer…",
            "Generate a rap battle between a sentient toaste…",
            "What if oxygen was actually a hallucinogen, and…",
            "Pitch a reality TV show where ghosts haunt infl…",
          ].map((chat, i) => (
            <Typography
              key={i}
              variant="body2"
              sx={{ mb: 2, cursor: "pointer", color: "#4B5563" }}
            >
              {chat.length > 30 ? `${chat.slice(0, 30)}...` : chat}
            </Typography>
          ))}
          <Typography
            sx={{
              mt: 1,
              color: "#2767f0ff",
              cursor: "pointer",
              fontWeight: "bold",
            }}
            variant="body2"
          >
            View All →
          </Typography>
        </Box>
      </Box>

      <Box>
        <Box
          sx={{
            background: "linear-gradient(90deg, #fef6fb 0%, #f4faff 100%)",
            borderRadius: 2,
            p: 1,
            mb: 1,
            mt: 7,
            mr: 1,
            boxShadow: "0 0 0 1px #E5E7EB",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontStyle: "normal",
              fontSize: "14px",
              color: "#5e5d5dff",
            }}
          >
            Try Pro!
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                fontStyle: "normal",
                fontSize: "12px",
                color: "#424141ff",
              }}
            >
              Upgrade for smarter AI and more...
            </Typography>
            <RocketIcon />
          </Box>
        </Box>

        <Box
          sx={{
            backgroundColor: "#ffffff",
            borderRadius: "12px",
            px: 2,
            py: 1.5,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "calc(100% - 40px)",
            boxShadow: "0 0 0 1px #E5E7EB",
            mr: 5,
            mb: 1.5,
            mt: 1.5,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src="/avatar.png"
              alt="avatar"
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            <Typography
              sx={{
                ml: 2,
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                fontSize: "16px",
                color: "#374151",
              }}
            >
              Lawrence Cruz
            </Typography>
          </Box>

          <Box
            sx={{
              backgroundColor: "#f9fafb",
              borderRadius: "9999px",
              width: 40,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                lineHeight: 1,
                gap: 0.5,
              }}
            >
              <UpDownArrow />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SidebarExpanded;
