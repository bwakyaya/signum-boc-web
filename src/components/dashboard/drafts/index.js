import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
// import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import "./drafts.css";

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function Drafts() {
  return (
    <div className="list-div">
      <Box sx={{ flexGrow: 1 }} className="list">
        <Grid item xs={12} md={6}>
          <Typography
            sx={{ mt: 4, mb: 2 }}
            variant="h6"
            component="div"
            className="typography"
          >
            Draft Bills
          </Typography>
          <Demo>
            <List dense={false}>
              {generate(
                <ListItem className="list-item">
                  <ListItemText primary="Kristof versus UAP - Bill of costs.docx 12-04-19-165" />
                  <EditIcon className="edit-icon" />
                  <DeleteIcon className="delete-icon" />
                </ListItem>
              )}
            </List>
          </Demo>
        </Grid>
      </Box>
    </div>
  );
}
