export const getDate = (unixTime) => {
    const formatDate = new Date(unixTime);
    const day = formatDate.getDate();
    const month = formatDate.getMonth() + 1;
    const year = formatDate.getFullYear();

    return {day, month, year}
}
