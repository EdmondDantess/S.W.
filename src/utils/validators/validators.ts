export type FieldValidatorType = (value: string) => string | undefined

export const requered: FieldValidatorType = (value) => {
    if (value) {
        return undefined
    } else {
        return 'Field is required'
    }
}

export const maxLengthCreator = (maxLength: number): FieldValidatorType => (value) => {
    if (value.length > maxLength) {
        return (`Max length ${maxLength} symbols`)
    } else {
        return undefined
    }
}


