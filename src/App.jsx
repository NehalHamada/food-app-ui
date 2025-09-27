import * as React from "react";
import {
  Box,
  Tabs,
  Tab,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  NativeSelect,
  Checkbox,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
  Button,
  Grid,
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Paper,
} from "@mui/material";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { DataGrid } from "@mui/x-data-grid";

function App() {
  const [value, setValue] = React.useState(0);
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const columns = [
    { field: "col1", headerName: "Item", width: 150 },
    { field: "col2", headerName: "Price", width: 150 },
  ];

  const rows = [
    { id: 1, col1: "Pizza", col2: "$10" },
    { id: 2, col1: "Burger", col2: "$7" },
    { id: 3, col1: "Pasta", col2: "$12" },
    { id: 4, col1: "Salad", col2: "$6" },
  ];

  const paginationModel = { page: 0, pageSize: 5 };

  return (
    <Box sx={{ p: 4 }}>
      {/* Tabs */}
      <Box
        sx={{
          width: "100%",
          mb: 4,
          bgcolor: "primary.main",
          borderRadius: 2,
          boxShadow: 3,
        }}>
        <Tabs
          onChange={handleChange}
          value={value}
          textColor="inherit"
          indicatorColor="secondary"
          aria-label="Tabs where each tab needs to be selected manually"
          centered>
          <Tab label="Home" sx={{ color: "white", fontWeight: "bold" }} />
          <Tab label="About" sx={{ color: "white", fontWeight: "bold" }} />
          <Tab label="Contact" sx={{ color: "white", fontWeight: "bold" }} />
        </Tabs>
      </Box>

      {/* Forms */}
      <Typography
        variant="h4"
        sx={{
          mb: 3,
          fontWeight: "bold",
          textAlign: "center",
          color: "primary.main",
        }}>
        Forms
      </Typography>
      <Box
        sx={{
          p: 3,
          borderRadius: 3,
          bgcolor: "#f9f9f9",
          boxShadow: 2,
          mb: 4,
        }}>
        {/* Email */}
        <Typography variant="subtitle1">Email</Typography>
        <TextField
          required
          id="outlined-required"
          label="Enter Your Name"
          sx={{ mt: 1, mb: 2, width: "100%" }}
        />

        {/* Password */}
        <Typography variant="subtitle1">Password</Typography>
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          sx={{ mt: 1, mb: 2, width: "100%" }}
        />

        {/* Select */}
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Age
          </InputLabel>
          <NativeSelect
            sx={{
              borderRadius: 2,
              px: 2,
              py: 1,
              bgcolor: "white",
              boxShadow: 1,
              mt: 1,
            }}
            defaultValue={30}
            inputProps={{
              name: "age",
              id: "uncontrolled-native",
            }}>
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </NativeSelect>
        </FormControl>

        {/* Checkboxes */}
        <Typography variant="subtitle1">Choose Languages</Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 2 }}>
          {["HTML", "CSS", "JS", "C", "C++", "C#"].map((lang) => (
            <FormControlLabel
              key={lang}
              control={<Checkbox {...label} />}
              label={lang}
            />
          ))}
        </Box>

        {/* Radio */}
        <FormControl sx={{ mb: 2 }}>
          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            row>
            <FormControlLabel
              value="Female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>

        {/* Button */}
        <Button
          variant="contained"
          fullWidth
          sx={{
            mt: 2,
            py: 1.5,
            fontWeight: "bold",
            borderRadius: 3,
            boxShadow: 3,
            textTransform: "none",
          }}>
          Login
        </Button>
      </Box>

      {/* Products */}
      <Typography
        variant="h3"
        sx={{
          mt: 4,
          mb: 3,
          textAlign: "center",
          fontWeight: "bold",
          color: "primary.main",
        }}>
        Products
      </Typography>
      <Box sx={{ width: "100%", mb: 4 }}>
        <Grid container spacing={3} justifyContent="center">
          {[1, 2, 3, 4].map((item) => (
            <Grid item xs={12} sm={6} key={item}>
              <Card
                sx={{
                  maxWidth: 400,
                  mx: "auto",
                  borderRadius: 3,
                  boxShadow: 4,
                  transition: "transform 0.3s",
                  "&:hover": { transform: "scale(1.03)" },
                }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      R
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Shrimp and Chorizo Paella"
                  subheader="September 14, 2016"
                />
                <CardMedia
                  component="img"
                  height="220"
                  image="/public/shrimp.jpg"
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests.
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon color="error" />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon color="primary" />
                  </IconButton>
                  <IconButton
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more">
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography
                      variant="body1"
                      sx={{ mb: 2, fontWeight: "bold" }}>
                      Method:
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 2 }}>
                      Heat oil in a paella pan or a deep skillet, add chicken,
                      shrimp and chorizo, cook until browned.
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Table */}
      <Box sx={{ width: "100%", mt: 4 }}>
        {/* Header */}
        <Typography
          variant="h4"
          sx={{
            mb: 2,
            fontWeight: "bold",
            textAlign: "center",
            color: "primary.main",
          }}>
          Menu Table
        </Typography>

        {/* Table */}
        <Paper
          sx={{
            height: 400,
            width: "100%",
            borderRadius: 3,
            boxShadow: 4,
            p: 2,
          }}>
          <DataGrid
            rows={rows}
            columns={columns}
            autoHeight
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
            sx={{
              border: 0,
              "& .MuiDataGrid-columnHeaders": {
                bgcolor: "primary.main",
                fontWeight: "bold",
                fontSize: 16,
              },
              "& .MuiDataGrid-cell": {
                fontSize: 15,
              },
              "& .MuiDataGrid-row:hover": {
                bgcolor: "#f9f9f9",
              },
            }}
          />
        </Paper>
      </Box>
    </Box>
  );
}

export default App;
