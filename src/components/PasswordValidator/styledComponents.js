import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #24263c;
`
export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  width: 600px;
  background-color: #383a4e;
  border-radius: 10px;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 39px;
  color: #fff;
  padding: 10px;
  font-weight: 500;
`
export const Text = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: #f8fafc;
  padding: 10px;
`

export const Input = styled.input`
  padding: 10px;
  background-color: #edeeff;
  border: 0;
`
export const ErrorText = styled.p`
  font-family: 'Roboto';
  color: #ef4444;
  font-size: 12px;
`
