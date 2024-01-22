# LeaderBoard-https://iamsurbhi1503.github.io/LeaderBoard/
This is a simple player score tracker application implemented in JavaScript. It allows users to add players, track their scores, and perform actions like increasing, decreasing, and removing players.

#Features

1. Add Player:

Users can add players with the first name, last name, country, and initial score.
The player list is sorted in descending order based on the scores.

2. Score Modification:

Users can increase or decrease a player's score by clicking on the respective buttons.
The score modification buttons are designed with a pleasing appearance.

3. Remove Player:

Users can remove a player from the list by clicking on the 'X' button.
The removal is reflected instantly, and the list is re-rendered.

4. Random Color:

The player names are styled with a randomly changing color for an engaging UI experience.

#How to Use

1. Adding a Player:

Enter the player's first name, last name, country, and initial score.
Click the "Add Player" button.

2. Score Modification:

Use the "+5" and "-5" buttons to increase or decrease a player's score.

3. Removing a Player:

Click the "X" button next to a player to remove them from the list.

4. Random Color Effect:

The player names have a dynamic color that changes randomly for a visually appealing effect.

#Implementation Details

1.The application is implemented using JavaScript, HTML, and CSS.
2.Player data is stored in an array (PlayersList).
3.The list is sorted based on scores to maintain a descending order.
4.Each player entry in the list includes buttons for score modification and removal.

#CSS Styling

1.The CSS styling includes classes for buttons (plusJS, minusJS, removeJS), list items (listJS), and spans for player details (nameJS, countryJS, scoreJS).
2.Random colors are applied to player names for a dynamic and engaging user interface.

#Functions

1.addPlayer: Adds a player to the list and refreshes the display.
2.refreshList: Refreshes the player list based on the sorted array.
3.increaseButtonHandler and decreaseButtonHandler: Modify the player's score and refresh the list.
4.removeData: Removes a player from the list.

#Improvements

1.The application could benefit from error handling for input fields and user feedback.
2.Enhancements to the user interface and animations can be considered for a more polished look.

Feel free to explore, modify, and enhance the application based on your requirements!
