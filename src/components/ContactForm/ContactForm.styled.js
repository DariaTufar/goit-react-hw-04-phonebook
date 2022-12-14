import styled from 'styled-components';
import { Field } from 'formik';

export const ErrorText = styled.div`
  color: orangered;
`;

export const InputTitle = styled.label`
  display: block;
  font-weight: bold;
 
  font-size: ${p => p.theme.fontSizes.m};
`;

export const InputText = styled(Field)`
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.fontSizes.l};
  min-width: ${p => p.theme.sizes.xxxl};
  color: ${p => p.theme.colors.textPrimary};
  background: ${p => p.theme.colors.bgPrimary};
  border-radius: ${p => p.theme.radii.sm};
`;

export const ButtonForm = styled.button`
  display: block;
  margin-right: auto;
  margin-left: auto;
  margin-top: ${p => p.theme.sizes.m};
  margin-bottom: ${p => p.theme.sizes.m};
  padding: ${p => p.theme.space[3]}px;
  min-width: ${p => p.theme.sizes.xl};
  border: none;
  outline: none;
  border-radius: ${p => p.theme.radii.md};
  color: ${p => p.theme.colors.textPrimary};
  background-color: ${p => p.theme.colors.bgButton};
  font-weight: bold;
  font-size: ${p => p.theme.fontSizes.m};
  cursor: pointer;
`;

 