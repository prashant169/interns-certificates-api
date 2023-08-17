const express = require('express');
const fs = require('fs');
const path = require('path');
const Docxtemplater = require('docxtemplater');
const PizZip = require("pizzip");
const bodyParser = require('body-parser');
//const puppeteer = require('puppeteer');
//const { PDFDocument } = require('pdf-lib');
const dotenv = require('dotenv');
const docxConverter = require('docx-pdf');

const app = express();
require('./swagger')(app);


//
const port = 7000;
dotenv.config();

// Function to generate a unique reference ID
function generateRefId() {
  const prefix = 'hometute-23';
  const uniquePart = Math.random().toString(36).substring(2, 10);
  return `${prefix}-${uniquePart}`;
}

// Additional data
const currentDate = new Date().toLocaleDateString();
const refId = generateRefId();

// Configuration
//const templatePath = path.join(__dirname, 'templates', 'LetterHead.docx');
// Get the template path based on the environment
const templatePath = process.env.NODE_ENV === 'development'
  ? path.join(__dirname, process.env.DEV_TEMPLATE_PATH, 'LetterHead.docx')
  : path.join(__dirname, process.env.PROD_TEMPLATE_PATH, 'LetterHead.docx');

// Middlewares
app.use(bodyParser.json());

// Route to generate Word documents
app.post('/generate-document',async  (req, res) => {
  const studentData = req.body;


  // Read the Word template
  const template = fs.readFileSync(templatePath, 'binary');
  const zip = new PizZip(template);
  const doc = new Docxtemplater(zip, {
    paragraphLoop: true,
    linebreaks: true,
  });
  const content = {
    ...studentData,
    currentDate,
    refId,
  };

// Render the document (Replace {first_name} by John, {last_name} by Doe, ...)
try {
  doc.setData(content);
  doc.render();
} catch (error) {
  console.error('Error while rendering the document:', error);
  res.status(500).json({ error: 'Document rendering failed.' });
  return;
}

  // Generate and send the document in the response
  //const buffer = doc.getZip().generate({ type: 'nodebuffer' });

const buf = doc.getZip().generate({
    type: "nodebuffer",
    // compression: DEFLATE adds a compression step.
    // For a 50MB output document, expect 500ms additional CPU time
    compression: "DEFLATE",
});

// buf is a nodejs Buffer, you can either write it to a
// file or res.send it with express for example.
fs.writeFileSync(path.resolve(__dirname, `Student_${content.refId}.docx`), buf);
// Convert the Word document buffer to PDF using pdf-lib

res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
res.setHeader('Content-Disposition', `attachment; filename=Student_${content.refId}.docx`);
res.send(buf);
// Convert the Word document buffer to PDF using puppeteer
// Convert the Word document buffer to PDF using pdf-lib

  
});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});