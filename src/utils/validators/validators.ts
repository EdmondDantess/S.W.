export const requered = (value: any) => {
    if (value) {
        return null
    } else {
        return 'Field is required'
    }
}

export const maxLengthCreator = (maxLength: number) => (value: any) => {
    if (value.length > maxLength) {
        return (`Max length ${maxLength} symbols`)
    } else {
        return null
    }
}


