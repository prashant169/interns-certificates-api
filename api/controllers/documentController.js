
const fs = require('fs');
const path = require('path');
const Docxtemplater = require('docxtemplater');
const PizZip = require("pizzip");
const dotenv = require('dotenv');

dotenv.config();

// Function to generate a unique reference ID
function generateRefId() {
  const prefix = 'hometute-23';
  const uniquePart = Math.random().toString(36).substring(2, 10);
  return `${prefix}-${uniquePart}`;
}

// Additional data


// Configuration
const templatePath = process.env.NODE_ENV === 'development'
  ? path.join('LetterHead.docx')
  : path.join(__dirname, '../prod_templates', 'LetterHead.docx');

// Controller function to generate Word documents
exports.generateDocument = async (req, res, next) => {
  const studentData = req.body;
  const currentDate = new Date().toLocaleDateString();
  const refId = generateRefId();
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
    return next({ status: 500, message: 'Document rendering failed.' });
  }

  // Generate and send the document name in the response
  const fileName = `${studentData.student_name}_${content.refId}.docx`;
  fs.writeFileSync(path.resolve(__dirname, fileName), doc.getZip().generate({ type: 'nodebuffer' }));

  return res.json({ fileName });
};
