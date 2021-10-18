import fs from 'fs';
import csv from 'csvtojson';
import pipeline from 'stream';

const filePath = './src/nodejs-hw1-ex1.csv'

pipeline(
    fs.createReadStream(filePath),
    csv(),
    fs.createWriteStream('./src/task2.txt'),
    (error) => {
        if (error) {
            console.error('An error ocurred: \n\n %o', error);
        } else {
            console.log('Finished!');
        }
    }
);