/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją showObjectKeys, kuri kaip argumentą priims objectą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
	make: "audi",
	model: "A6",
	year: 2005,
	color: "white",
};

 // Are You sure you want to get keys not values?

  showObjectKeys = Object.keys(audi); 
  console.log(showObjectKeys);
