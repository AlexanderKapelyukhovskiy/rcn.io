import React from 'react'

//logs component's rendering time in MS
const logRenderPerf = function(WrappedComp, name = '<Unknown Component Name>') {
  return class RenderPerf extends React.Component {
    constructor(props) {
      super(props)
      this.whenRenderStarted = 0
    }

    componentDidMount() {
      const now = +new Date()
      console.info(`  ${name} rendred in: ` + (now - this.whenRenderStarted) + 'ms') // eslint-disable-line  no-console
    }

    componentDidUpdate() {
      const now = +new Date()
      console.info(`  ${name} re-rendred in: ` + (now - this.whenRenderStarted) + 'ms') // eslint-disable-line  no-console
    }

    render() {
      this.whenRenderStarted = +new Date()
      return <WrappedComp {...this.props}/>
    }
  }
}


export {
  logRenderPerf
}
