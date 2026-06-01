let string = "abbaccus";

const longestPalindrome = (s) => {
    let longest = "";

    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            const substring = s.slice(i, j);

            const reversed = substring.split("").reverse().join("");

            if (substring === reversed && substring.length > longest.length) {
                longest = substring;
            }
        }
    }

    return longest;
};

console.log(longestPalindrome(string));