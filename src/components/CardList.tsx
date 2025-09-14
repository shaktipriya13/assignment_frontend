import { Box, Typography, Grid } from "@mui/material";
import SuggestionCard from "./SuggestionCard";
import "@fontsource/inter"; // defaults to weight 400

const suggestions = [
  "Give me a concise summary of this meeting transcript",
  "Write a product description for a minimalist smartwatch",
  "Provide a polite response to a customer asking for a refund",
];

const CardList = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <Box sx={{ maxWidth: 960, width: "100%", px: 4, pt: 4 }}>
        <Typography variant="h5" fontWeight="bold" mb={1}>
          👋🏻 Hi Laurence!
        </Typography>
        <Typography variant="h4" fontWeight={700} mb={4}>
          What do you want to learn today?
        </Typography>

        <Grid container spacing={3}>
          {suggestions.map((s, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <SuggestionCard text={s} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default CardList;
