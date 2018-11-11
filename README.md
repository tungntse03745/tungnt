
## How to run product

## Step 1: 
Setup angular (npm install -g @angular/cli)
## Step 2:
Setup node_module (ng s)
## Step 2:
Goto http://localhost:4200/

## Deploy to github

## Step 1: install the angular-cli-ghpages globally:

$ npm install -g angular-cli-ghpages

## Step 2: Use the Angular CLI with the --base-href flag to build your project and set the base href location:

$ ng build --prod --base-href "https:tungntse03745.github.io/tungnt/"

## Step 3: Running angular-cli-ghpages. You can use the ngh shorthand:

$ ngh

## ---------

## Project Information

## Technical
- Angular 5.2.11
- Javascript ES6/Typescript, HTML5, CSS3
- Library: Angular material, ngx-carousel
## General Requirements
- responsive in multiple screen sizes: Desktop, Ipad, Ipad Pro, Iphone 6/6s, Iphone 7/7s, Iphone8, IphoneX
- Change Language: VietNamese, English, Japanese
- Use carousel slider ('https://libraries.io/npm/ngx-carousel')
- Slider auto play, When clicking a thumbnail on the left, the image of selected thumbnail will be shown.
- When click to FREE DOWNLOAD => display current image in slider => click to download to download this image.
- With Desktop screen. When scrolling, the right section is fixed.
- Design a simple footer.
- Using Json Data in Share folder.