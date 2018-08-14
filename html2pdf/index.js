const httpStatus = require('http-status');
const pdf = require("html-pdf");


module.exports = async function(context) {
    context.log("HtmlPDF conversion request");
    try {
        const {options, html} = context.req.body;
        const buff = await convertHTMLToPDF(html, options);
        context.res = {
            status: httpStatus.OK,
            body: buff,
            headers : {
                "Content-Type":"application/pdf"
            }
        }
        context.log("finished conversion");
    }
    catch (err){
        context.log("Error during conversion");
        context.log(JSON.stringify(err));
        context.res = {
            status:httpStatus.INTERNAL_SERVER_ERROR,
            body:JSON.stringify(err),
            headers : {
                "Content-Type":"application/json"
            }
        }
    }
}

const convertHTMLToPDF = async (html, options) => {
    return new Promise((resolve, reject) => {
      const dir = replaceAll(__dirname,"\\","/");
      const newOption = { ...options, base: `file:///${dir}/assets/` };
      pdf.create(html, newOption).toBuffer((err, res) => {
        if (err) {
          return reject(err);
        }
        return resolve(res);
      });
    });
};

const replaceAll = function (input, oldToken, newToken){
    while (input.indexOf(oldToken)>-1){
        input = input.replace(oldToken, newToken);
    }
    return input;
};