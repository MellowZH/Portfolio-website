import React from 'react';
import Box from '../Box/Box.styled';
import FlexBox from '../Box/FlexBox.styled';

type PageProps = {
  children: React.ReactNode;
};

const Page = ({ children }: PageProps) => {
  return (
    <Box>
      <FlexBox>
        <p>Isabelle H Photograhpy</p>
      </FlexBox>
      {children}
    </Box>
  );
};

export default Page;
