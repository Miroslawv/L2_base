function whatCentury(year)
{
    let c = Math.ceil(year / 100);

    let suffix = "th";
    if (c % 10 == 1 && c % 100 != 11) {
        suffix = "st";
    } else if (c % 10 == 2 && c % 100 != 12) {
        suffix = "nd";
    } else if (c % 10 == 3 && c % 100 != 13) {
        suffix = "rd";
    }

    return c + suffix;
}