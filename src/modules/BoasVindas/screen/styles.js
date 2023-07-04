import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    min-height: 100%;
    align-items: center;
    justify-content: space-evenly;
    padding: 24px;
`;

export const CardContainer = styled.View`
    border-radius: 8px;
    position: relative;
    box-shadow: 2px 5px 5px #484d566d;
    padding: 24px;
    display: contents;
    background: #ffffff;
`;

export const Title = styled.Text`
    color: #484d56;
    font-weight: bold;
`;

export const Button = styled.TouchableOpacity`
    background: #26A7F2;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    border-radius: 8px;
    width: 100%;
    height: 72px;
`;

export const ButtonText = styled.Text`
    color: #ffffff;
    margin: 0 0 0 18px;
`;