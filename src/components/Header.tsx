import { Alert } from "@aws-amplify/ui-react";

interface HeaderProps {
  link: string;
}

export const Header = (props: HeaderProps) => {
  return (
    <>
      <Alert variation="success" heading={`Hello👋 주소를 복사해두세요!`}>
        {props.link}
      </Alert>
    </>
  );
};
