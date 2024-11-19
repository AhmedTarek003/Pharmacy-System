const now = new Date();

const weekStart = new Date(now);
weekStart.setDate(now.getDate() - now.getDay() - 1);
weekStart.setHours(0, 0, 0, 0);

const weekEnd = new Date(now);
weekEnd.setDate(now.getDate() + (5 - now.getDay()));
weekEnd.setHours(23, 59, 59, 999);

const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
startOfMonth.setHours(0, 0, 0, 0);

const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
endOfMonth.setHours(23, 59, 59, 999);

module.exports = { weekStart, weekEnd, startOfMonth, endOfMonth };
