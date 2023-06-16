// import React from "react";
// import styles from "./Navbar.module.css";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   const id = localStorage.getItem("_id");
//   return (
//     <div className={styles.navbar}>
//       <div className={styles.innerNav}>
//         <div className={styles.logo}>Blogs</div>
//         <div className={styles.navigations}>
//           <NavLink
//             className={(navData) => (navData.isActive ? styles.active : "")}
//             to="/"
//           >
//             Blogs
//           </NavLink>
//           {id !== undefined ? (
//             <NavLink
//               className={(navData) => (navData.isActive ? styles.active : "")}
//               to="/blogform"
//             >
//               AddBlog
//             </NavLink>
//           ) : (
//             ""
//           )}
//           <NavLink
//             className={(navData) => (navData.isActive ? styles.active : "")}
//             to="/signup"
//           >
//             Sign up
//           </NavLink>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";

const drawerWidth = 240;

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const id = localStorage.getItem("_id");
  const history = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        TechnoBlogs
      </Typography>
      <Divider />
      <List>
        <ListItem key={1} disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary={"Home"} />
          </ListItemButton>
        </ListItem>
        <ListItem key={2} disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary={"Add Blogs"} />
          </ListItemButton>
        </ListItem>
        <ListItem key={3} disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary={"Sign Up"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            TechnoBlogs
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Link
              style={{
                color: "white",
                margin: "0 1em",
                textDecoration: "none",
              }}
              to={"/"}
            >
              Home
            </Link>
          </Box>
          {id !== null ? (
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Link
                style={{
                  color: "white",
                  margin: "0 1em",
                  textDecoration: "none",
                }}
                to={"/blogform"}
              >
                Add Blogs
              </Link>
            </Box>
          ) : (
            ""
          )}

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {id === null ? (
              <Link
                style={{
                  color: "white",
                  margin: "0 1em",
                  textDecoration: "none",
                }}
                to={"/signup"}
              >
                Sign Up
              </Link>
            ) : (
              ""
            )}
            {/* ) : (
              <button
                onClick={() => {
                  localStorage.removeItem("_id");
                  localStorage.removeItem("username");
                  history("/");
                }}
              >
                Logout
              </button>
            )} */}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
