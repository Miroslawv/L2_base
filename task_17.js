function cache(func) {
    let store = {};

    return function (...args)
    {
        let key = JSON.stringify(args);
        if (key in store)
        {
            return store[key];
        }
        else
        {
            let result = func(...args);
            store[key] = result;
            return result;
        }
    };
}