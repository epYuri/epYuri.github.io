// 定义一个函数，用于更新时钟显示
// noinspection SpellCheckingInspection
function updateClock() {
    // 获取当前的日期和时间
    const now = new Date();
    // 获取当前的小时数，并确保它是两位数（例如，'09'而不是'9'）
    const hours = String(now.getHours()).padStart(2, '0');
    // 获取当前的分钟数，并确保它是两位数
    const minutes = String(now.getMinutes()).padStart(2, '0');
    // 获取当前的秒数，并确保它是两位数
    const seconds = String(now.getSeconds()).padStart(2, '0');
    // 将小时、分钟和秒数组合成一个字符串，格式为"HH:MM:SS"
    const timeString = `${hours}:${minutes}`;
    // 将组合好的时间字符串设置为id为'time'的元素的文本内容
    document.getElementById('time').textContent = timeString;
    // 使用setTimeout函数设置下一次更新的时间
    // 1000毫秒（1秒）之后再次调用updateClock函数
    // now.getTime() % 1000用于计算当前时间距离下一秒的毫秒数，从而确保setTimeout的延迟时间刚好在下一秒开始时执行
    setTimeout(updateClock, 1000 - now.getTime() % 1000);

    // 获取年份
    const year = now.getFullYear();
    // 获取月份，月份是从0开始的，所以需要加1
    const month = now.getMonth() + 1;
    // 获取日期
    const day = now.getDate();
    // 获取星期几，星期天是0，星期一是1，以此类推，需要加1
    const dayOfWeek = now.getDay();
    // 将星期几转换为中文表示
    const daysOfWeek = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
    const week = daysOfWeek[dayOfWeek];
    document.getElementById('dateInfo').innerHTML = `${month} 月 ${day} 日 ${week}`;

}

// 调用updateClock函数，初始化时钟显示
updateClock();