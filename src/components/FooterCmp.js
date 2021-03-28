import styled from 'styled-components'

const FooterStyledCmp = styled.footer`
  position: fixed;
  bottom: 0px;
  padding: 10px;
  right: 0;
  text-align: center;
  left: 0;
  color: #ff4338;
  font-weight: bold;
`

const FooterCmp = () => (
  <FooterStyledCmp>
    <div className='footer-wrapper'>
      <span>© 2021 billie.</span>
    </div>
  </FooterStyledCmp>
)

export default FooterCmp
