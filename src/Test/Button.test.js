import React from 'react'
import {shallow} from 'enzyme'
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import New_Post from '../Components/New_Post'

Enzyme.configure({ adapter: new Adapter() })


it(` it shouldn't submit with empty  input fields` , ()  =>{
    const wrapper = shallow(<New_Post/>)
    const element = wrapper.find('button').text()

    expect(element).toBe('Publish')
})
