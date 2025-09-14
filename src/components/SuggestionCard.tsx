import { Box, Typography } from "@mui/material";
import { AutoAwesome } from "@mui/icons-material";
import "@fontsource/inter";

interface Props {
  text: string;
}

const SuggestionCard: React.FC<Props> = ({ text }) => {
  return (
    <Box
      sx={{
        width: 220,
        height: 236,
        borderRadius: 3,
        border: "1px solid #E0E7FF",
        px: 2,
        py: 2,
        background: "linear-gradient(to bottom right, #f9f9f9, #fff)",
        cursor: "pointer",
        transition: "0.2s",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        "&:hover": {
          boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.08)",
        },
      }}
    >
      <Box>
        <Box
          sx={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            border: "2px solid #E0E7FF",
            backgroundColor: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 8px rgba(59, 130, 246, 0.1)",
          }}
        >
          <AutoAwesome sx={{ color: "#3B82F6", fontSize: 28 }} />
        </Box>
      </Box>

      <Typography
        variant="body2"
        sx={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 550,
          color: "#000000ff",
          fontSize: "18px",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default SuggestionCard;
