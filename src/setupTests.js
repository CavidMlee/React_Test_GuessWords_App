// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

//enzyme
import Enzyme from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';


//Bütün test componentlərində çağırmamaq üçün yalnız burada çağrılır və beləcə digər yerlərdə çağırmağa ehtiyac olmur.
// set up enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() })