let arr:Person[] = [
    new Student('a', 34, '657543568', new Address('Israel', 'Ariel', 45), 2, 90, [new Course('History', 'a', 'a45', 12), new Course('Math', 'a', 'a45', 12)]),
    new Student('b', 34, '657543568', new Address('Israel', 'Ariel', 45), 2, 90, [new Course('History', 'a', 'a45', 12), new Course('Math', 'a', 'a45', 12)]),
    new Student('c', 34, '657543568', new Address('Israel', 'Ariel', 45), 2, 90, [new Course('History', 'a', 'a45', 12), new Course('Math', 'a', 'a45', 12)]),
    new Teacher('x', 50, '567897654', new Address('Israel', 'Ariel', 45), 45657, 10000, [new Course('History', 'a', 'a45', 12), new Course('Math', 'a', 'a45', 12)]),
    new Teacher('y', 50, '567897654', new Address('Israel', 'Ariel', 45), 45657, 10000, [new Course('History', 'a', 'a45', 12), new Course('Math', 'a', 'a45', 12)])
];

for (const p of arr) {
    if(p instanceof Student) console.log(`Student: ` + p.toString());
    else if (p instanceof Teacher) console.log(`Teacher: ` + p.toString());
}