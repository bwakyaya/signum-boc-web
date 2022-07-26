import * as React from "react";
import "./profile.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import LogoutIcon from "@mui/icons-material/Logout";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import PasswordIcon from "@mui/icons-material/Password";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function Profile() {
  return (
    <div className="userProfileDiv">
      <Box sx={{ flexGrow: 1 }} className="profile-list-box">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography
              sx={{ mt: 4, mb: 2 }}
              variant="h6"
              component="div"
              className="typography"
            >
              Account Management
            </Typography>
            <Demo>
              <List dense={false}>
                <ListItem>
                  <ListItemIcon>
                    <LogoutIcon />
                  </ListItemIcon>
                  <ListItemText primary="Sign Out" />
                </ListItem>
                <ListItem>
                  <ListItemIcon className="viewIcon">
                    <VisibilityIcon />
                  </ListItemIcon>
                  <ListItemText primary="View Profile" />
                </ListItem>
                <ListItem>
                  <ListItemIcon className="editIcon">
                    <EditIcon />
                  </ListItemIcon>
                  <ListItemText primary="Edit Profile" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PasswordIcon />
                  </ListItemIcon>
                  <ListItemText primary="Change Password" />
                </ListItem>
                <ListItem>
                  <ListItemIcon className="deleteIcon">
                    <DeleteIcon />
                  </ListItemIcon>
                  <ListItemText primary="Delete Accout" />
                </ListItem>
              </List>
            </Demo>
          </Grid>
        </Grid>
      </Box>
      <div className="profile-details-box"></div>
    </div>
  );
}

function ViewAccount(params) {
  return <div className="ViewAccount"></div>;
}
function EditAccount(params) {
  return <div className="EditAccount"></div>;
}
function ChangePassword(params) {
  return <div className="ChangePassword"></div>;
}
