// const intialDate = new Date();
// console.log(intialDate.getTime())

// const futureTime = intialDate.getTime() + (1000 * 60 * 60 * 24 * 5)

// const futureDate = new Date(futureTime);

// if (futureDate > intialDate) {
//     console.log('futureDate is in the future');
// } else if (futureDate == intialDate) {
//     console.log('futureDate is the same');
// } else {
//     console.log('futureDate is in the past');
// }

// const baseline = new Date().getTime();

// const arr = [
//     new Date(baseline + (1000 * 60 * 60 * 24 * 3)),
//     new Date(baseline + (1000 * 60 * 60 * 24 * 65)),
//     new Date(baseline + (1000 * 60 * 60 * 24 * 2)),
//     new Date(baseline + (1000 * 60 * 60 * 24 * 6)),
//     new Date(baseline + (1000 * 60 * 60 * 24 * 5)),
//     new Date(baseline + (1000 * 60 * 60 * 24 * 4)),
// ];

// const arr2 = arr.toSorted((a, b) => {
//     if (a.getTime() > b.getTime()) return -1;
//     if (a.getTime() < b.getTime()) return 1;
//     return 0;
// });

// console.log(arr2)


const buildings = [{
    name: "Shanghai Tower",
    height: 632
}, {
    name: "Ping An International Finance Centre",
    height: 599
}, {
    name: "Taipei 101",
    height: 508
}, {
    name: "Central Park Tower",
    height: 472
}, {
    name: "Lotte World Tower",
    height: 554
}, {
    name: "Burj Khalifa",
    height: 828
}, {
    name: "Merdeka 118",
    height: 678
}]

buildings.sort((a, b) => a.height - b.height)

console.log(buildings)