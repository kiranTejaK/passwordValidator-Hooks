import {useState} from 'react'

import {
  MainContainer,
  InnerContainer,
  Heading,
  Text,
  Input,
  ErrorText,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')

  const onChangeInput = event => {
    setPassword(event.target.value)
  }
  const errMsg =
    password.length >= 8 ? '' : 'Your password must be at least 8 characters'
  return (
    <MainContainer>
      <InnerContainer>
        <Heading>Password Validator</Heading>
        <Text>Check how strong and secure is your password</Text>
        <Input type="password" value={password} onChange={onChangeInput} />
        <ErrorText>{errMsg}</ErrorText>
      </InnerContainer>
    </MainContainer>
  )
}

export default PasswordValidator
