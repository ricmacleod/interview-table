import { useState, useEffect, SetStateAction } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";
import requestTableData from "../Requests/GetTableData";
import {
  ITableResponseElement,
  ITableResponseElementWtihEdit,
} from "../Interfaces/ResponsesTypes";
import { Box, Button } from "@mui/material";
import TextField from "@mui/material/TextField";

export default function DataTable(): JSX.Element {
  const [tableData, SetTableData] = useState<ITableResponseElementWtihEdit[]>(
    []
  );
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [page, setPage] = useState(0);
  const [engageIDChange, setEngageIDChange] = useState(true);

  useEffect(() => {
    async function requestAndLoadData() {
      return await requestTableData();
    }
    requestAndLoadData().then((result) =>
      SetTableData(
        result.map((resultArrayElement: ITableResponseElement) => {
          // I'm adding an additional property here to simplify things when editing the row
          const addEditProp = { ...resultArrayElement, isBeingEdited: false };
          return addEditProp as ITableResponseElementWtihEdit;
        })
      )
    );
  }, []);

  useEffect(() => {
    let beginRandom: NodeJS.Timer;
    if (engageIDChange && tableData.length !== 0) {
      // Fields should‌‌ randomly‌‌ change‌‌ every‌‌ 2‌‌ seconds‌‌ in‌‌ the‌‌ range‌‌ from‌‌ 1‌‌ to‌‌ 1M
      beginRandom = setInterval(() => randomIDs(), 2000);
      return () => clearInterval(beginRandom);
    }
    {
      return () => clearInterval(beginRandom);
    }
    // Await for table data to load
  }, [tableData]);

  function handleChangePage(event: any, newPage: SetStateAction<number>): void {
    setPage(newPage);
  }

  function handleChangeRowsPerPage(event: { target: { value: string } }): void {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  }

  function removeRow(rowToRemove: ITableResponseElementWtihEdit): void {
    // Title is used to locate and remove the elemnt as IDs are going to be randomized
    SetTableData(
      tableData.filter((rowOfTable) => rowOfTable.title !== rowToRemove.title)
    );
  }

  function randomIDs(): void {
    const newTableToSet = tableData.map((row) => {
      const newRandomID = Math.floor(Math.random() * 1000000 + 1);
      const newRandomAlbumID = Math.floor(Math.random() * 1000000 + 1);
      row.id = newRandomID;
      row.albumId = newRandomAlbumID;
      return row;
    });
    SetTableData(newTableToSet);
  }

  function editRow(row: ITableResponseElementWtihEdit): void {
    const newTableToSet = tableData.map((dataRow) => {
      dataRow.title === row.title && dataRow.isBeingEdited === false
        ? (dataRow.isBeingEdited = true)
        : (dataRow.isBeingEdited = false);
      return dataRow;
    });
    SetTableData(newTableToSet);
  }

  return (
    //   Width has been set to 66% due to requiremnt for it "not‌‌ exceed‌‌ 2/3‌‌ of‌‌ the‌‌ page‌‌ width". Padding is just for simple centering.
    <Box sx={{ width: "66%", paddingTop: "20px", paddingLeft: "17%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <h1 style={{ paddingTop: "20px" }}>
          {engageIDChange ? "IDs are Rotating" : "IDs are not Rotating"}
        </h1>
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 650 }}
            aria-label="simple test table"
            size="medium"
          >
            <TableHead>
              <TableRow>
                <TableCell> Title </TableCell>
                <TableCell align="right">Album&nbsp;ID</TableCell>
                <TableCell align="right">ID</TableCell>
                <TableCell align="right">URL</TableCell>
                <TableCell align="right">Thumbnail</TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      key={row.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {/* This field currently doesn't save the value when refreshing/changing pages but matches the requirement, as there's not explicit process for the data I have left it as it is */}
                        <TextField
                          disabled={!row.isBeingEdited}
                          defaultValue={row.title}
                          multiline
                          variant="standard"
                        />
                      </TableCell>
                      <TableCell align="right">{row.albumId}</TableCell>
                      <TableCell align="right">{row.id}</TableCell>
                      <TableCell align="right">{row.url}</TableCell>
                      {/* I choosed to display one of the urls as an image as it would make elements of the table easier to distinguish */}
                      <TableCell align="right">
                        <img src={row.thumbnailUrl}></img>
                      </TableCell>
                      <TableCell>
                        <Button variant="outlined" onClick={() => editRow(row)}>
                          {row.isBeingEdited ? "Done" : "Edit"}
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="outlined"
                          color="error"
                          onClick={() => removeRow(row)}
                        >
                          Remove
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          // Not required but options were easily implemented with Material's documentation.
          rowsPerPageOptions={[20, 40, 60, 80, 100]}
          component="div"
          count={tableData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
