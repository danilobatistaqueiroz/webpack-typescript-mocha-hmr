import { expect } from "chai";
import { Distance } from "../src/services/distance";
import { Point } from "../src/models/point";

describe("distance", function () {
    it("calculates distance with the good ol' Pythagorean Theorem", function () {
        let origin: Point = { name:"", x: 0.0, y: 0.0 };
        let point: Point = { name:"", x: 3.0, y: 4.0 };
        let distance: Distance = new Distance();
        expect(distance.distance(point, origin)).to.equal(5);
    });
});

describe("sortByDistance", function () {
    it("sortsByDistance", function () {
        let places: Point[] = [
            { name: "Far away", x: 100, y: 50 },
            { name: "Nearby", x: 20, y: 10 },
        ];
        let origin: Point = { name: "Origin", x: 0, y: 0 }; 
        let distance = new Distance(); 
        let sorted = distance.sortByDistance(origin, places);
        expect(sorted[0].name).to.equal("Nearby");
        expect(sorted[1].name).to.equal("Far away");
    });
});