const path = require('path');
const fs = require('fs');






// b. Modifier ce programme pour permettre la recherche dans les fichiers d’un
// répertoire et ses sous-répertoires, si un des arguments est un répertoire.


function grep(diractory, Regex, FileExtention) {
    var co = 0
    if (!fs.existsSync(diractory)) {
        console.log(`Specified directory: ${diractory} does not exist`);
        return;
    }

    const files = getFilesInDirectory(diractory, FileExtention);

    files.forEach(file => {
        const fileContent = fs.readFileSync(file);

        // We want full words, so we use full word boundary in regex.
        const regex = new RegExp('\\b' + Regex + '\\b');
        if (regex.test(fileContent)) {
            co++
            console.log(`The word was found in This File : ${file}`);
        }
    });

    if (co > 0)
        console.log(`the total number of files that found containe the word "${Regex}" is :`, co);
    else
        console.log(`NONE files are containing the word "${Regex}" `);

}



// i used recursion, and i find every file with the extention, this time we go deeply to nested in subfolders.
function getFilesInDirectory(dir, ext) {
    if (!fs.existsSync(dir)) {
        console.log(`Specified directory: ${dir} does not exist`);
        return;
    }

    let files = [];
    fs.readdirSync(dir).forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.lstatSync(filePath);

        // If we hit a directory, apply our function to that dir. If we hit a file, add it to the array of files.
        if (stat.isDirectory()) {
            const nestedFiles = getFilesInDirectory(filePath, ext);
            files = files.concat(nestedFiles);
        } else {
            if (path.extname(file) === ext) {
                files.push(filePath);
            }
        }
    });

    return files
}

grep(process.argv[2], process.argv[3], process.argv[4]);



// the rsule from runing the code in tirminal

// node exo3_PartTwo ./ hello .txt

// The word was found in This File : d.txt
// The word was found in This File : textes/t.txt
// the total number of files that found containe the word "hello" is : 2






