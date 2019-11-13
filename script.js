// function MainFunction(){
localStorage.clear();
	// if (localStorage.openSlots){
	// 	$('.slotBoxLeft').html(localStorage.getItem("savedItems"));
	// 	$('.gear2').html(localStorage.getItem("equipedItems"));
	// }


// Earth Enemies/Bosses
var dregHealth = 10;
var captainHealth = 20;
var vandalHealth = 15;
var shankHealth = 10;
var servitorHealth = 25;
var riksisHealth = 40;
var sepiksHealth = 40;
var skolasHealth = 70;

var gruntAtkMult = 1.05;
var midAtkMult = 1.1;
var majorAtkMult = 1.15;
var bossAtkMult = 1.3;

var playerHealth = 30;
var killCounter = 0;
var bossesKilled = 0;
var openSlots = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];


function SlotChecker(){
	var min = Math.min.apply(Math, openSlots);
	var i = 0;
// var slot = document.getElementById('slot'+min);
// while (slot.children.length){
// 	openSlots.shift();
// }
for(i = 0; i < openSlots.length; i++){
	if (document.getElementById('slot'+openSlots[i]).children.length){
		openSlots.shift();
	}
}
}
SlotChecker();

var dialogBox = ['<div class="dialogBoxLeft"><p>', '</p><img src=', '></div><div class="dialogBoxRight"> <span style="color: white;">as</span><span style="font-size: 1.2em; font-weight=bold;">', '</span><span>    ', '</span></div>'];

// Enemy Pictures
var dregPic = "https://github.com/shadow-walker-jr/destiny_text_game/blob/master/fallen_dreg.jpg?raw=true";
var vandalPic = "https://github.com/shadow-walker-jr/destiny_text_game/blob/master/fallen_vandal.jpg?raw=true";
var captainPic = "https://github.com/shadow-walker-jr/destiny_text_game/blob/master/fallen_captain.jpg?raw=true";
var shankPic = "https://github.com/shadow-walker-jr/destiny_text_game/blob/master/fallen_shank.jpg?raw=true";
var servitorPic = "https://github.com/shadow-walker-jr/destiny_text_game/blob/master/fallen_servitor.jpg?raw=true";
var skolasPic = "https://github.com/shadow-walker-jr/destiny_text_game/blob/master/Skolas.jpg?raw=true";
var sepiksPic = "https://github.com/shadow-walker-jr/destiny_text_game/blob/master/Sepiks_Prime.png?raw=true";
var riksisPic = "https://github.com/shadow-walker-jr/destiny_text_game/blob/master/Riksis_Devil_Archon.jpg?raw=true";

// Item Drops

// White
// Tier 1
var omolon_hand_cannon = '<img class="itemDrop" data-statType="Atk:" data-itemType="weapon" data-itemStat="15" id="Omolon Hand Cannon" src="https://github.com/shadow-walker-jr/destiny_text_game/blob/master/omolon_hand_cannon.jpg?raw=true">';
var white_helmet_drop = '<img class="itemDrop" data-statType="Def:" data-itemType="helmet" data-itemStat="3" id="Logic Singer IV" src="https://github.com/shadow-walker-jr/destiny_text_game/blob/master/white_helmet_drop.jpg?raw=true">';
var white_gauntlet_drop = '<img class="itemDrop" data-statType="Def:" data-itemType="gauntlet" data-itemStat="3" id="Logic Singer V" src="https://github.com/shadow-walker-jr/destiny_text_game/blob/master/white_gauntlet_drop.jpg?raw=true">'; 
var white_chest_drop = '<img class="itemDrop" data-statType="Def:" data-itemType="chest" data-itemStat="8" id="Logic Singer I" src="https://github.com/shadow-walker-jr/destiny_text_game/blob/master/white_chest_drop.jpg?raw=true">';
var white_boot_drop = '<img class="itemDrop" data-statType="Def:" data-itemType="boot" data-itemStat="3" id="Logic Singer II" src="https://github.com/shadow-walker-jr/destiny_text_game/blob/master/white_boot_drop.jpg?raw=true">';
var whiteTier1 = [omolon_hand_cannon, white_helmet_drop, white_gauntlet_drop, white_chest_drop, white_boot_drop];

// Tier 2
var galhad_auto = '<img class="itemDrop" data-statType="Atk:" data-itemType="weapon" data-itemStat="20" id="Galhad-B" src="https://github.com/shadow-walker-jr/destiny_text_game/blob/master/Galhad-B_Auto.jpg?raw=true">';
var rogue_helmet = '<img class="itemDrop" data-statType="Def:" data-itemType="helmet" data-itemStat="5" id="Rogue 4.5" src="https://github.com/shadow-walker-jr/destiny_text_game/blob/master/Rogue_4.5_Helmet.jpg?raw=true">';
var rogue_gauntlet = '<img class="itemDrop" data-statType="Def:" data-itemType="gauntlet" data-itemStat="5" id="Rogue 4.5" src="https://github.com/shadow-walker-jr/destiny_text_game/blob/master/Rogue_4.5_Gauntlet.jpg?raw=true">';
var rogue_chest = '<img class="itemDrop" data-statType="Def:" data-itemType="chest" data-itemStat="10" id="Rogue 4.5" src="https://github.com/shadow-walker-jr/destiny_text_game/blob/master/Rogue_4.5_Chest.jpg?raw=true">';
var rogue_boot = '<img class="itemDrop" data-statType="Def:" data-itemType="boot" data-itemStat="5" id="Rogue 4.5" src="https://github.com/shadow-walker-jr/destiny_text_game/blob/master/Rogue_4.5_Boot.jpg?raw=true">';
var whiteTier2 = [galhad_auto, rogue_helmet, rogue_gauntlet, rogue_chest, rogue_boot];

// Tier 3
var trax_callum_scout = '<img class="itemDrop" data-statType="Atk:" data-itemType="weapon" data-itemStat="25" id="Trax Callum I" src="https://github.com/shadow-walker-jr/destiny_text_game/blob/master/Trax_Callum_I_Scout.jpg?raw=true">';
var firebreak_helmet = '<img class="itemDrop" data-statType="Def:" data-itemType="helmet" data-itemStat="7" id="Firebreak Type-0" src="https://github.com/shadow-walker-jr/destiny_text_game/blob/master/Firebreak_Helmet.jpg?raw=true">';
var firebreeak_gauntlet = '<img class="itemDrop" data-statType="Def:" data-itemType="gauntlet" data-itemStat="7" id="Firebreak Type-0" src="https://github.com/shadow-walker-jr/destiny_text_game/blob/master/Firebreak_Gauntlet.jpg?raw=true">';
var firebreak_chest = '<img class="itemDrop" data-statType="Def:" data-itemType="chest" data-itemStat="13" id="Firebreak Type-0" src="https://github.com/shadow-walker-jr/destiny_text_game/blob/master/Firebreak_Chest.jpg?raw=true">';
var firebreak_boot = '<img class="itemDrop" data-statType="Def:" data-itemType="boot" data-itemStat="7" id="Firebreak Type-0" src="https://github.com/shadow-walker-jr/destiny_text_game/blob/master/Firebreak_Boot.jpg?raw=true">';
var whiteTier3 = [trax_callum_scout, firebreak_helmet, firebreeak_gauntlet, firebreak_chest, firebreak_boot];

// Green
// Tier 1
var singularity_scout = '<img class="itemDrop" data-statType="Atk:" data-itemType="weapon" data-itemStat="35" id="Singularity S.3" src="https://github.com/shadow-walker-jr/destiny_text_game/blob/master/Singularity_Scout.jpg?raw=true">';
var highlander_helmet = '<img class="itemDrop" data-statType="Def:" data-itemType="helmet" data-itemStat="10" id="Highlander Type-0" src="https://github.com/shadow-walker-jr/destiny_text_game/blob/master/Highlander_Helmet.jpg?raw=true">';
var highlander_gauntlet = '<img class="itemDrop" data-statType="Def:" data-itemType="gauntlet" data-itemStat="10" id="Highlander Type-0" src="https://github.com/shadow-walker-jr/destiny_text_game/blob/master/Highlander_Gauntlet.jpg?raw=true">';
var highlander_chest = '<img class="itemDrop" data-statType="Def:" data-itemType="chest" data-itemStat="18" id="Highlander Type-0" src="https://github.com/shadow-walker-jr/destiny_text_game/blob/master/Highlander_Chest.jpg?raw=true">';
var highlander_boot = '<img class="itemDrop" data-statType="Def:" data-itemType="boot" data-itemStat="10" id="Highlander Type-0" src="https://github.com/shadow-walker-jr/destiny_text_game/blob/master/Highlander_Boot.jpg?raw=true">';
var greenTier1 = [singularity_scout, highlander_helmet, highlander_gauntlet, highlander_chest, highlander_boot];

// Tier 2
var mos_ganon_III_hand = '<img class="itemDrop" data-statType="Atk:" data-itemType="weapon" data-itemStat="40" id="Mos Ganon III" src="https://github.com/shadow-walker-jr/destiny_text_game/blob/master/Mos_Ganon_III_Hand.jpg?raw=true">';
var agema_helmet = '<img class="itemDrop" data-statType="Def:" data-itemType="helmet" data-itemStat="13" id="Agema Type-0" src="https://github.com/shadow-walker-jr/destiny_text_game/blob/master/Agema_Helmet.jpg?raw=true">';
var agema_gauntlet = '<img class="itemDrop" data-statType="Def:" data-itemType="gauntlet" data-itemStat="13" id="Agema Type-0" src="https://github.com/shadow-walker-jr/destiny_text_game/blob/master/Agema_Gauntlet.jpg?raw=true">';
var agema_chest = '<img class="itemDrop" data-statType="Def:" data-itemType="chest" data-itemStat="21" id="Agema Type-0" src="https://github.com/shadow-walker-jr/destiny_text_game/blob/master/Agema_Chest.jpg?raw=true">';
var agema_boot = '<img class="itemDrop" data-statType="Def:" data-itemType="boot" data-itemStat="13" id="Agema Type-0" src="https://github.com/shadow-walker-jr/destiny_text_game/blob/master/Agema_Boot.jpg?raw=true">';
var greenTier2 = [mos_ganon_III_hand, agema_helmet, agema_gauntlet, agema_chest, agema_boot];

// Tier 3
var suros_tyr_auto = '<img class="itemDrop" data-statType="Atk:" data-itemType="weapon" data-itemStat="45" id="Suros TYR-14" src="https://github.com/shadow-walker-jr/destiny_text_game/blob/master/Suros_TYR-14_Auto.jpg?raw=true">';
var illyrian_helmet = '<img class="itemDrop" data-statType="Def:" data-itemType="helmet" data-itemStat="18" id="Illyrian Type-0" src="https://github.com/shadow-walker-jr/destiny_text_game/blob/master/Illyrian_Helmet.jpg?raw=true">';
var illyrian_gauntlet = '<img class="itemDrop" data-statType="Def:" data-itemType="gauntlet" data-itemStat="18" id="Illyrian Type-0" src="https://github.com/shadow-walker-jr/destiny_text_game/blob/master/Illyrian_Gauntlet.jpg?raw=true">';
var illyrian_chest = '<img class="itemDrop" data-statType="Def:" data-itemType="chest" data-itemStat="26" id="Illyrian Type-0" src="https://github.com/shadow-walker-jr/destiny_text_game/blob/master/Illyrian_Chest.jpg?raw=true">';
var illyrian_boot = '<img class="itemDrop" data-statType="Def:" data-itemType="boot" data-itemStat="18" id="Illyrian Type-0" src="https://github.com/shadow-walker-jr/destiny_text_game/blob/master/Illyrian_Boot.jpg?raw=true">';
var greenTier3 = [suros_tyr_auto, illyrian_helmet, illyrian_gauntlet, illyrian_chest, illyrian_boot];

// Blue
// Tier 1
var wysestart_x9_scout = '<img class="itemDrop" data-statType="Atk:" data-itemType="weapon" data-itemStat="60" id="Wyestart X9" src="https://github.com/shadow-walker-jr/destiny_text_game/blob/master/Wyestart_X9_Scout.jpg?raw=true">';
var toutatis_helmet = '<img class="itemDrop" data-statType="Def:" data-itemType="helmet" data-itemStat="23" id="Toutatis Type-0" src="https://github.com/shadow-walker-jr/destiny_text_game/blob/master/Toutatis_Helmet.jpg?raw=true">';
var toutatis_gauntlet = '<img class="itemDrop" data-statType="Def:" data-itemType="gauntlet" data-itemStat="23" id="Toutatis Type-0" src="https://github.com/shadow-walker-jr/destiny_text_game/blob/master/Toutatis_Gauntlet.jpg?raw=true">';
var blueTier1 = [wysestart_x9_scout, toutatis_helmet, toutatis_gauntlet];

document.getElementById("PlayerHealth").innerHTML = playerHealth;
document.getElementById("enemyKilled").innerHTML = killCounter;
main();
SetDefStats();
SetDmgStats();


function main(){
	healthReset();
	var EnemySelector = Math.floor(Math.random()*5);
	FindEnemy(EnemySelector);
	SetEnemyHealth(EnemySelector);
}

function healthReset(){
	playerHealth = 30;
	document.getElementById("PlayerHealth").innerHTML = playerHealth;
}

function SetDmgStats(){ //Every 10 playerDMG increase DMG mult by .1
	var playerDMG = $('img[data-equipedItemType="weapon"]').attr('data-itemStat');
	var dmgMult = (parseInt(playerDMG) / 100) + 1;
	$('#playerDamage').text(playerDMG);
	return dmgMult;
}

function SetDefStats(){
	var helmetDef = parseInt($('img[data-equipedItemType="helmet"]').attr('data-itemStat'));
	var gauntletDef = parseInt($('img[data-equipedItemType="gauntlet"]').attr('data-itemStat'));
	var chestDef = parseInt($('img[data-equipedItemType="chest"]').attr('data-itemStat'));
	var bootDef = parseInt($('img[data-equipedItemType="boot"]').attr('data-itemStat'));

	var playerDefence = helmetDef + gauntletDef + chestDef + bootDef;
	$('#playerDefence').text(playerDefence);
	var defenceMult = (playerDefence / 100) + 1;
	return defenceMult;
}

function killReset(){
	killCounter = 0;
	document.getElementById("enemyKilled").innerHTML = killCounter;
}

function ShowEnemyPic(){
	var enemyName = document.getElementById("enemyName").textContent;
	$('#skolas').css('display', 'none');
	$('#riksisArchon').css('display', 'none');
	$('#sepiksPrime').css('display', 'none');
	if(enemyName == "Dreg"){
		document.getElementById('captainPic').style.display =  "none";
		document.getElementById('vandalPic').style.display =  "none";
		document.getElementById('dregPic').style.display = "block";
		document.getElementById('shankPic').style.display = "none";
		document.getElementById('servitorPic').style.display = "none";
	} else if(enemyName == "Vandal"){
		document.getElementById('captainPic').style.display =  "none";
		document.getElementById('vandalPic').style.display =  "block";
		document.getElementById('dregPic').style.display = "none";
		document.getElementById('shankPic').style.display = "none";
		document.getElementById('servitorPic').style.display = "none";
	} else if(enemyName == "Captain"){
		document.getElementById('captainPic').style.display =  "block";
		document.getElementById('vandalPic').style.display =  "none";
		document.getElementById('dregPic').style.display = "none";
		document.getElementById('shankPic').style.display = "none";
		document.getElementById('servitorPic').style.display = "none";
	} else if (enemyName == "Shank"){
		document.getElementById('captainPic').style.display =  "none";
		document.getElementById('vandalPic').style.display =  "none";
		document.getElementById('dregPic').style.display = "none";
		document.getElementById('shankPic').style.display = "block";
		document.getElementById('servitorPic').style.display = "none";
	} else if (enemyName == "Servitor"){
		document.getElementById('captainPic').style.display =  "none";
		document.getElementById('vandalPic').style.display =  "none";
		document.getElementById('dregPic').style.display = "none";
		document.getElementById('shankPic').style.display = "none";
		document.getElementById('servitorPic').style.display = "block";
	} else {
		document.getElementById('captainPic').style.display =  "none";
		document.getElementById('vandalPic').style.display =  "none";
		document.getElementById('dregPic').style.display = "none";
		document.getElementById('shankPic').style.display = "none";
		document.getElementById('servitorPic').style.display = "none";
	}
}

function FindEnemy(enemyValue){
	var Dreg = "Dreg";
	var Captain = "Captain";
	var Vandal = "Vandal";
	var Shank = "Shank";
	var Servitor = "Servitor";
	switch (enemyValue){
case 0: //Dreg
document.getElementById('enemyName').innerHTML = Dreg;
ShowEnemyPic();
return Dreg;
break;
case 1: //Vandal
document.getElementById('enemyName').innerHTML = Vandal;
ShowEnemyPic();
return Vandal;
break;
case 2: //Captain
document.getElementById('enemyName').innerHTML = Captain;
ShowEnemyPic();
return Captain;
break;
case 3: //Shank
document.getElementById('enemyName').innerHTML = Shank;
ShowEnemyPic();
return Shank;
break;
case 4: //Servitor
document.getElementById('enemyName').innerHTML = Servitor;
ShowEnemyPic();
return Servitor;
break;
}
}

function ShowBossPic(bossID){
	ShowEnemyPic();
	switch(bossID) {
		case 0:
		$('#skolas').css('display', 'block');
		$('#riksisArchon').css('display', 'none');
		$('#sepiksPrime').css('display', 'none');
		break;
		case 1:
		$('#skolas').css('display', 'none');
		$('#riksisArchon').css('display', 'none');
		$('#sepiksPrime').css('display', 'block');
		break;
		case 2:
		$('#skolas').css('display', 'none');
		$('#riksisArchon').css('display', 'block');
		$('#sepiksPrime').css('display', 'none');
	}
}

function FindEnemyBoss(){
	var Sepiks = 'Sepiks Prime';
	var Riksis = "Riksis, Devil Archon";
	var Skolas = "Skolas, Kell";
	var bossNum = Math.floor(Math.random()*2);
	var bossID;
	if ((bossesKilled % 5) == 0 && bossesKilled != 0){
		$('#enemyName').text(Skolas);
		$('#enemyHealth').text(skolasHealth);
		bossesKilled = 0;
		bossID = 0;
	} else {
		switch(bossNum) {
			case 0:
			$('#enemyHealth').text(sepiksHealth);
			$('#enemyName').text(Sepiks);
			bossID = 1;
			break;
			case 1:
			$('#enemyHealth').text(riksisHealth);
			$('#enemyName').text(Riksis);
			bossID = 2;
			break;
		}
	}
	ShowBossPic(bossID);
}

function SetEnemyHealth(enemyValue){
	switch(enemyValue){
		case 0:
		document.getElementById('enemyHealth').innerHTML = dregHealth;
		return dregHealth;
		break;
		case 1:
		document.getElementById('enemyHealth').innerHTML = vandalHealth;
		return vandalHealth;
		break;
		case 2:
		document.getElementById('enemyHealth').innerHTML = captainHealth;
		return captainHealth;
		break;
		case 3: 
		document.getElementById('enemyHealth').innerHTML = shankHealth;
		return shankHealth;
		break;
		case 4:
		document.getElementById('enemyHealth').innerHTML = servitorHealth;
		return servitorHealth;
		break;
	}
}

function HitEnemyPre(){
	HitEnemy();
	document.getElementById('hitEnemy').disabled = true;
	setTimeout(function(){document.getElementById('hitEnemy').disabled = false;}, 250)
}

function HitEnemy(){
	var damageMult = SetDmgStats();
	var damage = (Math.floor(Math.random()*10)) * damageMult;
	var currentEnemyHealth = document.getElementById("enemyHealth").textContent;
	currentEnemyHealth = currentEnemyHealth - damage.toFixed(2);
	var currentEnemy = $('#enemyName').text();
	document.getElementById("enemyHealth").innerHTML = currentEnemyHealth.toFixed(2);
	DamagePlayer();
	if(currentEnemyHealth <= 0){
		killCounter++;
		if ((killCounter % 5) == 0){
			FindEnemyBoss();
		} else {
			main();
		}
		healthReset();
		$('#enemyKilled').text(killCounter);
		switch(currentEnemy) {
			case "Sepiks Prime":
			case "Riksis, Devil Archon":
			GreenItemDrops();
			bossesKilled++;
			break;
			case "Skolas, Kell":
			BlueItemDrops();
			break;
			default:
			WhiteItemDrops();
			MatDrops();
		}
	}
}

function DamagePlayer(){ 
	var defence = SetDefStats();
	var enemyDamage = ((Math.floor(Math.random()*10)) / defence).toFixed(2);
	var spawnedEnemy = $('#enemyName').text();
	switch(spawnedEnemy) {
		case "Dreg":
		case "Shank":
		case "Vandal":
		var updatedEnemyDamage = enemyDamage * gruntAtkMult;
		break;
		case "Captain":
		var updatedEnemyDamage = enemyDamage * midAtkMult;
		break;
		case "Servitor":
		var updatedEnemyDamage = enemyDamage * majorAtkMult;
		break;
		case "Sepiks Prime":
		case "Riksis, Devil Archon":
		case "Skolas, Kell":
		var updatedEnemyDamage = enemyDamage * bossAtkMult;
		break;
	}
	playerHealth = playerHealth - updatedEnemyDamage.toFixed(2); 
	document.getElementById("PlayerHealth").innerHTML = playerHealth.toFixed(2);
	HideCheck();
	if(playerHealth <= 0){
		main();
		killReset();
		healthReset();
		alert("You Died!");
	}
}

function WhiteTier1(){
	var itemSelector = Math.floor(Math.random()*5);
	return whiteTier1[itemSelector];
}

function WhiteTier2(){
	var itemSelector = Math.floor(Math.random()*5);
	return whiteTier2[itemSelector];
}

function WhiteTier3(){
	var itemSelector = Math.floor(Math.random()*5);
	return whiteTier3[itemSelector];
}

function GreenTier1(){
	var itemSelector = Math.floor(Math.random()*5);
	return greenTier1[itemSelector];
}

function GreenTier2(){
	var itemSelector = Math.floor(Math.random()*5);
	return greenTier2[itemSelector];
}

function GreenTier3(){
	var itemSelector = Math.floor(Math.random()*5);
	return greenTier3[itemSelector];
}

function BlueTier1(){
	var itemSelector = Math.floor(Math.random()*3);
	return blueTier1[itemSelector];
}

function GreenItemDrops(){
	var openSlotsMin = Math.min.apply(Math, openSlots);
	var slotID = 'slot' + openSlotsMin;
	var itemRNG = Math.floor(Math.random()*100);
	var playerDef = $('#playerDefence').text();

	if (playerDef >= 34 && playerDef < 48){
		if (itemRNG < 40){
			var itemDrop = GreenTier1();
			$('div#' + slotID).html(itemDrop);
			openSlots.shift();
		} else if (itemRNG > 45 && itemRNG < 77){
			var itemDrop = GreenTier2();
			$('div#' + slotID).html(itemDrop);
			openSlots.shift();
		} else if (itemRNG > 87 && itemRNG < 100){
			var itemDrop = GreenTier3();
			$('div#' + slotID).html(itemDrop);
			openSlots.shift();
		}
	} else if (playerDef >= 48 && playerDef < 60){
		if (itemRNG < 30){
			var itemDrop = GreenTier1();
			$('div#' + slotID).html(itemDrop);
			openSlots.shift();
		} else if (itemRNG > 35 && itemRNG < 77){
			var itemDrop = GreenTier2();
			$('div#' + slotID).html(itemDrop);
			openSlots.shift();
		} else if (itemRNG > 87 && itemRNG < 100){
			var itemDrop = GreenTier3();
			$('div#' + slotID).html(itemDrop);
			openSlots.shift();
		}
	} else if (playerDef >= 60 && playerDef < 81){
		if (itemRNG < 15){
			var itemDrop = GreenTier1();
			$('div#' + slotID).html(itemDrop);
			openSlots.shift();
		} else if (itemRNG > 20 && itemRNG < 62){
			var itemDrop = GreenTier2();
			$('div#' + slotID).html(itemDrop);
			openSlots.shift();
		} else if (itemRNG > 73 && itemRNG < 100){
			var itemDrop = GreenTier3();
			$('div#' + slotID).html(itemDrop);
			openSlots.shift();
		}
	}
	openSlots.sort(function(a, b){
		return a - b;
	});
}

function BlueItemDrops(){
	var openSlotsMin = Math.min.apply(Math, openSlots);
	var slotID = 'slot' + openSlotsMin;
	var itemRNG = Math.floor(Math.random()*100);
	var playerDef = $('#playerDefence').text();

	if(playerDef >= 80){
		if(itemRNG < 70){
			var itemDrop = BlueTier1();
			$('div#' + slotID).html(itemDrop);
			openSlots.shift();
		}
	}
	openSlots.sort(function(a, b){
		return a - b;
	});
}

function WhiteItemDrops(){
	var openSlotsMin = Math.min.apply(Math, openSlots);
	var slotID = 'slot' + openSlotsMin;
	var itemRNG = Math.floor(Math.random()*100);
	var playerDef = $('#playerDefence').text();

	if (playerDef < 17){
		if (itemRNG < 40){
			var itemDrop = WhiteTier1();
			$('div#' + slotID).html(itemDrop);
			openSlots.shift();
		} else if (itemRNG > 45 && itemRNG < 77){
			var itemDrop = WhiteTier2();
			$('div#' + slotID).html(itemDrop);
			openSlots.shift();
		} else if (itemRNG > 87 && itemRNG < 100){
			var itemDrop = WhiteTier3();
			$('div#' + slotID).html(itemDrop);
			openSlots.shift();
		}
	} else if (playerDef > 16 && playerDef < 25){
		if (itemRNG < 30){
			var itemDrop = WhiteTier1();
			$('div#' + slotID).html(itemDrop);
			openSlots.shift();
		} else if (itemRNG > 35 && itemRNG < 77){
			var itemDrop = WhiteTier2();
			$('div#' + slotID).html(itemDrop);
			openSlots.shift();
		} else if (itemRNG > 87 && itemRNG < 100){
			var itemDrop = WhiteTier3();
			$('div#' + slotID).html(itemDrop);
			openSlots.shift();
		}
	} else if (playerDef >= 25 && playerDef < 35){
		if (itemRNG < 15){
			var itemDrop = WhiteTier1();
			$('div#' + slotID).html(itemDrop);
			openSlots.shift();
		} else if (itemRNG > 20 && itemRNG < 62){
			var itemDrop = WhiteTier2();
			$('div#' + slotID).html(itemDrop);
			openSlots.shift();
		} else if (itemRNG > 73 && itemRNG < 100){
			var itemDrop = WhiteTier3();
			$('div#' + slotID).html(itemDrop);
			openSlots.shift();
		}
	}
	openSlots.sort(function(a, b){
		return a - b;
	});
}

function MatDrops(){
	var matRNG = Math.floor(Math.random()*3);
	switch(matRNG) {
		case 2:
			var dropAmt = Math.floor(Math.random()*2) + 1;
			var currentEnemy = $('.enemyPic > img').attr('class');
			var matAmt = parseInt($('span.' + currentEnemy).text());
			var newMatAmt = matAmt + dropAmt;
			if (matAmt == 999 || newMatAmt > 999){
				$('span.' + currentEnemy).text(newMatAmt);
			} else {

			}
			break;
		default:
			break;
	}
	
}

$('.gear2').children().click(function() {
	var selectedItem = [$(this) /*0*/, $(this).attr('class') /*1*/, $(this).attr('id') /*2*/, $(this).attr('src') /*3*/, $(this).attr('data-itemStat') /*4*/, $(this).attr('data-statType') /*5*/];
	

	switch(selectedItem[1]) {
		case "weapon":
			var dialogMessage = dialogBox[0] + selectedItem[2] + dialogBox[1] + selectedItem[3] + dialogBox[2] + "Atk:" + selectedItem[4] + dialogBox[3];
			break;
		default:
			var dialogMessage = dialogBox[0] + selectedItem[2] + dialogBox[1] + selectedItem[3] + dialogBox[2] + "Def:" + selectedItem[4] + dialogBox[3];
			break;
	}

	$('.armorDialog').html(dialogMessage).dialog({
		buttons: {
			'Close': function(){
				$(this).dialog('destroy');
			}
		}
	});
	// var dialogBox = ['<div class="dialogBoxLeft"><p>', '</p><img src=', '></div><div class="dialogBoxRight"> <span style="color: white;">as</span><span style="font-size: 1.2em; font-weight=bold;">', '</span><span>    ', '</span></div>'];

});

$('div.slot').click( // Equip Unequip
	function(){
		var equipedItemTypes = ['weapon', 'helmet', 'gauntlet', 'chest', 'boot'];

		var equipedWeapon = $("img[data-equipedItemType = 'weapon']");
		var equipedHelmet = $("img[data-equipedItemType = 'helmet']");
		var equipedGauntlet = $("img[data-equipedItemType = 'gauntlet']");
		var equipedChest = $("img[data-equipedItemType = 'chest']");
		var equipedBoot = $("img[data-equipedItemType = 'boot']");

		var helmetArray = [equipedHelmet.attr('id'), equipedHelmet.attr('src'), equipedHelmet.attr('data-itemStat')];
		var gauntletArray = [equipedGauntlet.attr('id'), equipedGauntlet.attr('src'), equipedGauntlet.attr('data-itemStat')];
		var chestArray = [equipedChest.attr('id'), equipedChest.attr('src'), equipedChest.attr('data-itemStat')];
		var bootArray = [equipedBoot.attr('id'), equipedBoot.attr('src'), equipedBoot.attr('data-itemStat')];
		var weaponArray = [equipedWeapon.attr('id'), equipedWeapon.attr('src'), equipedWeapon.attr('data-itemStat')];

		var selectedItem = [$(this).children() /*0*/, $(this).children().attr('data-itemType') /*1*/, $(this).children().attr('id') /*2*/, $(this).children().attr('src') /*3*/, $(this).children().attr('data-itemStat') /*4*/, $(this).children().attr('data-statType') /*5*/, $(this).attr('data-slotId') /*6*/];

		var dialogMessage = dialogBox[0] + selectedItem[2] + dialogBox[1] + selectedItem[3] + dialogBox[2] + selectedItem[5] + selectedItem[4] + dialogBox[3];
		$('.armorDialog').html(dialogMessage).dialog({
			buttons: {
				'Equip': function(){
					switch (selectedItem[1]){
						case equipedItemTypes[0]:
						$('#playerDamage').text(selectedItem[4]);
						selectedItem[0].attr('src', weaponArray[1]);
						selectedItem[0].attr('data-itemStat', weaponArray[2]);
						selectedItem[0].attr('id', weaponArray[0]);
						equipedWeapon.attr('src', selectedItem[3]);
						equipedWeapon.attr('data-itemStat', selectedItem[4]);
						equipedWeapon.attr('id', selectedItem[2]);
						break;
						case equipedItemTypes[1]:
						$('#playerDefence').text(parseInt(selectedItem[4]) + parseInt(gauntletArray[2]) + parseInt(chestArray[2]) + parseInt(bootArray[2]));
						selectedItem[0].attr('src', helmetArray[1]);
						selectedItem[0].attr('data-itemStat', helmetArray[2]);
						selectedItem[0].attr('id', helmetArray[0]);
						equipedHelmet.attr('src', selectedItem[3]);
						equipedHelmet.attr('data-itemStat', selectedItem[4]);
						equipedHelmet.attr('id', selectedItem[2]);
						break;
						case equipedItemTypes[2]:
						$('#playerDefence').text(parseInt(selectedItem[4]) + parseInt(helmetArray[2]) + parseInt(chestArray[2]) + parseInt(bootArray[2]));
						selectedItem[0].attr('src', gauntletArray[1]);
						selectedItem[0].attr('data-itemStat', gauntletArray[2]);
						selectedItem[0].attr('id', gauntletArray[0]);
						equipedGauntlet.attr('src', selectedItem[3]);
						equipedGauntlet.attr('data-itemStat', selectedItem[4]);
						equipedGauntlet.attr('id', selectedItem[2]);
						break;
						case equipedItemTypes[3]:
						$('#playerDefence').text(parseInt(selectedItem[4]) + parseInt(helmetArray[2]) + parseInt(gauntletArray[2]) + parseInt(bootArray[2]));
						selectedItem[0].attr('src', chestArray[1]);
						selectedItem[0].attr('data-itemStat', chestArray[2]);
						selectedItem[0].attr('id', chestArray[0]);
						equipedChest.attr('src', selectedItem[3]);
						equipedChest.attr('data-itemStat', selectedItem[4]);
						equipedChest.attr('id', selectedItem[2]);
						break;z
						case equipedItemTypes[4]:
						$('#playerDefence').text(parseInt(selectedItem[4]) + parseInt(helmetArray[2]) + parseInt(chestArray[2]) + parseInt(gauntletArray[2]));
						selectedItem[0].attr('src', bootArray[1]);
						selectedItem[0].attr('data-itemStat', bootArray[2]);
						selectedItem[0].attr('id', bootArray[0]);
						equipedBoot.attr('src', selectedItem[3]);
						equipedBoot.attr('data-itemStat', selectedItem[4]);
						equipedBoot.attr('id', selectedItem[2]);
						break;
					}
					$(this).dialog('destroy');
				},
				'Close': function(){
					$(this).dialog('destroy');
				},
				'Dismantle': function(){
					openSlots.push(selectedItem[6]);
					openSlots.sort(function(a, b){
						return a - b;
					});
					selectedItem[0].remove();
					$(this).dialog('destroy');
				},
				'Bulk Dismantle': function(){
					var confirmation = prompt("Are you sure? (y/n)");
					if(confirmation == 'y'){
						$('.slot').children().remove();
						openSlots = [];
						openSlots.push(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20);
						openSlots.sort(function(a, b){
							return a - b;
						});
						$(this).dialog('destroy');
					} else if (confirmation == 'n'){

					}
				}
			}
		});
	}
	);

$('#saveGame').click(function(){
	var savedItems = $(".slotBoxLeft").html();
	var equipedItems = $('.gear2').html();
	localStorage.clear();
	localStorage.setItem("savedItems", savedItems);
	localStorage.setItem("openSlots", openSlots);
	localStorage.setItem("equipedItems", equipedItems);
});

$('#Btn').click(function(){
	localStorage.clear();
});

var lock = false;
function LockHitEnemy(){
	lock = true;
	setTimeout(function(){
		lock = false;
	}, 250);
}

$('body').bind("keydown", event => {
	if (event.keyCode === 13){
		if(lock == false){
			HitEnemyPre();
			LockHitEnemy();
		} else {

		}
	}
});

function Hide(){
	var healAmt = Math.floor(Math.random()*10);
	playerHealth += healAmt;
	$('#PlayerHealth').text(playerHealth.toFixed(2));
	$('#hide').css('display', 'none');
}

function HideCheck(){
	var hidden = Math.floor(Math.random()*7);
	switch(hidden) {
		case 2:
			$('#hide').css('display', 'inline');
			break;
		default:
			break;
	}
}
// }