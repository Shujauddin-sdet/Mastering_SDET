// Base class for generating a simple report
class Report {
    generate(data) {
        console.log("Raw data: " + data);
    }
}

// Child classes that override the generate() method to format the data differently
class HTMLReport extends Report {
    generate(data) {
        console.log("<html><body>" + data + "</body></html>"); // Formats as HTML
    }
}

class JSONReport extends Report {
    generate(data) {
        console.log('{"report": "' + data + '"}'); // Formats as JSON
    }
}

class TextReport extends Report {
    generate(data) {
        console.log("=== REPORT ===\n" + data + "\n=============="); // Formats as plain text with borders
    }
}

// Array containing different types of report generators
let reports = [new HTMLReport(), new JSONReport(), new TextReport()];

// Loop through each report generator
reports.forEach(function (r) {
    // Pass the same data, but each object generates a different format!
    r.generate("5 tests passed, 1 failed");
    console.log("---"); // Separator between reports
});
