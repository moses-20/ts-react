import { Button, Paper } from "@mui/material";
import { Typography } from "@mui/material";

function Greeting() {
  return (
    <Paper
      square
      variant="outlined"
      sx={{
        maxWidth: "700px",
        margin: "auto",
      }}
    >
      <Typography variant="h1" textAlign="center">
        Hello Shopa
      </Typography>

      <Button variant="contained"> Let's Go </Button>
    </Paper>
  );
}

export default Greeting;
