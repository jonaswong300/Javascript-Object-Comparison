# JavascriptObjectComparison
It is simple to compare values in Javascript where as compared to object comparison. It is slightly more difficult because it is structured with a type. 
Base Javascript provide the strict equality(===) and loose equality(==) operator. There is also the manual comparator of accessing the object keys and comparing the values directly. But this repo would not be covering this 2 type of comparison. 

My repo is build based of my own research and understanding of articles and code reviews provided. So it is build here justs to provide a simple understanding for anyone who wishes to understand and have a simple guide to object comparison to solve day to day code. 

This guide would cover the 3 type of comparison which I have find useful. 

1. JSON.stringify()
   This method converts the object directly into a string and does a string comparison directly. 
  ![image](https://user-images.githubusercontent.com/61023335/159129721-11a1329d-d568-493f-bed4-708d1ed6788f.png)

2. Shallow Equality 
   This method iterates through the object keys using Object.keys(). Since it is a loop, we are able to check the value of the object property directly. 
   
   ![image](https://user-images.githubusercontent.com/61023335/159129741-accdd1ba-27fd-4df6-b887-6fd6ca707446.png)

3. Deep Equality 
   This method is similar to the shallow equality but it is done recursively to cater for nested object within the current object. 
   ![image](https://user-images.githubusercontent.com/61023335/159129759-6145f8b5-55ae-4040-97c8-7c1e6e6ae66d.png)

With the first method, it is able to handle most of object comparison directly. However if the object are similar but have different sequence within a nested object.  {a: '4', b: '5'}, {b: '5', a: '4'}. JSON.stringify would actually return it as false, even if the object are similar.

Shallow equality work bests and is sufficient if the objects are not nested and have only a single layer. 

Deep equality works best if there is nested objects and would be the go to method for object comaprison. 

Do feel free to update and add on to the code if there are any better improvements or methods to do object comparison. Hope this helps you! Thanks for reading. 


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
