// ========================================
// Program 1 : Simple Namespace
// ========================================
export {};
namespace College {

    export function display() {
        console.log("Welcome to SVECW");
    }
}

College.display();


// ========================================
// Program 2 : Namespace with Variable
// ========================================

namespace StudentInfo {

    export let name = "Srivalli Gudala";

    export function show() {
        console.log("Student:", name);
    }
}

StudentInfo.show();


// ========================================
// Program 3 : Namespace with Class
// ========================================

namespace Vehicle {

    export class Car {

        display(): void {
            console.log("Car is running");
        }
    }
}

let c = new Vehicle.Car();
c.display();