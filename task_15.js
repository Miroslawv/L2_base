function howManyTimes(time1,time2)
{
    let start = new Date(time1);
    let end = new Date(time2);
    let count = 0;

    while (start < end)
    {
        let h = start.getHours() % 12;
        if (start.getMinutes() == 0 && start.getSeconds() >= 0 && start.getSeconds() < (h == 0 ? 12 : h))
        {
            count++;
        }
        else if (start.getMinutes() == 30 && start.getSeconds() == 0)
        {
            count++;
        }
        start.setSeconds(start.getSeconds() + 1);
    }

    return count;

}
