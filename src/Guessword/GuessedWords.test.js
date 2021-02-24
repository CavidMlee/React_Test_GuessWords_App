import React from 'react';
import { shallow } from 'enzyme';
import { checkProps, findByTestAttr } from '../../test/testUtils';
import GuessedWords from './GuessedWords';

const defaultProps = {
    guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }]
}

const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props }
    return shallow(<GuessedWords {...setupProps} />)
}

test('does not throw warning with expected props', () => {
    checkProps(GuessedWords, defaultProps);
})

describe('if there are no words guessed', () => {
    let wrapper
    //eyni wrapper-i birneçə yerdə işlədəcəyimiz üçün onu `beforeEach`-də tanıdıb bu describe daxilində hər testdə istifadə edə bilərik.
    beforeEach(() => {
        wrapper = setup({ guessedWords: [] })
    })

    test("renders without error", () => {
        const component = findByTestAttr(wrapper, "component-guessed-words");
        expect(component.length).toBe(1)
    });

    test("renders inustructions to guess a word", () => {
        const instructions = findByTestAttr(wrapper, "guess-instructions")
        expect(instructions.text().length).not.toBe(0)
    })
})

describe('if there are words guessed', () => {

})