import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";

function Footer() {
  const {
    palette: { neutral },
  } = useTheme();
  return (
    <Box marginTop="70px" padding="40px 0" backgroundColor={neutral.light}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={shades.secondary[500]}
          >
            GOOD VIBES FASHION
          </Typography>
          <div>
          Good vibes fashion is all about feeling comfortable and confident in what you wear. It's about choosing pieces that reflect your personal style and make you feel happy and positive. This can mean colorful, playful patterns, relaxed fits, and easy, breathable fabrics. Whether you prefer bold, bright hues or soft, pastel shades, good vibes fashion is all about finding the pieces that bring a smile to your face and a spring to your step.
          </div>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            About Us
          </Typography>
          <Typography mb="30px">Careers</Typography>
          <Typography mb="30px">Our Stores</Typography>
          <Typography mb="30px">Terms & Conditions</Typography>
          <Typography mb="30px">Privacy Policy</Typography>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Customer Care
          </Typography>
          <Typography mb="30px">Help Center</Typography>
          <Typography mb="30px">Track Your Order</Typography>
          <Typography mb="30px">Corporate & Bulk Purchasing</Typography>
          <Typography mb="30px">Returns & Refunds</Typography>
        </Box>

        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Contact Us
          </Typography>
          <Typography mb="30px">
            13378 Broadway, New York, NY 10019
          </Typography>
          <Typography mb="30px" sx={{ wordWrap: "break-word" }}>
            Email: mikey123@gmail.com
          </Typography>
          <Typography mb="30px">(212)555-4444</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;