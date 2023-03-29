import styled from 'styled-components/native';

export const Overlay = styled.KeyboardAvoidingView`
  align-items: stretch;
  justify-content: center;
  flex: 1;
  padding: 0 24px;
  background: rgba(0, 0, 0, .6);
`;

export const ModalBody = styled.View`
  border-radius: 8px;
  padding: 24px;
  background: #fafafa;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Form = styled.View`
  margin-top: 32px;
`;

export const Input = styled.TextInput`
  margin-bottom: 24px;
  border: 1px solid rgba(204, 204, 204, .5);
  border-radius: 8px;
  padding: 16px;
  background: #ffffff;
`;
