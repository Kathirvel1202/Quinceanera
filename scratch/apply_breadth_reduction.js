const fs = require('fs');
const path = require('path');

const cssPath = path.resolve(__dirname, '../css/style.css');
let css = fs.readFileSync(cssPath, 'utf8');

// 1. :root --site-header-height
css = css.replace(/--site-header-height:\s*72px;/, '--site-header-height: 60px;');

// 2. #siteHeader top
css = css.replace(/#siteHeader\s*\{\s*position:\s*fixed;\s*top:\s*14px;/, '#siteHeader { position: fixed; top: 12px;');

// 3. .navbar
css = css.replace(
    /\.navbar\s*\{\s*display:\s*grid;\s*grid-template-columns:\s*auto minmax\(0, 1fr\) auto;\s*align-items:\s*center;\s*gap:\s*14px;\s*min-height:\s*72px;\s*padding:\s*6px 16px;\s*border:\s*1px solid rgba\(240, 228, 213, 0\.85\);\s*border-radius:\s*26px;/,
    `.navbar { display: grid; grid-template-columns: auto minmax(0, 1fr) auto; align-items: center; gap: 12px; min-height: 58px; padding: 4px 14px; border: 1px solid rgba(240, 228, 213, 0.85); border-radius: 20px;`
);

// 4. .brand and .brand-logo
css = css.replace(
    /\.brand\s*\{\s*display:\s*flex;\s*align-items:\s*center;\s*gap:\s*12px;\s*padding:\s*5px 12px 5px 5px;\s*border:\s*1px solid #f5e4bd;\s*border-radius:\s*16px;/,
    `.brand { display: flex; align-items: center; gap: 10px; padding: 4px 10px 4px 4px; border: 1px solid #f5e4bd; border-radius: 14px;`
);

css = css.replace(
    /\.brand-logo,\s*\.footer-logo\s*\{\s*width:\s*48px;\s*height:\s*48px;\s*flex:\s*0 0 48px;\s*padding:\s*3px;\s*object-fit:\s*contain;\s*border:\s*2px solid #d7ad5b;\s*border-radius:\s*12px;\s*background:\s*#2c2924;\s*\}/,
    `.brand-logo { width: 40px; height: 40px; flex: 0 0 40px; padding: 2px; object-fit: contain; border: 2px solid #d7ad5b; border-radius: 10px; background: #2c2924; }\n.footer-logo { width: 48px; height: 48px; flex: 0 0 48px; padding: 3px; object-fit: contain; border: 2px solid #d7ad5b; border-radius: 12px; background: #2c2924; }`
);

css = css.replace(
    /\.brand-name,\s*\.footer-brand-link span\s*\{\s*max-width:\s*320px;\s*color:\s*var\(--brown\);\s*font:\s*700 17px\/1\.25 Georgia, "Times New Roman", serif;\s*\}/,
    `.brand-name { max-width: 320px; color: var(--brown); font: 700 15px/1.2 Georgia, "Times New Roman", serif; }\n.footer-brand-link span { max-width: 320px; color: var(--brown); font: 700 17px/1.25 Georgia, "Times New Roman", serif; }`
);

// 5. .nav-link padding & font size
css = css.replace(
    /\.nav-link\s*\{\s*position:\s*relative;\s*display:\s*inline-flex;\s*align-items:\s*center;\s*justify-content:\s*center;\s*padding:\s*10px 12px;\s*border:\s*1px solid transparent;\s*border-radius:\s*14px;\s*background:\s*transparent;\s*color:\s*#222;\s*font-size:\s*15px;/,
    `.nav-link { position: relative; display: inline-flex; align-items: center; justify-content: center; padding: 8px 11px; border: 1px solid transparent; border-radius: 12px; background: transparent; color: #222; font-size: 14px;`
);

// 6. .theme-toggle, .theme-toggle-circle, .theme-icon, .language-btn, .login-btn, .nav-divider
css = css.replace(
    /\.theme-toggle\s*\{\s*position:\s*relative;\s*width:\s*70px;\s*height:\s*38px;\s*flex:\s*0 0 70px;\s*border:\s*1px solid #f0d9b7;\s*border-radius:\s*30px;\s*background:\s*#fff1df;\s*box-shadow:\s*inset 0 1px 3px rgba\(73, 53, 34, \.08\);\s*cursor:\s*pointer;\s*\}/,
    `.theme-toggle { position: relative; width: 62px; height: 34px; flex: 0 0 62px; border: 1px solid #f0d9b7; border-radius: 24px; background: #fff1df; box-shadow: inset 0 1px 3px rgba(73, 53, 34, .08); cursor: pointer; }`
);

css = css.replace(
    /\.theme-toggle-circle\s*\{\s*position:\s*absolute;\s*top:\s*2px;\s*left:\s*2px;\s*width:\s*32px;\s*height:\s*32px;\s*border-radius:\s*50%;\s*background:\s*var\(--white\);\s*box-shadow:\s*0 2px 7px rgba\(0, 0, 0, \.12\);\s*transition:\s*transform \.3s ease;\s*\}/,
    `.theme-toggle-circle { position: absolute; top: 2px; left: 2px; width: 28px; height: 28px; border-radius: 50%; background: var(--white); box-shadow: 0 2px 7px rgba(0, 0, 0, .12); transition: transform .3s ease; }`
);

css = css.replace(
    /\.theme-icon\s*\{\s*position:\s*absolute;\s*top:\s*2px;\s*left:\s*2px;\s*display:\s*grid;\s*width:\s*32px;\s*height:\s*32px;\s*place-items:\s*center;\s*color:\s*var\(--orange\);\s*line-height:\s*1;\s*transition:\s*transform \.3s ease, color \.2s ease;\s*\}/,
    `.theme-icon { position: absolute; top: 2px; left: 2px; display: grid; width: 28px; height: 28px; place-items: center; color: var(--orange); line-height: 1; transition: transform .3s ease, color .2s ease; }`
);

css = css.replace(
    /\.theme-icon svg\s*\{\s*display:\s*block;\s*width:\s*17px;\s*height:\s*17px;/,
    `.theme-icon svg { display: block; width: 15px; height: 15px;`
);

css = css.replace(
    /\.language-btn\s*\{\s*width:\s*70px;\s*height:\s*38px;\s*border:\s*1px solid #f5e4bd;\s*border-radius:\s*25px;/,
    `.language-btn { width: 62px; height: 34px; border: 1px solid #f5e4bd; border-radius: 20px;`
);

css = css.replace(
    /\.nav-divider\s*\{\s*width:\s*1px;\s*height:\s*30px;/,
    `.nav-divider { width: 1px; height: 24px;`
);

css = css.replace(
    /\.login-btn\s*\{\s*display:\s*inline-flex;\s*min-height:\s*40px;\s*align-items:\s*center;\s*justify-content:\s*center;\s*padding:\s*10px 24px;\s*border:\s*1px solid var\(--orange\);\s*border-radius:\s*30px;\s*background:\s*var\(--orange\);\s*color:\s*var\(--white\);\s*font-size:\s*14px;/,
    `.login-btn { display: inline-flex; min-height: 34px; align-items: center; justify-content: center; padding: 7px 20px; border: 1px solid var(--orange); border-radius: 20px; background: var(--orange); color: var(--white); font-size: 13.5px;`
);

// 7. Dark mode theme toggle transforms
css = css.replace(
    /body\.dark-mode \.theme-icon\s*\{\s*color:\s*#ffd28b;\s*transform:\s*translateX\(32px\);\s*\}\s*body\.dark-mode \.theme-toggle-circle\s*\{\s*transform:\s*translateX\(32px\);\s*\}/,
    `body.dark-mode .theme-icon { color: #ffd28b; transform: translateX(28px); }\nbody.dark-mode .theme-toggle-circle { transform: translateX(28px); }`
);

fs.writeFileSync(cssPath, css, 'utf8');
console.log("Applied navbar breadth reduction successfully!");

