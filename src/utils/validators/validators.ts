export const requered = (value: any) => {
    if (value) {
        return undefined
    } else {
        return 'Field is required'
    }
}

export const maxLengthCreator = (maxLength: any) => (value: any) => {
    if (value.length > maxLength) {
        return `Max length ${maxLength} symbols`
    } else {
        return undefined
    }
}


