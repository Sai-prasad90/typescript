
// Program 1

type Activity = string | number; 
let task: Activity;
task = 'walking';
task = 30;

// Program 2
// Intersection type

type PersonInfo = {
    name: string;
    age: number;
};

type JobInfo = {
    jobTitle: string;
    salary: number;
};

type EmployeeDetails = PersonInfo & JobInfo;

let employee: EmployeeDetails;

employee = {
    name: "Alice",
    age: 28,
    jobTitle: "Software Developer",
    salary: 75000
};

// Program 3

type ArtWork = { color: string };
type Painting = ArtWork & { canvasSize: string };
type Sculpture = ArtWork & { material: string };
type ArtPiece = Painting | Sculpture;
type ArtIntersection = Painting & Sculpture;

let painting1: ArtWork;
let painting2: Painting;
let sculpture1: Sculpture;
let artCollection1: ArtPiece;
let artCollection2: ArtIntersection;

artCollection1 = {
    color: "red",
    canvasSize: "medium"
};

artCollection1 = {
    color: "green",
    material: "marble"
};

artCollection2 = {
    color: "blue",
    canvasSize: "small",
    material: "clay"
};

// Program 4

type Vehicle = { color: string };
type DeliveryTruck = Vehicle & { cargoType: string };
type PublicBus = Vehicle & { passengers: number };
type MultiPurposeVehicle = Vehicle & DeliveryTruck & PublicBus;
type VehicleUnion = Vehicle | DeliveryTruck | PublicBus;

let deliveryVan: MultiPurposeVehicle = {
    color: "white",
    cargoType: "packages",
    passengers: 2
};

let vehicleOption1: VehicleUnion = {
    color: "red"
};

let vehicleOption2: VehicleUnion = {
    color: "blue",
    cargoType: "furniture"
};

let vehicleOption3: VehicleUnion = {
    color: "green",
    passengers: 30
};
