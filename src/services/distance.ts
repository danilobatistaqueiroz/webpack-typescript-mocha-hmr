import {Point} from "../models/point";

export class Distance {

    public distance(p2:Point, p1:Point) : number {
        let yDist = p2.y - p1.y;
        let xDist = p2.x - p1.x;
        return Math.sqrt(Math.pow(yDist, 2) + Math.pow(xDist, 2));
    }

    public sortByDistance(myPt:Point, points:Point[]) : Point[] {
        return points.sort(
            (pt1, pt2) => this.distance(pt1, myPt) - this.distance(pt2, myPt));
    }
}