"use strict";
// ========================================
// Program 1 : Simple Namespace
// ========================================
var College;
(function (College) {
    function display() {
        console.log("Welcome to SVECW");
    }
    College.display = display;
})(College || (College = {}));
College.display();
// ========================================
// Program 2 : Namespace with Variable
// ========================================
var StudentInfo;
(function (StudentInfo) {
    StudentInfo.name = "Hansika";
    function show() {
        console.log("Student:", StudentInfo.name);
    }
    StudentInfo.show = show;
})(StudentInfo || (StudentInfo = {}));
StudentInfo.show();
// ========================================
// Program 3 : Namespace with Class
// ========================================
var Vehicle;
(function (Vehicle) {
    class Car {
        display() {
            console.log("Car is running");
        }
    }
    Vehicle.Car = Car;
})(Vehicle || (Vehicle = {}));
let c = new Vehicle.Car();
c.display();