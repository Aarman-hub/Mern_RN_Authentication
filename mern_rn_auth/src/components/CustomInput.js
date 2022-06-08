import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import { Colors, LeftIcon, RightIcon, StyledInputLabel, StyledTextInput } from './Styles'
import { Octicons, Ionicons } from '@expo/vector-icons'


const {brand, dirkLight} = Colors;

const CustomInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) => {
// const [hidePassword, setHidePassword] = useState(true)    


    return (
        <View>
        <LeftIcon>
            <Octicons name={icon} size={30} color={brand} />
        </LeftIcon>
        <StyledInputLabel>{label}</StyledInputLabel>
        <StyledTextInput {...props} />
        {isPassword && (
            <RightIcon onPress={()=>setHidePassword(!hidePassword)}>
                <Ionicons color={dirkLight} size={30} name={hidePassword ? 'md-eye-off':'md-eye'} />
            </RightIcon>
        )}
        </View>
    )
}

export default CustomInput
