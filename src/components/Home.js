import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  function createData(name, username, email, phone) {
    let action = "editdelete";
    return { name, username, email, phone };
  }
  const navigate = useNavigate();

  const rows = [
    createData(
      "Maharshi Gohel",
      "maharshi",
      "007maharshigohel@gmail.com",
      6351452771
    ),
    createData(
      "Maharshi Gohel",
      "maharshi",
      "007maharshigohel@gmail.com",
      6351452771
    ),
    createData(
      "Maharshi Gohel",
      "maharshi",
      "007maharshigohel@gmail.com",
      6351452771
    ),
    createData(
      "Maharshi Gohel",
      "maharshi",
      "007maharshigohel@gmail.com",
      6351452771
    ),
    createData(
      "Maharshi Gohel",
      "maharshi",
      "007maharshigohel@gmail.com",
      6351452771
    ),
  ];
  return (
    <TableContainer
      sx={{ minWidth: 650, maxWidth: "80%", margin: "32px auto" }}
      component={Paper}
    >
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Index</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={row.name}>
              <TableCell>{index + 1}</TableCell>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.username}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.phone}</TableCell>
              {/* <TableCell>{row.protein}</TableCell> */}
              <TableCell>
                <Button
                  variant="contained"
                  color="info"
                  style={{ marginRight: "8px" }}
                  onClick={() => {
                    navigate("/edit", { state: { row: row } });
                  }}
                >
                  Edit
                </Button>
                <Button variant="contained" color="error">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
