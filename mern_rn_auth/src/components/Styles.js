import styled from 'styled-components/native';
import Constants from 'expo-constants'


const StatusBarHeight = Constants.statusBarHeight;

export const Colors = {
    primary:"#ffffff",
    secondary:"#E5E7EB",
    tertiary:"#1F2937",
    dirkLight:"#9CA3AF",
    brand:"#6D28D9",
    green:"#108981",
    red:"#EF4444",
};

const {primary, secondary, tertiary, dirkLight, brand, green, red} = Colors;

export const StyledContainer = styled.View`
    flex:1;
    padding: 25px;
    padding-top: ${StatusBarHeight + 10}px;
    background-color: ${primary}
`;

export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
`;

export const PageLogo = styled.Image`
    width:250px;
    height: 200px;
`;

export const PageTitle = styled.Text`
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    color: ${brand};
    padding: 10px;
`;

export const Subtitle = styled.Text`
    font-size: 20px;
    margin-bottom: 20px;
    letter-spacing: 1px;
    font-weight: bold;
    color: ${tertiary};
`;

export const StyledFormArea = styled.View`
    width: 90%;
`;

export const StyledTextInput = styled.TextInput`
    background-color: ${secondary};
    padding: 15px;
    padding-left: 50px;
    padding-right: 55px;
    border-radius: 5px;
    font-size: 20px;
    height: 60px;
    margin-vertical:3px;
    margin-bottom: 10px;
    color: ${tertiary};
`;

export const StyledInputLabel = styled.Text`
    color: ${tertiary};
    font-size: 13px;
    text-align: left;
`;

export const LeftIcon = styled.View`
    left:10px;
    top:30px;
    padding-top:5px;
    position:absolute;
    z-index:1;
`;
export const RightIcon = styled.TouchableOpacity`
    right:15px;
    top:30px;
    position:absolute;
    z-index:1;
`;

export const StyledButton = styled.TouchableOpacity`
    padding:15px;
    background-color: ${brand};
    justify-content:center;
    border-radius: 5px;
    margin-vertical: 5px;
    height: 60px;

    ${(props)=> props.google == true && `
        background-color: ${primary};
        flex-direction:row;
        justify-content: center;
    `}
`;

export const ButtonText = styled.Text`
    color: ${primary};
    font-size: 16px;

    ${(props)=> props.google == true && `
        padding: 25px;
    `}
`;

export const MsgBox = styled.Text`
    text-align:center;
    font-size:13px;
`;

export const Line = styled.View`
    height: 1px;
    width: 100%;
    background-color: ${dirkLight};
    margin-vertical: 10px;
`;