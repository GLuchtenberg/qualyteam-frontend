export default values => {
    let errors = {}
    const errorMessages = {
        required: 'Campo obrigatório',
        alphanumeric: 'O campo só aceita letras e números',
        atLeastOne: 'Deve você deve selecionar pelo menos uma opção'
    }
    if (!values.title) {
        errors.title = errorMessages['required']
    }
    
    if (/([^0-9a-zA-Z])/.test(values.code)) {
        errors.code = errorMessages['alphanumeric']
    }
    if (!values.code) {
        errors.code = errorMessages['required']
    }
    
    if (!values.categoryId) {
        errors.categoryId = errorMessages['required']
    }
    
    if (!values.documentDepartments.length) {
        errors.documentDepartments = errorMessages['atLeastOne']
    }
    return errors;
}