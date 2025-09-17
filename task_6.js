function toWeirdCase(string){
    let words = string.split(" ");
    let result = [];

    for (let word of words)
    {
        let newWord = "";
        for (let i = 0; i < word.length; i++)
        {
            if (i % 2 == 0)
            {
                newWord += word[i].toUpperCase();
            }
            else
            {
                newWord += word[i].toLowerCase();
            }
        }
        result.push(newWord);
    }

    return result.join(" ");
}