# CarsInventory
This is a simple application, which is to be used in the future, when I make millions of Dollars to keep track of all the luxory cars that I will own then. ("Solutions looking for problems")

## What is this about?
Jokes aside - this is a simple **React** demo application, in which several State Updates take place within a React Application. Instead of going with `useEffect` or `useReducer` for the internal state updates I am going to use Redux for that purpose

## What does this application?
This is the basic appeareance of the Web Page 

<img src="./docu/Pasted image 20231009053128.png" width="400"  >

The user can add a new car and its value via the submit button. When that happens, then the car is added in the list below. The Total Value is updated to reflect the sum of the cars' values.
This behaviour can be seen in the next diagram: 

<img src="./docu/Pasted%20image%2020231009060401.png" width="400"  > 

Which millionare does not want to have a "Subaru" or a "Ford Focus" - The dream finally coming true.

The User can search through the list of cars. The matches or partial matches to the searched term are displayed below (so yet again is the list of cars updated). Furthermore for this case also the "Total value" is updated accordingly.

When the User wants to add a car, that he already listed (Imagine you become so insanely rich, that you can afford two Ford Focus!) then the application allows you to do so, however when the car is entered in the form, the existing car is shown in a Fat Font, to give a hint to the user, that such wealth is highly unlikely.

<img src="./docu/Pasted image 20231009060726.png" width="400"  > 

