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

        <Stack direction="row" alignItems="center">
          <span>{props.link}</span>
          <IconButton aria-label="copy" size="small" onClick={copy}>
            <ContentCopyIcon fontSize="small" />
          </IconButton>
        </Stack>
      </Alert>
    </>
  );
};
