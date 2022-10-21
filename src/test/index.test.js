/* eslint-disable react/react-in-jsx-scope */
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { shallow } from 'enzyme';
import Nav from '../components/Nav';
import { keys } from '../utils/keys';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { toCaps } from '../utils/formatter';
import {spy} from 'sinon';
const mySystemOs = 'dark';
const currentTheme = localStorage.getItem(keys.localStorageKeysPrefix+keys.themeKey) ?? mySystemOs ;
const getTitle = (title) => `${toCaps(title)} Mode`;
const toggleButton = (curr)=>{
  return curr==='dark'?'light':'dark';
}
const theme = {
  palette:{
    mode:currentTheme
  }
}
const colorMode = {
  toggleColorMode:()=>{
    // theme.palette.mode=toggleButton(theme.palette.colorMode)

  }
}
describe(`System Os(${mySystemOs}) Theme`,()=>{

  const wrapper = shallow(<Nav theme={theme} colorMode={spy()} />);
  const icon = theme.palette.mode==="dark"?<Brightness7Icon /> :<Brightness4Icon />
  
  it("Get Os Based Theme",()=>{
      expect(wrapper.contains(icon)).toBeTruthy();
  })

  it("Title Check for System Os",()=>{
    // console.log(wrapper.debug());
    const currTitle = getTitle(theme.palette.mode);
    const title = wrapper.text().slice(9);
    expect(title).toBe(currTitle);

  })

  it("Toggle Theme",()=>{
      
      const button = wrapper.find('.id-test-toggle');
      button.simulate('click');
      theme.palette.mode = toggleButton(theme.palette.mode);
      const currTitle = getTitle(theme.palette.mode);
      const title = wrapper.text().slice(9);
      expect(currTitle).toBe(title);
  })

})