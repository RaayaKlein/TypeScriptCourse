// Array of 5 Food objects 

let myFood:Food[] = [
    new Food("Pizza", new ExDate(2020, 4, 3)),
    new Food("Coffee", new ExDate(2018, 6, 2)),
    new Food("Falafel", new ExDate(2022, 7, 1)),
    new Food("Milk", new ExDate(2022, 6, 8)),
    new Food("Cake", new ExDate(2024, 12, 13)),
]

for (const item of myFood) {
    console.log(item.toString());
}

let res = document.getElementById('res').innerHTML = 
`
<table border="1">
<tr>
    <th>Food name</th>
    <th>Expiration date</th>
</tr>
<tr>
    <td>${myFood[0].FoodName}</td>
    <td>${myFood[0].LastDate}</td>
</tr>
<tr>
    <td>${myFood[1].FoodName}</td>
    <td>${myFood[1].LastDate}</td>
</tr>
<tr>
    <td>${myFood[2].FoodName}</td>
    <td>${myFood[2].LastDate}</td>
</tr>
<tr>
    <td>${myFood[3].FoodName}</td>
    <td>${myFood[3].LastDate}</td>
</tr>
<tr>
    <td>${myFood[4].FoodName}</td>
    <td>${myFood[4].LastDate}</td>
</tr>
</table>
`