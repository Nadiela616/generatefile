import fsp from 'fs/promises';
import fs from 'fs';

async function parsedData(content) {    
    const lines = content.split('\n');
    const data = [];

    for(let line of lines){
        const tokens = line.split(',');
            
        const clear_data = {};
        clear_data.filename = tokens[0];
        clear_data.filecontent = tokens[1];
        data.push(clear_data);            
    }

    for(let item of data) {           
        await fsp.writeFile(item.filename, item.filecontent);
    }
}


try {
    const content = await fsp.readFile('./data.csv', 'utf-8');
    console.log(content); 
    await parsedData(content); 
}
catch (error) {
    console.log(error.message); 
}