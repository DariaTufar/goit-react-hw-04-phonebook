import styled from 'styled-components';

export const ContactItem = styled.div`
display: flex;
flex-direction: row;
align-items: center;
  font-size: ${p => p.theme.fontSizes.m};

  min-width: ${p => p.theme.sizes.xxxl};
  color: ${p => p.theme.colors.textAccent};
  background: ${p => p.theme.colors.bgLight};
  border-radius: ${p => p.theme.radii.sm};
  margin-top: ${p => p.theme.sizes.m};
  margin-bottom: ${p => p.theme.sizes.m};
 
  border: ${p => p.theme.borders.accent};
`;

export const Icon = styled.div`
 display: flex;
 align-items: center;
 
`;

export const ContactNumber = styled.span`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: bold;
  margin-left: ${p => p.theme.sizes.xl};
`;


export const ButtonDelete = styled.button`
  margin-right: auto;
  margin-left: ${p => p.theme.sizes.xl};
  margin-top: ${p => p.theme.sizes.m};
  margin-bottom: ${p => p.theme.sizes.m};
  padding: ${p => p.theme.space[3]}px;
  min-width: ${p => p.theme.sizes.xl};
  border: none;
  outline: none;
  border-radius: ${p => p.theme.radii.md};
  color: ${p => p.theme.colors.textPrimary};
  background-color: ${p => p.theme.colors.delete};
  font-weight: bold;
  font-size: ${p => p.theme.fontSizes.m};
  cursor: pointer;
`;

 