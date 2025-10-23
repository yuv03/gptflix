export const checkValidData = (email, password, name) => {

    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)

    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*?])(?=.{8,})/.test(password)

    const isNameValid = name ? /^[A-Za-z]+(?: [A-Za-z]+){1,2}$/.test(name) : true

    if (name && !isNameValid) return "Name is not valid"

    if (!isEmailValid) return "Email Id is not valid"

    if (!isPasswordValid) return "Password is not valid"

    return null;

}