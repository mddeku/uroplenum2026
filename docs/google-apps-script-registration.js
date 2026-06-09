const SHEET_ID = "1ySuq3WCHPIPtSGHT84pOEjoQP1P4N13-p4z0QhsAxlE";
const SHEET_NAME = "Registrations";

function doPost(e) {
  const data = JSON.parse((e.postData && e.postData.contents) || "{}");
  const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
    sheet.appendRow([
      "Дата отправки",
      "ФИО",
      "ИИН",
      "Место работы",
      "Номер телефона",
      "Мероприятие"
    ]);
  }

  sheet.appendRow([
    new Date(),
    data.fullName || "",
    data.iin || "",
    data.workplace || "",
    data.phone || "",
    data.event || "UROPLENUM 2026"
  ]);

  return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(
    ContentService.MimeType.JSON
  );
}
