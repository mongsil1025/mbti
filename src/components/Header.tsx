import { Alert } from "@aws-amplify/ui-react";

interface HeaderProps {
  email?: string;
}

export const AlertHeadingExample = (props: HeaderProps) => {
  return (
    <>
      <Alert variation="success" heading={`Hello👋 ${props.email}`}>
        This is your Mbti Maps
      </Alert>
    </>
  );
};
