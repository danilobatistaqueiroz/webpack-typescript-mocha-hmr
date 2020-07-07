import {Distance} from "./services/distance";
import {Point} from "./models/point";

let distance = new Distance();

let stores: Point[] = [
    {"name":"Cambridge Naturals",     "x":-71.1189, "y":42.3895},
    {"name":"Sarah's Market",         "x":-71.1311, "y":42.3823},
    {"name":"Whole Foods Fresh Pond", "x":-70.1420, "y":41.3904},
];
let here: Point = {"name":"You are here","x":-71.1470,"y":42.3834};
let nearest = distance.sortByDistance(here, stores)[0];
document.getElementById("nearest-store").innerHTML = nearest.name;