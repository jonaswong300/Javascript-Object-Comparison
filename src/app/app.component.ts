import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'javascript-object-comparison';
  
  ngOnInit(): void {
    this.compareObjects();
    this.compareNestedObject();
    this.compareOrderingOfObjectKeys();
  }

  private shallowEqual(object1: any, object2: any): boolean {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    if (keys1.length !== keys2.length) {
      return false;
    }

    for (let key of Object.keys(object1)) {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  }

  private compareObjectWithJsonStringify(obj1: any, obj2: any): boolean {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
  }

  private deepEqual(object1: any, object2: any): boolean {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    if (keys1.length !== keys2.length) {
      return false;
    }
    for (const key of keys1) {
      const val1 = object1[key];
      const val2 = object2[key];
      const areObjects = this.isObject(val1) && this.isObject(val2);
      if ((areObjects && !this.deepEqual(val1, val2)) || (!areObjects && val1 !== val2)) {
        return false;
      }
    }
    return true;
  }

  private isObject(object: any): boolean {
    return object != null && typeof(object) === 'object';
  }

  private compareObjects(): void {
    const obj1: any = {
      name: 'Bruce Wayne',
      address: 'Gotham City, Wayne Manor, Blk 1',
      postal: '111111',
    }
  
    const obj2: any = {
      name: 'Bruce Wayne',
      address: 'Gotham City, Wayne Manor, Blk 1',
      postal: '111111',
    }

    console.info("Comparing objects only.")
    console.info(obj1)
    console.info(obj2);
    console.info(this.compareObjectWithJsonStringify(obj1, obj2)); // true
    console.info(this.shallowEqual(obj1, obj2)); // true
    console.info(this.deepEqual(obj1, obj2)); // true
  }

  private compareNestedObject(): void {
    const obj1: any = {
      name: 'Bruce Wayne',
      address: 'Gotham City, Wayne Manor, Blk 1',
      postal: '111111',
      cardDetail: {
        number: '1234',
        limit: '5000',
      }
    }

    const obj2: any = {
      name: 'Bruce Wayne',
      address: 'Gotham City, Wayne Manor, Blk 1',
      postal: '111111',
      cardDetail: {
        number: '1234',
        limit: '5000'
      }
    }

    console.info("Comparing objects with nested objects.")
    console.info(obj1)
    console.info(obj2);
    console.info(this.compareObjectWithJsonStringify(obj1, obj2)); // true
    console.info(this.shallowEqual(obj1, obj2)); // false
    console.info(this.deepEqual(obj1, obj2)); // true
  }

  private compareOrderingOfObjectKeys(): void {
    const obj1: any = {
      name: 'Bruce Wayne',
      address: 'Gotham City, Wayne Manor, Blk 1',
      postal: '111111',
      cardDetail: {
        number: '1234',
        limit: '5000',
      }
    }

    const obj2: any = {
      name: 'Bruce Wayne',
      address: 'Gotham City, Wayne Manor, Blk 1',
      postal: '111111',
      cardDetail: {
        limit: '5000',
        number: '1234',
      }
    }

    console.info("Comparing objects with nested objects where the ordering of the inner object affects the comparison.")
    console.info(obj1)
    console.info(obj2);
    console.info(this.compareObjectWithJsonStringify(obj1, obj2)); // false
    console.info(this.shallowEqual(obj1, obj2)); // false
    console.info(this.deepEqual(obj1, obj2)); // true
  }
}
