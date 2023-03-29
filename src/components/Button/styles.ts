import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius: 48px;
  padding: 14px 24px;
  background: ${({disabled}) => disabled ? '#999' : '#D73035'};
`;
