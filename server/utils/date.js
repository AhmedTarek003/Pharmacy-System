const now = new Date();

// 1. تحديد أول الأسبوع (السبت)
const weekStart = new Date(now);
weekStart.setDate(now.getDate() - now.getDay() - 1); // 1 يمثل السبت (نطرح 1 لنصل إلى السبت السابق)
weekStart.setHours(0, 0, 0, 0); // تعيين الوقت إلى منتصف الليل

// 1. تحديد نهاية الأسبوع (الجمعة)
const weekEnd = new Date(now);
weekEnd.setDate(now.getDate() + (5 - now.getDay())); // 5 يمثل الجمعة
weekEnd.setHours(23, 59, 59, 999); // تعيين الوقت إلى نهاية اليوم

// 1. تحديد أول الشهر
const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1); // أول يوم في الشهر
startOfMonth.setHours(0, 0, 0, 0); // تعيين الوقت إلى منتصف الليل

// 2. تحديد آخر الشهر
const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0); // آخر يوم في الشهر
endOfMonth.setHours(23, 59, 59, 999); // تعيين الوقت إلى نهاية اليوم

module.exports = { weekStart, weekEnd, startOfMonth, endOfMonth };
