//Steps before modifying index.js:
//1. Create git repo
//2. Navigate to the folder you want your repo to live in
//3. Clone repo (git clone (ssh))
//4. npm init -y
//5. npm install webpack webpack-cli --save-dev
//6. Make src folder, and append child index.js, index.html
//7. Boiler plate index and test js command
//8. In package.json file: remove main: index.js, replace with:     "private": true,
//9. Create dist folder, put index inside it (could have done it this way from the start?)
//10. npm install --save lodash
//11. Add import _ from 'lodash' to src/index.js
//12. Adjust script tag in html and run "npx webpack" in terminal. At this point you need to run npx webpack to make any changes active on screen. 
//13. create a configuration file titled "webpack.config.js" and copy text.
//14. npx webpack --config webpack.config.js
//15. add "build": "webpack" to package.json, now use "npm run build" instead of npx webpack

//16. Change js file from main to bundle
//17. npm install --save-dev style-loader css-loader
//18. Add module to webpack.config.js
//19. make css file in src folder, add basic styling
//20. import style.css and add class to element
//21. npm run build     (and fix import css statement)

//22. After publishing to github pages, run:       git subtree push --prefix dist origin gh-pages




import _ from 'lodash';
import './style.css';


console.log(`I am here in the console`);

function component() {
    const element = document.createElement('div');

    //Lodash, currently included via a script, is required for this line to work:
    //now lodash is imported by this script
    
    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    //^That's their code and comment, I'm not sure if lodash is somehow needed to concact the strings but I'm using the simplified code below
    
    element.innerHTML = `If all has gone well you're reading this on the screen. `;
    element.classList.add(`hello`);

    return element;
}

document.body.appendChild(component());

