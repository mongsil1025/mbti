import {
  Checkbox,
  IconButton,
  Input,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import { alpha } from "@mui/material/styles";
import { Decision, Energy, LifePattern, Recognition } from "../models";
import { useEffect, useState } from "react";

interface Description {
  data: string;
  display_name: string;
}

interface Mbti {
  uid: string;
  username: string;
  energy: Energy;
  recognition: Recognition;
  decision: Decision;
  life_style: LifePattern;
  descriptions?: string[];
  edit_mode?: boolean;
}

interface MbtiEditParam {
  uid: string;
  username: string;
}

interface MbtiTablePropsListType {
  data: Mbti[];
}

interface EnhancedTableToolbarProps {
  numSelected: number;
}

function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        ""
      )}
      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        ""
      )}
    </Toolbar>
  );
}

interface EnhancedTableProps {
  numSelected: number;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { onSelectAllClick, numSelected, rowCount } = props;
  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        <TableCell>Name</TableCell>
        <TableCell>MBTI</TableCell>
        <TableCell>극단적 단점</TableCell>
        <TableCell>유형별 팩폭</TableCell>
      </TableRow>
    </TableHead>
  );
}

export default function MbtiTable(props: MbtiTablePropsListType) {
  const [selected, setSelected] = useState<readonly string[]>([]);
  const [edited, setEdited] = useState<readonly string[]>([]);
  const [state, setState] = useState(Date.now());

  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = props.data.map((n) => n.uid);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  const onClickEditName = (event: React.MouseEvent<unknown>, uid: string) => {
    const editedIndex = edited.indexOf(uid);
    let newEdited: MbtiEditParam[] = [];

    props.data.forEach((mbti) => {
      if (mbti.uid === uid) {
        mbti.edit_mode = !mbti.edit_mode;
        setState(Date.now());
        return;
      }
    });
  };

  return (
    <Paper sx={{ width: "100%", mb: 2 }}>
      <TableContainer>
        <Table>
          <EnhancedTableHead
            numSelected={selected.length}
            onSelectAllClick={handleSelectAllClick}
            rowCount={props.data.length}
          />
          <TableBody>
            {props.data.map((mbti, index) => {
              const isItemSelected = isSelected(mbti.uid);
              const labelId = `enhanced-table-checkbox-${index}`;
              const ariaLabel = { "aria-label": "description" };

              return (
                <TableRow
                  hover
                  // onClick={(event) => handleClick(event, mbti.uid)}
                  role="checkbox"
                  aria-checked={isItemSelected}
                  tabIndex={-1}
                  key={mbti.uid}
                  selected={isItemSelected}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      color="primary"
                      checked={isItemSelected}
                      onClick={(event) => handleClick(event, mbti.uid)}
                      inputProps={{
                        "aria-labelledby": labelId,
                      }}
                    />
                  </TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    padding="none"
                    sx={{ width: "300px" }}
                  >
                    {mbti.edit_mode ? (
                      <>
                        <Input
                          placeholder="이름"
                          inputProps={ariaLabel}
                          value={mbti.username}
                        />
                        <IconButton aria-label="save">
                          <CheckIcon />
                        </IconButton>
                        <IconButton
                          aria-label="cancel"
                          onClick={(event) => onClickEditName(event, mbti.uid)}
                        >
                          <ClearIcon />
                        </IconButton>
                      </>
                    ) : (
                      <span
                        onClick={(event) => onClickEditName(event, mbti.uid)}
                      >
                        {mbti.username}
                      </span>
                    )}
                  </TableCell>
                  <TableCell>
                    {mbti.energy}
                    {mbti.recognition}
                    {mbti.decision}
                    {mbti.life_style}
                  </TableCell>
                  {mbti.descriptions &&
                    mbti.descriptions.map((description, index) => {
                      const labelId = `enhanced-table-checkbox-${index}`;
                      return <TableCell key={labelId}>{description}</TableCell>;
                    })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <EnhancedTableToolbar numSelected={selected.length} />
    </Paper>
  );
}
