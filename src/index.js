//Steps before modifying index.js:
//1. create git repo
//2. navigate to the folder you want your repo to live in
//3. clone repo (git clone (ssh))
//4. npm init -y
//5. npm install webpack webpack-cli --save-dev
//6. make src folder, and append child index.js, index.html
//7. boiler plate index and test js command
//8. in package.json file: remove main: index.js, replace with:     "private": true,
//9. create dist folder, put index inside it (could have done it this way from the start?)
//10. npm install --save lodash
//11. add import _ from 'lodash' to src/index.js
//12. adjust script tag in html and run "npx webpack"




import _ from 'lodash';


console.log(`I am here in the console`);

function component() {
    const element = document.createElement('div');

    //Lodash, currently included via a script, is required for this line to work:
    //now lodash is imported by this script
    
    //element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    //^That's their code and comment, I'm not sure if lodash is somehow needed to concact the strings but I'm using the simplified code below
    
    element.innerHTML = `If all has gone well you're reading this on the screen. `;

    return element;
}

document.body.appendChild(component());

