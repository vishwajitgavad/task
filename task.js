function calculate(string) {

    const arr = []
    const result = []
    const freq = []

    for (let i = 0; i < string.length; i++) {
        arr.push(string[i])
    }
    for (let i = 0; i < arr.length; i++) {
        let letter = arr[i]
        const x = arr.find(item => item == letter)
        if (!result.includes(letter)) {
            result.push(...x)
        }
    }
    result.map(item => {

        freq.push(arr.filter(arg => item == arg).length)
    })
    for (let i = 0; i < result.length; i++) {
        console.log(result[i], "=", freq[i]);
    }
}
calculate("akshay");