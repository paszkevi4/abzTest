//validator checks if input length is greater than 2 and less than 60 symbols
export const required = (value) => {
    if (value && 60 >= value.length && value.length > 2) return undefined
    return 'error'
}
