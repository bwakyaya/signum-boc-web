import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import VisibilityIcon from "@mui/icons-material/Visibility";
import "./archive.css";

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

export default function Archive() {
  const [secondary, setSecondary] = React.useState(false);

  return (
    <div className="list-div">
      <Box sx={{ flexGrow: 1 }} className="list">
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Bills Archive
          </Typography>
          <Demo>
            <List dense={false}>
              {generate(
                <ListItem
                  className="list-item"
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <VisibilityIcon className="view-icon" />
                    </IconButton>
                  }
                >
                  <ListItemText
                    primary="Single-line item"
                    secondary={secondary ? "Secondary text" : null}
                  />
                </ListItem>
              )}
            </List>
          </Demo>
        </Grid>
      </Box>
    </div>
  );
}
