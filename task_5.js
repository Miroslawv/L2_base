function primeFactors(n){
    let result = "";
    let i = 2;
    let factors = {};

    while (i <= n)
    {
        if (n % i == 0)
        {
            if (!factors[i])
            {
                factors[i] = 1;
            } else
            {
                factors[i]++;
            }
            n = n / i;
        }
        else
        {
            i++;
        }
    }

    for (let key in factors)
    {
        if (factors[key] == 1)
        {
            result += `(${key})`;
        } else
        {
            result += `(${key}**${factors[key]})`;
        }
    }

    return result;
}