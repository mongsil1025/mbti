import {
  Alert,
  AlertTitle,
  Box,
  Button,
  IconButton,
  Stack,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

interface HeaderProps {
  link: string;
}

export const Header = (props: HeaderProps) => {
  function copy() {
    navigator.clipboard.writeText(props.link);
  }

  return (
    <>
      <Alert severity="success">
        <AlertTitle>Hello👋 주소를 복사해두세요!</AlertTitle>
        <Button
          size="small"
          // variant="contained"
          endIcon={<ContentCopyIcon fontSize="small" />}
          onClick={copy}
        >
          URL 복사하기
        </Button>
      </Alert>
    </>
  );
};
