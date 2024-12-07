const now = new Date();

const weekStart = new Date(now);
const dayOfWeek = now.getDay();

const diffToSaturday = (dayOfWeek + 1) % 7;
weekStart.setDate(now.getDate() - diffToSaturday);
weekStart.setHours(0, 0, 0, 0);

const weekEnd = new Date(weekStart);
weekEnd.setDate(weekStart.getDate() + 6);
weekEnd.setHours(23, 59, 59, 999);

const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
startOfMonth.setHours(0, 0, 0, 0);

const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
endOfMonth.setHours(23, 59, 59, 999);

module.exports = { weekStart, weekEnd, startOfMonth, endOfMonth };
