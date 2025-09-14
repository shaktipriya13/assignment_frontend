// // // // // // import { Box, Typography, Grid } from "@mui/material";
// // // // // // import SuggestionCard from "./SuggestionCard";
// // // // // // import "@fontsource/inter";

// // // // // // const suggestions: string[] = [
// // // // // //   "Give me a concise summary of this meeting transcript",
// // // // // //   "Write a product description for a minimalist smartwatch",
// // // // // //   "Provide a polite response to a customer asking for a refund",
// // // // // // ];

// // // // // // const CardList = () => {
// // // // // //   return (
// // // // // //     <Box
// // // // // //       sx={{
// // // // // //         flexGrow: 1,
// // // // // //         display: "flex",
// // // // // //         justifyContent: "center",
// // // // // //         alignItems: "flex-start",
// // // // // //       }}
// // // // // //     >
// // // // // //       <Box sx={{ maxWidth: 960, width: "100%", px: 4, pt: 4 }}>
// // // // // //         <Typography variant="h5" fontWeight="bold" mb={1}>
// // // // // //           👋🏻 Hi Laurence!
// // // // // //         </Typography>
// // // // // //         <Typography variant="h4" fontWeight={700} mb={4}>
// // // // // //           What do you want to learn today?
// // // // // //         </Typography>

// // // // // //         <Grid container spacing={3}>
// // // // // //           {suggestions.map((s, idx) => (
// // // // // //             <Grid key={idx} item xs={12} sm={6} md={4}>
// // // // // //               <SuggestionCard text={s} />
// // // // // //             </Grid>
// // // // // //           ))}
// // // // // //         </Grid>
// // // // // //       </Box>
// // // // // //     </Box>
// // // // // //   );
// // // // // // };

// // // // // // export default CardList;

// // // // // // import Box from "@mui/material/Box";
// // // // // // import Typography from "@mui/material/Typography";
// // // // // // import Grid from "@mui/material/Grid"; // ✅ Use Grid2 for simpler API
// // // // // // import SuggestionCard from "./SuggestionCard";
// // // // // // import "@fontsource/inter";

// // // // // // const suggestions: string[] = [
// // // // // //   "Give me a concise summary of this meeting transcript",
// // // // // //   "Write a product description for a minimalist smartwatch",
// // // // // //   "Provide a polite response to a customer asking for a refund",
// // // // // // ];

// // // // // // const CardList = () => {
// // // // // //   return (
// // // // // //     <Box
// // // // // //       sx={{
// // // // // //         flexGrow: 1,
// // // // // //         display: "flex",
// // // // // //         justifyContent: "center",
// // // // // //         alignItems: "flex-start",
// // // // // //       }}
// // // // // //     >
// // // // // //       <Box sx={{ maxWidth: 960, width: "100%", px: 4, pt: 4 }}>
// // // // // //         <Typography variant="h5" fontWeight="bold" mb={1}>
// // // // // //           👋🏻 Hi Laurence!
// // // // // //         </Typography>
// // // // // //         <Typography variant="h4" fontWeight={700} mb={4}>
// // // // // //           What do you want to learn today?
// // // // // //         </Typography>

// // // // // //         <Grid container spacing={3}>
// // // // // //           {suggestions.map((s, idx) => (
// // // // // //             <Grid item key={idx} xs={12} sm={6} md={4}>
// // // // // //               <SuggestionCard text={s} />
// // // // // //             </Grid>
// // // // // //           ))}
// // // // // //         </Grid>
// // // // // //       </Box>
// // // // // //     </Box>
// // // // // //   );
// // // // // // };

// // // // // // export default CardList;

// // // // // import Box from "@mui/material/Box";
// // // // // import Typography from "@mui/material/Typography";
// // // // // import Grid from "@mui/material/Grid"; // Use Grid instead of Grid2
// // // // // import SuggestionCard from "./SuggestionCard";
// // // // // import "@fontsource/inter";

// // // // // const suggestions: string[] = [
// // // // //   "Give me a concise summary of this meeting transcript",
// // // // //   "Write a product description for a minimalist smartwatch",
// // // // //   "Provide a polite response to a customer asking for a refund",
// // // // // ];

// // // // // const CardList = () => {
// // // // //   return (
// // // // //     <Box
// // // // //       sx={{
// // // // //         flexGrow: 1,
// // // // //         display: "flex",
// // // // //         justifyContent: "center",
// // // // //         alignItems: "flex-start",
// // // // //       }}
// // // // //     >
// // // // //       <Box sx={{ maxWidth: 960, width: "100%", px: 4, pt: 4 }}>
// // // // //         <Typography variant="h5" fontWeight="bold" mb={1}>
// // // // //           👋🏻 Hi Laurence!
// // // // //         </Typography>
// // // // //         <Typography variant="h4" fontWeight={700} mb={4}>
// // // // //           What do you want to learn today?
// // // // //         </Typography>

// // // // //         <Grid container spacing={3}>
// // // // //           {suggestions.map((s, idx) => (
// // // // //             <Grid item key={idx} xs={12} sm={6} md={4}>
// // // // //               <SuggestionCard text={s} />
// // // // //             </Grid>
// // // // //           ))}
// // // // //         </Grid>
// // // // //       </Box>
// // // // //     </Box>
// // // // //   );
// // // // // };

// // // // // export default CardList;

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SuggestionCard from "./SuggestionCard";
import "@fontsource/inter";
import { ReactNode } from "react"; // Import ReactNode type
import { textAlign } from "@mui/system";

const suggestions = [
  "Give me a concise summary of this meeting transcript",
  "Write a product description for a minimalist smartwatch",
  "Provide a polite response to a customer asking for a refund",
];

interface CardContainerProps {
  children: ReactNode; // Type the children prop
}

const CardContainer = ({ children }: CardContainerProps) => (
  <Box
    sx={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: 2, // Space between cards
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
