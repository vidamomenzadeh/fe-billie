import styled from 'styled-components'
import logo from '../assets/logo.png'

const HeaderStyledCmp = styled.div`
  min-height: 80px;
  padding: 10px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  img {
    max-width: 100px;
  }
`
const HeaderTextStyledCmp = styled.div`
  color: #ff4338;
`

const HeaderCmp = () => (
  <HeaderStyledCmp>
    <a href='https://www.optiopay.com/'>
      <img src={logo} alt='Logo' />
    </a>
    <HeaderTextStyledCmp>Frontend Coding Challenge</HeaderTextStyledCmp>
  </HeaderStyledCmp>
)

export default HeaderCmp
