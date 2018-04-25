import React from 'react'
import { shallow } from 'enzyme'
import Simple from 'root/components/Simple'

describe('<Simple />', () => {
  it('should render successfully', () => {
    const renderedComponent = shallow(<Simple />)
    expect(renderedComponent).toMatchSnapshot()
  })
})