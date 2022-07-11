import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { ButtonText, Colors, InnerContainer, Line, MsgBox, PageLogo, PageTitle, StyledButton, StyledContainer, StyledFormArea, Subtitle } from '../../components/Styles'
import { Formik } from 'formik'
import CustomInput from '../../components/CustomInput'
import {Fontisto} from '@expo/vector-icons';


const { dirkLight, primary } = Colors;

const Register = () => {
  const [hidePassword, setHidePassword] = useState(true)
  return (
    <StyledContainer>
        <InnerContainer>
            <PageLogo source={require('../../../assets/logo.jpg')} />
            <PageTitle>ArNa</PageTitle>
            <Subtitle>Register</Subtitle>
            <Formik 
                initialValues={{email:"", username:"", password:""}}
                onSubmit={(values)=>{
                    console.log(values);
                }}
            >
                {({handleChange, handleBlur, handleSubmit,values})=><StyledFormArea>
                    <CustomInput
                        label="Email Address"
                        icon="mail"
                        placeholder="mail@gmail.com"
                        placeholderTextColor={dirkLight}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        values={values.email}
                        keyboardType="email-address"
                    />
                    <CustomInput
                        label="Username"
                        icon="person"
                        placeholder="Username"
                        placeholderTextColor={dirkLight}
                        onChangeText={handleChange('username')}
                        onBlur={handleBlur('username')}
                        values={values.username}
                    />
                    <CustomInput
                        label="Password"
                        icon="lock"
                        placeholder="password"
                        placeholderTextColor={dirkLight}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        values={values.password}
                        secureTextEntry={hidePassword}
                        isPassword={true}
                        hidePassword={hidePassword}
                        setHidePassword={setHidePassword}
                    />
                    <MsgBox>...</MsgBox>
                    <StyledButton>
                        <ButtonText>Register</ButtonText>
                    </StyledButton>
                    <Line/>
                    <StyledButton google={true} onPress={()=>{}}>
                        <Fontisto name='google' color={primary} size={25} />
                        <ButtonText google={true}>Signin with google</ButtonText>
                    </StyledButton>
                    </StyledFormArea>}
            </Formik>
        </InnerContainer>
    </StyledContainer>
  )
}

export default Register

const styles = StyleSheet.create({})