function findMissing(list) {
    let a = list[1] - list[0];
    let b = list[2] - list[1];
    let c;

    if (a == b)
    {
        c = a;
    } else if (a == list[2] - list[1])
    {
        c = a;
    } else {
        c = b;
    }

    for (let i = 0; i < list.length - 1; i++)
    {
        if (list[i + 1] - list[i] != c)
        {
            return list[i] + c;
        }
    }
}