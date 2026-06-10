const SHEET_ID = "1ySuq3WCHPIPtSGHT84pOEjoQP1P4N13-p4z0QhsAxlE";
const TARGET_SHEET_NAME = "";
const HEADERS = [
  "Submitted at",
  "Full name",
  "IIN",
  "Place of work",
  "Phone number",
  "Certificate email",
  "Event"
];

function doGet() {
  const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
  const sheet = getTargetSheet(spreadsheet);

  return json({
    ok: true,
    service: "registration",
    spreadsheetId: SHEET_ID,
    sheetName: sheet.getName(),
    lastRow: sheet.getLastRow()
  });
}

function doPost(e) {
  try {
    const data = JSON.parse((e.postData && e.postData.contents) || "{}");
    const fullName = String(data.fullName || "").trim();
    const iin = String(data.iin || "").trim();
    const workplace = String(data.workplace || "").trim();
    const phone = String(data.phone || "").trim();
    const email = String(data.email || "").trim();

    if (!fullName || !iin || !workplace || !phone || !email) {
      return json({ ok: false, error: "Missing required fields." });
    }

    const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
    const sheet = getTargetSheet(spreadsheet);

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
    }

    sheet.appendRow([
      new Date(),
      fullName,
      iin,
      workplace,
      phone,
      email,
      data.event || "UROPLENUM 2026"
    ]);
    SpreadsheetApp.flush();

    return json({
      ok: true,
      spreadsheetId: SHEET_ID,
      sheetName: sheet.getName(),
      rowNumber: sheet.getLastRow()
    });
  } catch (error) {
    return json({
      ok: false,
      error: String(error && error.message ? error.message : error)
    });
  }
}

function getTargetSheet(spreadsheet) {
  if (TARGET_SHEET_NAME) {
    let sheet = spreadsheet.getSheetByName(TARGET_SHEET_NAME);

    if (!sheet) {
      sheet = spreadsheet.insertSheet(TARGET_SHEET_NAME);
    }

    return sheet;
  }

  return spreadsheet.getSheets()[0];
}

function json(data) {
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(
    ContentService.MimeType.JSON
  );
}
