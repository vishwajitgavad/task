function calculate(string) {

    const arr = []

    const result = []

    for (let i = 0; i < string.length; i++) {
        arr.push(string[i])
    }
    for (let i = 0; i < arr.length; i++) {
        let letter = arr[i]
        const x = arr.filter(item => item == letter)
        result.push(x)
    }
    for (let i = 0; i < result.length; i++) {
        console.log(result[i], "=", result[i].length);
    }
}
calculate("hello");