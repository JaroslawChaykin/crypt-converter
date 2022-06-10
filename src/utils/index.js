export const getDate = (unixTime) => {
    const formatDate = new Date(unixTime);
    const day = formatDate.getDate();
    const month = formatDate.getMonth() + 1;
    const year = formatDate.getFullYear();

    return {day, month, year}
}
export const nFormatter = (num) => {
    const lookup = [
        { value: 1, symbol: "" },
        { value: 1e3, symbol: "k" },
        { value: 1e6, symbol: "M" },
        { value: 1e9, symbol: "G" },
        { value: 1e12, symbol: "T" },
        { value: 1e15, symbol: "P" },
        { value: 1e18, symbol: "E" }
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    let item = lookup.slice().reverse().find(item => num >= item.value);
    return item ? (num / item.value).toFixed(1).replace(rx, "$1") + item.symbol : "0";
}