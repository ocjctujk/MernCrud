import { Toolbar } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

function ResponsiveAppBar() {
  const navigate = useNavigate();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5" component="div" style={{cursor: 'pointer'}} onClick={()=>{navigate('/')}}>
          CRUD Application
        </Typography>
        <Button
          color="inherit"
          style={{ margin: "16px" }}
          onClick={() => {
            navigate('/add')
          }}
        >
          Add member
        </Button>
      </Toolbar>
    </AppBar>
  );
}
export default ResponsiveAppBar;
