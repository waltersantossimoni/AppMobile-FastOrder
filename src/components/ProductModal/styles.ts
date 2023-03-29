import styled from 'styled-components/native';

export const Image = styled.ImageBackground`
  align-items: flex-end;
  width: 100%;
  height: 200px;
`;

export const CloseButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  margin: 24px;
  border-radius: 16px;
  background: rgba(0, 0, 0, .5);
`;

export const ModalBody = styled.View`
  flex: 1;
  padding: 32px 24px 0;
  background: #fafafa;
`;

export const Header = styled.View`

`;

export const IngredientsContainer = styled.View`
  flex: 1;
  margin-top: 32px;
`;

export const Ingredient = styled.View`
  align-items: center;
  flex-direction: row;
  margin-bottom: 4px;
  border: 1px solid rgba(204, 204, 204, .3);
  border-radius: 8px;
  padding: 16px;
`;

export const Footer = styled.View`
  min-height: 110px;
  padding: 16px 24px;
  background: #fff;
`;

export const FooterContainer = styled.SafeAreaView`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const PriceContainer = styled.View`

`;
