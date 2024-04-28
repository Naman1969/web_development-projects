const express = require("express");
const multer = require('multer');
const app = express();
const port = 3000;
const path = require('path')
const docxtoPDF = require('docx-pdf');
const cors = require('cors');
app.use(cors());

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

app.post('/convertfile', upload.single('file'), (req, res, next) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                message: "Please upload a file"
            });
        }
        let outputPath = path.join(__dirname,"files",`${req.file.originalname}.pdf`)
        docxtoPDF(req.file.path, outputPath, (err, result) =>{
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Conversion failed' });
            }
            res.download(outputPath,()=>{
                console.log("file downloaded");
            })
        });
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
