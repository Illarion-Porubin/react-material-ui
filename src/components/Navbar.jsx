import { Mail, Notifications, Pets } from "@mui/icons-material";
import { AppBar, styled, Box, Toolbar, Typography, InputBase, Badge, Avatar } from "@mui/material";



export default function Navbar() {
  const StyledToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  })

  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
  }))

  const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
      display: "flex"
    }
  }))

  const UserBoox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "1px",
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  }))

  return (
    <AppBar position="sticky">
      <StyledToolBar>
        <Typography variant="h6"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
        </Typography>
        <Pets sx={{ display: { sx: "none", sm: "block" } }} />
        <Search><InputBase placeholder="search..." /></Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar sx={{ width: 24, height: 24 }} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </Icons>
        <UserBoox>
          <Avatar sx={{ width: 24, height: 24 }} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Typography variant="span">John</Typography>
        </UserBoox>
      </StyledToolBar>
    </AppBar>
  )
}
