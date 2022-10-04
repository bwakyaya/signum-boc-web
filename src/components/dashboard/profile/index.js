import React, { useState } from "react";
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
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function Profile(props) {
  
  const [ProfileComponent, setProfileComponent] = useState();
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
                <ListItem
                  onClick={() => {
                    props.setToken(undefined);
                  }}
                  className="Item"
                >
                  <ListItemIcon>
                    <LogoutIcon />
                  </ListItemIcon>
                  <ListItemText primary="Sign Out" />
                </ListItem>
                <ListItem
                  onClick={() => {
                    setProfileComponent(ViewAccount());
                  }}
                  className="Item"
                >
                  <ListItemIcon>
                    <VisibilityIcon className="viewIcon" />
                  </ListItemIcon>
                  <ListItemText primary="View Profile" />
                </ListItem>
                <ListItem
                  onClick={() => {
                    setProfileComponent(EditAccount());
                  }}
                  className="Item"
                >
                  <ListItemIcon className="editIcon">
                    <EditIcon className="editIcon" />
                  </ListItemIcon>
                  <ListItemText primary="Edit Profile" />
                </ListItem>
                <ListItem
                  onClick={() => {
                    setProfileComponent(ChangePassword());
                  }}
                  className="Item"
                >
                  <ListItemIcon>
                    <PasswordIcon />
                  </ListItemIcon>
                  <ListItemText primary="Change Password" />
                </ListItem>
                <ListItem
                  onClick={() => {
                    setProfileComponent();
                  }}
                  className="Item"
                >
                  <ListItemIcon>
                    <DeleteIcon className="deleteIcon" />
                  </ListItemIcon>
                  <ListItemText primary="Delete Accout" />
                </ListItem>
              </List>
            </Demo>
          </Grid>
        </Grid>
      </Box>
      <div className="profile-details-box">{ProfileComponent}</div>
    </div>
  );
}

function ViewAccount() {
  return (
    <div className="profile-component">
      <label className="profile-field">Full Names</label>
      <label className="profile-field">username</label>
      <label className="profile-field">Registered Email</label>
      <label className="profile-field">Registered Phone Number</label>
      <label className="profile-field">Law Firm</label>
    </div>
  );
}
function EditAccount() {
  return (
    <div className="profile-component">
      <input
        className="profile-field"
        id="fullnames"
        placeholder="Full Names"
      ></input>
      <input
        className="profile-field"
        id="username"
        placeholder="Username"
      ></input>
      <input
        className="profile-field"
        id="email"
        placeholder="Registered Email"
      ></input>
      <input
        className="profile-field"
        id="phonenumber"
        placeholder="Registered Phone Number"
      ></input>
      <input
        className="profile-field"
        id="lawfirm"
        placeholder="Law Firm"
      ></input>
      <Button
        className="save-button"
        variant="contained"
        startIcon={<SaveIcon />}
        onClick={() => {
          alert("Hey guys, I have just been ");
        }}
      >
        Save
      </Button>
    </div>
  );
}
function ChangePassword() {
  return (
    <div className="profile-component">
      <input
        type="password"
        placeholder="Old Password"
        id="old-password"
        className="profile-field"
      ></input>
      <input
        type="password"
        placeholder="New Password"
        id="new-password"
        className="profile-field"
      ></input>
      <input
        type="password"
        placeholder="Confirm New Password"
        id="confirm-password"
        className="profile-field"
      ></input>
      <Button
        className="save-button"
        variant="contained"
        startIcon={<SaveIcon />}
        onClick={() => {
          alert("Hey guys, I have just been ");
        }}
      >
        Save
      </Button>
    </div>
  );
}
