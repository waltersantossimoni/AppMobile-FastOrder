import { Platform } from 'react-native';
import styled from 'styled-components/native';

const isAndroid = Platform.OS === 'android';

export const CategoryContainer = styled.TouchableOpacity`
  align-items: center;
  margin-left: 24px;
`;

export const Icon = styled.View`
  align-items: center;
  justify-content: center;
  background: #fff;
  width: 44px;
  height: 44px;
  margin-bottom: 8px;
  border-radius: 22px;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, ${isAndroid ? 1 : .1});
  elevation: 2
`;
