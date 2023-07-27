import { styled } from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    width: auto;
    background: #f3f3f3;
    align-items: center;
    padding: 24px;
    position: relative;
`;

export const ImagesContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 70px;
`;

export const ImageTaked = styled.Image`
    min-width: 45%;
    min-height: 145px;
    margin: 8px;
`;

export const TakePhotobutton = styled.TouchableOpacity`
    width: 100%;
    margin-top: 8px;
    margin-bottom: 24px;
    padding: 12px;
    background-color: #2196F3;
    border-radius: 8px;
    align-items: center;
`;

export const SendButton = styled.TouchableOpacity`
    width: 100%;
    height: 45px;
    justify-content: center;
    margin-top: 24px;
    padding: 12px;
    background-color: #2196F3;
    border-radius: 8px;
    align-items: center;
`;

export const FooterContainer = styled.View`
    flex: 1;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
`;