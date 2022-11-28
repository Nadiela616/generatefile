import { clear } from 'console';
import fs from 'fs';

function callback(error, content) {
    if(error) {
        console.log('The file does not exist!');
    }
    else {
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

            
            fs.writeFile(item.filename, item.filecontent, (error) => {
                    if (error)
                        throw error;
                    console.log('Saved!');
                });


        }
    }
}

fs.readFile('./data.csv', 'utf-8', callback);
