import styled from 'styled-components/native';

export const ProductContainer = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
`;

export const ProductImage = styled.Image`
  width: 120px;
  height: 96px;
  border-radius: 8px;
`;

export const ProductDetails = styled.View`
  flex: 1;
  margin-left: 16px;
`;

export const Separator = styled.View`
  width: 100%;
  height: 1px;
  margin: 24px 0;
  background: rgba(204, 204, 204, .3);
`;

export const AddToCartButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 0;
  right: 0;
`;
