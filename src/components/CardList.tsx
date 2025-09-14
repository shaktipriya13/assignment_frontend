import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SuggestionCard from "./SuggestionCard";
import "@fontsource/inter";
import { ReactNode } from "react";

const suggestions = [
  "Give me a concise summary of this meeting transcript",
  "Write a product description for a minimalist smartwatch",
  "Provide a polite response to a customer asking for a refund",
];

interface CardContainerProps {
  children: ReactNode;
}

const CardContainer = ({ children }: CardContainerProps) => (
  <Box
    sx={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: 2,
      maxWidth: 960,
      width: "100%",
      margin: "0 auto",
      padding: 2,
    }}
  >
    {children}
  </Box>
);

const CardList = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: 4,
        backgroundColor: "#fff",
      }}
    >
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h5" fontWeight="bold" color="black">
          👋🏻 Hi Laurence!
        </Typography>
        <Typography variant="h4" fontWeight={700} mt={1}>
          What do you want to learn today?
        </Typography>
      </Box>
      <CardContainer>
        {suggestions.map((text, index) => (
          <SuggestionCard key={index} text={text} />
        ))}
      </CardContainer>
    </Box>
  );
};

export default CardList;
