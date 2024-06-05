// Function to count the number of full days before New Year
export function getFullDaysBeforeNewYear(date, month) {
    if (typeof date !== 'number' || typeof month !== 'number' || date <= 0 || month <= 0 || isNaN(date) || isNaN(month) || !isFinite(date) || !isFinite(month)) {
        return null;
    }
    const now = new Date();
    const currentYear = now.getFullYear();
    const inputDate = new Date(currentYear, month - 1, date);
    if (inputDate.toString() === 'Invalid Date') {
        return null;
    }
    const newYear = new Date(currentYear + 1, 0, 1);
    const diffTime = newYear - inputDate;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

// Function to format a date with weekday name
export function formatWithWeekday(date) {
    if (!date || !(date instanceof Date) || isNaN(date)) {
        return '';
    }
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const weekday = weekdays[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${weekday}, ${day}, ${month} ${year}`;
}

// Function to check if a date is valid
export function isValidDate(date) {
    return date instanceof Date && !isNaN(date);
}

// Function to check if a date is after another date
export function isAfter(date, dateToCompare) {
    if (!isValidDate(date) || !isValidDate(dateToCompare)) {
        return false;
    }
    return date > dateToCompare;
}

// Function to format distance to now
export function formatDistanceToNow(date) {
    if (!date || !(date instanceof Date) || isNaN(date)) {
        return 'Date is unknown';
    }
    const now = new Date();
    const diffMillis = now - date;
    const diffSeconds = Math.floor(diffMillis / 1000);
    const diffMinutes = Math.floor(diffSeconds / 60);
    const diffHours = Math.floor(diffMinutes / 60);

    if (diffSeconds < 30) {
        return 'less than a minute';
    }
    if (diffSeconds < 90) {
        return '1 minute';
    }
    if (diffMinutes < 45) {
        return `${diffMinutes} minutes`;
    }
    if (diffMinutes < 90) {
        return 'about 1 hour';
    }

    const formatNumber = (num) => num.toString().padStart(2, '0');
    const day = formatNumber(date.getDate());
    const month = formatNumber(date.getMonth() + 1);
    const year = date.getFullYear();
    const hours = formatNumber(date.getHours());
    const minutes = formatNumber(date.getMinutes());
    const seconds = formatNumber(date.getSeconds());

    return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
}
