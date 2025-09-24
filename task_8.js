function expandedForm(num) {
    let str = String(num);
    let result = [];
    for (let i = 0; i < str.length; i++)
    {
        let j = str[i];
        if (j != '0')
        {
            let zero = str.length - i - 1;
            result.push(j + '0'.repeat(zero));
        }
    }
    return result.join(' + ');
}