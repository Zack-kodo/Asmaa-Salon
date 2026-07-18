/**
 * 📋 كود Google Apps Script
 * حطو فـ Extensions → Apps Script فـ Google Sheet ديالك
 */

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

  // البيانات اللي جاية من الفورم
  var data = JSON.parse(e.postData.contents);

  // نزيدو صف جديد فـ Sheet
  sheet.appendRow([
    new Date(),                    // التاريخ والوقت
    data.name,                     // الاسم
    data.phone,                    // الهاتف
    data.service,                  // الخدمة
    data.date,                     // التاريخ المفضل
    data.notes                     // ملاحظات
  ]);

  // نرجعو رد ناجح
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}
