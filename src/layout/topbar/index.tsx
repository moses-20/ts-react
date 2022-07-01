import { AppBar, Toolbar, Typography } from "@mui/material";

function Topbar() {
  return (
    <AppBar elevation={0}>
      <Toolbar>
        <Typography>The Shop Admin</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Topbar;
