import checkPropTypes from 'check-prop-types';

/**
 * Return node(s) with the given data-test attribute.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper.
 * @param {string} val -Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */


export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test='${val}']`)
}


//Unit test mühütündə propTypes-ları yoxlamaq üçün istifadə edilir
// Aldığı məlumatlar: typeSpecs: any, values: any, location: string, componentName: string

export const checkProps = (component, confirmingProps) => {
    const propError = checkPropTypes(
        component.propTypes,
        confirmingProps,
        'prop',
        component.name);
    expect(propError).toBeUndefined();
}


