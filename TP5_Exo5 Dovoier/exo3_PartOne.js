const path = require('path');
const fs = require('fs');









// a. Écrire un programme JavaScript (exécuté par node) qui joue le même rôle que la
// commande grep. Il traite le premier argument comme expression régulière et traite
// les autres arguments comme des fichiers où sera recherchée l’expression régulière.
// Ce programme doit donner comme résultat les noms des fichiers dont le contenu
// correspond à l’expression régulière fournie (ou “NONE” si aucun fichier ne
// contient l’expression).


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

// we find every file with the extention is recomended and test and return the files for testing if the word is in that file 
function getFilesInDirectory(diractory, ext) {
    if (!fs.existsSync(diractory)) {
        console.log(`Specified directory: ${diractory} does not exist`);
        return;
    }

    let files = [];
    fs.readdirSync(diractory).forEach(file => {
        const filePath = path.join(diractory, file);
        if (path.extname(file) === ext) {
            files.push(filePath);
        }

    });

    return files
}

grep(process.argv[2], process.argv[3], process.argv[4]);



// the rsule from runing the code in tirminal

// $ node exo3_PartOne ./ hello .txt

// The word was found in This File : d.txt
// the total number of files that found containe the word "hello" is : 1



// the rsule from runing the code in tirminal when no ruselt found 

// node exo3_PartOne ./ helloo .txt
// NONE files are containing the word "helloo" 