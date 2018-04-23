// Game Data
let gameData = {
	commandCounter: 0,
	gameOver: false,
	player: {
		currentLocation: 'Wake Up Zone',
		inventory: {
			"Rusted Dagger": {
				displayName: "Rusted Dagger",
				description: "A dagger so far gone, you can't tell whether it was used to pick fights... or teeth.",
				damageMin: 1,
				damageMax: 2,
				equip: function(){
					return useWeapon(this. target);
				},
				quantity: 1,
				hidden: false,
				equipped: true
			}
		},
		lightSource: false,
		health: 20,
		mana: 20
	},
	map: {
		
	}
}




// USE FUNCTIONS
function getDamage(min, max){
	return Math.random() * (max - min) + min;
}

function useWeapon(weapon, target){
	if(!target){
		return "That's not something you can stick ya nincompoop.";
	} else{
		target.health -= getDamage(weapon.damageMin, weapon.damageMax);
		
	}
}