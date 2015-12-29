# Angular-Material-SASS

This is a pretty simple thing. I simply took the src from [angular-material](https://github.com/angular/material), got rid of everything but the scss, did some renaming, and added a gulp task. Feel free to copy for your own use and stuff.

## But why

 * I wanted to use angular-material modularly, since some of it's core styles conflict with a CMS I have to use at work.
 * There is no way to do this with the scss without changing the structure of angular-material itself.
 * See pull request.

## Modular Styles

Go to ```angular-material-styles.scss``` and uncomment what you don't want.

```javascript
...
@import "src/components/card/_card.scss";
@import "src/components/checkbox/_checkbox-theme.scss";
/* If I dont want checkboxes, I just comment it out
@import "src/components/checkbox/_checkbox.scss"; */
@import "src/components/chips/_chips-theme.scss";
...
```

Then run ```npm install``` and ```gulp``` (must have [nodejs](https://nodejs.org/) installed)
