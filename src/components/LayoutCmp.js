import {Component} from 'react'
import Header from './HeaderCmp'
import Footer from './FooterCmp.js'

class LayoutCmp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showFooter: true,
      showHeader: true,
      headerProps: {}
    }
  }

  renderHeader(headerProps) {
    return <Header props={headerProps}></Header>
  }

  renderFooter() {
    return <Footer />
  }

  render() {
    const {children, showHeader, showFooter, headerProps} = this.props

    return (
      <>
        {showHeader && this.renderHeader(headerProps)}
        {children}
        {showFooter && this.renderFooter()}
      </>
    )
  }
}

LayoutCmp.defaultProps = {
  showFooter: true,
  showHeader: true,
  showLeftSidebar: true
}

export default LayoutCmp
