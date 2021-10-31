const path = require('path');
const { v4: uuidv4 } = require("uuid");

const uploadFile = async (
  file,
  folderName = "folder",
  validExtensions = ["png", "jpg", "jpeg", "gif"]
) => {
  
  return new Promise((resolve, reject) => {
    if(!file){
      resolve(null);
    }
    // Validate Extensions
    let finalFileName;
    let uploadPath;
    let fileExtension;
    let fileName;
    // The name of the input field (i.e. "image") is used to retrieve the uploaded file => req,files.image
    fileName = file.name.split(".");
    fileExtension = fileName.pop();
    
    if (!validExtensions.includes(fileExtension)) {
      return reject(
        `file extension:"${fileExtension}" not allowed. Valid extensions: ${validExtensions}`
        );
    }
    finalFileName =`${uuidv4()}.${fileExtension}`;

    uploadPath = path.join(__dirname,'../uploads/',folderName,finalFileName);
    file.mv(uploadPath, function(err){
        if(err){ 
          console.log(err);
          return reject(null);
        }
        console.log('File uploaded!');
        console.log(uploadPath);
        return resolve(uploadPath);
      });
      
}
);
}

module.exports = {uploadFile};
