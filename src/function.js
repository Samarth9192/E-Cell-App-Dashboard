export function secTominsec(second) {
    let min = ""
    let sec = ""
    if (isNaN(second) || second < 0) {
        return "00:00";
    }
    const minute = Math.floor(second / 60);
    const remaining_second = Math.floor(second % 60);
    if (minute < 10) {
        min = '0' + minute
    } else {
        min = minute
    }
    if (remaining_second < 10) {
        sec = '0' + remaining_second
    } else {
        sec = remaining_second
    }
    return `${min}:${sec}`;
}