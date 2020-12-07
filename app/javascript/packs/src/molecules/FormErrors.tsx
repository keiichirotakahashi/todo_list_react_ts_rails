import React, { FC } from 'react';
import { Txt } from '../atoms/Txt';
import styled from 'styled-components';

interface FormErrorsProps {
  formErrors: string[];
}

export const FormErrors: FC<FormErrorsProps> = props => {
  const { formErrors } = props;

  return (
    <>
      {
        formErrors.length === 0 ? '' : (
          <Wrapper>
            {
              formErrors.map((error, index) =>
                <StyledTxt key={index}>{error}</StyledTxt>
              )
            }
          </Wrapper>
        )
      }
    </>
  );
};

const Wrapper = styled.div`
  margin-bottom: 12px;
`;

const StyledTxt = styled(Txt)`
  margin-bottom: 4px;
  color: #eb5a46;
`;
