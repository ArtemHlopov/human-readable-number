module.exports = function toReadable(number) {
    let num = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    let ten = [
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let doz = [
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    let str = "";
    if (String(number).length == 3) {
        str = String(number).endsWith("00")
            ? `${num[String(number)[0]]} hundred`
            : String(number).endsWith("0")
            ? `${num[String(number)[0]]} hundred ${doz[String(number)[1] - 1]}`
            : String(number)[1] === "0"
            ? `${num[String(number)[0]]} hundred ${num[String(number)[2]]}`
            : String(number)[1] === "1"
            ? `${num[String(number)[0]]} hundred ${ten[String(number)[2] - 1]}`
            : `${num[String(number)[0]]} hundred ${
                  doz[String(number)[1] - 1]
              } ${num[String(number)[2]]}`;
    } else if (String(number).length == 2) {
        str =
            String(number)[1] === "0"
                ? doz[String(number)[0] - 1]
                : String(number)[0] === "1"
                ? ten[String(number)[1] - 1]
                : `${doz[String(number)[0] - 1]} ${num[String(number)[1]]}`;
    } else {
        str = num[number];
    }
    return str;
};
