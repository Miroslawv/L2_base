function hasTwoCubeSums(n) {
    const list = [];
    const limit = Math.floor(Math.cbrt(n));

    for (let i = 1; i <= limit; i++) {
        for (let j = i; j <= limit; j++) {
            if (i ** 3 + j ** 3 == n) {
                list.push([i, j]);
                if (list.length == 2) {
                    return true;
                }
            }
        }
    }
    return false;
}
