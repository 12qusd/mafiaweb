var totalPlayers;
function setzero() {
	$('.left').find('input').val("0");
}
function generate() {
	$("#setup").html("");
	totalPlayers = 0;
	generateTown();
	generateMafia();
	generateTriad();
	generateNeutral();
	$("#setup").append("<h3 class='total'>Total Players: " + totalPlayers + " </h3>");
}
function generateTown() {
	var towngov = $("#towngovernment").val();
	var towninv = $("#towninvestigative").val();
	var townkill = $("#townkilling").val();
	var townpow = $("#townpower").val();
	var townprot = $("#townprotective").val();
	var townrand = $("#townrandom").val();
	var total = (1*towngov) + (1*towninv) + (1*townkill) + (1*townpow) + (1*townprot) + (1*townrand);
	totalPlayers += total;
	$("#setup").append("<h3 class='town'>Town: " + total + " </h3>");
	for (var i = 0; i < (1*towngov); i++) {
		$("#setup").append(towngovernment());
	}
	for (var i = 0; i < (1*towninv); i++) {
		$("#setup").append(towninvestigative());
	}
	for (var i = 0; i < (1*townkill); i++) {
		$("#setup").append(townkilling());
	}
	for (var i = 0; i < (1*townpow); i++) {
		$("#setup").append(townpower());
	}
	for (var i = 0; i < (1*townprot); i++) {
		$("#setup").append(townprotective());
	}
	for (var i = 0; i < (1*townrand); i++) {
		$("#setup").append(townrandom());
	}
}
function generateMafia() {
	var mafiasupp = $("#mafiasupport").val();
	var mafiakill = $("#mafiakilling").val();
	var mafiadec = $("#mafiadeception").val();
	var mafiarand = $("#mafiarandom").val();
	var total = (1*mafiasupp) + (1*mafiakill) + (1*mafiadec) + (1*mafiarand);
	totalPlayers += total;
	$("#setup").append("<h3 class='mafia'>Mafia: " + total + " </h3>");
	for (var i = 0; i < (1*mafiasupp); i++) {
		$("#setup").append(mafiasupport());
	}
	for (var i = 0; i < (1*mafiakill); i++) {
		$("#setup").append(mafiakilling());
	}
	for (var i = 0; i < (1*mafiadec); i++) {
		$("#setup").append(mafiadeception());
	}
	for (var i = 0; i < (1*mafiarand); i++) {
		$("#setup").append(mafiarandom());
	}
}
function generateTriad() {
	var triadsupp = $("#triadsupport").val();
	var triadkill = $("#triadkilling").val();
	var triaddec = $("#triaddeception").val();
	var triadrand = $("#triadrandom").val();
	var total = (1*triadsupp) + (1*triadkill) + (1*triaddec) + (1*triadrand);
	totalPlayers += total;
	$("#setup").append("<h3 class='triad'>Triad: " + total + " </h3>");
	for (var i = 0; i < (1*triadsupp); i++) {
		$("#setup").append(triadsupport());
	}
	for (var i = 0; i < (1*triadkill); i++) {
		$("#setup").append(triadkilling());
	}
	for (var i = 0; i < (1*triaddec); i++) {
		$("#setup").append(triaddeception());
	}
	for (var i = 0; i < (1*triadrand); i++) {
		$("#setup").append(triadrandom());
	}
}
function generateNeutral() {
	var neutralben = $("#neutralbenign").val();
	var neutralev = $("#neutralevil").val();
	var neutralkill = $("#neutralkilling").val();
	var neutralrand = $("#neutralrandom").val();
	var total = (1*neutralben) + (1*neutralev) + (1*neutralkill) + (1*neutralrand);
	totalPlayers += total;
	$("#setup").append("<h3 class='neutral'>Neutral: " + total + " </h3>");
	for (var i = 0; i < (1*neutralben); i++) {
		$("#setup").append(neutralbenign());
	}
	for (var i = 0; i < (1*neutralev); i++) {
		$("#setup").append(neutralevil());
	}
	for (var i = 0; i < (1*neutralkill); i++) {
		$("#setup").append(neutralkilling());
	}
	for (var i = 0; i < (1*neutralrand); i++) {
		$("#setup").append(neutralrandom());
	}
}
// Town generation functions
function towngovernment() {
	switch(Math.floor(Math.random()*6) + 1) {
		case 1:
			return "<span class='town'>Citizen</span><br>";
		case 2:
			return "<span class='town'>Crier</span><br>";
		case 3:
			return "<span class='town'>Marshall</span><br>";
		case 4:
			return "<span class='town'>Mason</span><br>";
		case 5:
			return "<span class='town'>Mason Leader</span><br>";
		case 6:
			return "<span class='town'>Mayor</span><br>";
	}
}
function towninvestigative() {
	switch(Math.floor(Math.random()*5) + 1) {
		case 1:
			return "<span class='town'>Sheriff</span><br>";
		case 2:
			return "<span class='town'>Detective</span><br>";
		case 3:
			return "<span class='town'>Investigator</span><br>";
		case 4:
			return "<span class='town'>Lookout</span><br>";
		case 5:
			return "<span class='town'>Coroner</span><br>";
	}
}
function townkilling() {
	switch(Math.floor(Math.random()*3) + 1) {
		case 1:
			return "<span class='town'>Bodyguard</span><br>";
		case 2:
			return "<span class='town'>Veteran</span><br>";
		case 3:
			return "<span class='town'>Vigilante</span><br>";
	}
}
function townpower() {
	switch(Math.floor(Math.random()*3) + 1) {
		case 1:
			return "<span class='town'>Bus Driver</span><br>";
		case 2:
			return "<span class='town'>Veteran</span><br>";
		case 3:
			return "<span class='town'>Vigilante</span><br>";
	}
}
function townprotective() {
	switch(Math.floor(Math.random()*4) + 1) {
		case 1:
			return "<span class='town'>Bodyguard</span><br>";
		case 2:
			return "<span class='town'>Bus Driver</span><br>";
		case 3:
			return "<span class='town'>Doctor</span><br>";
		case 4:
			return "<span class='town'>Escort</span><br>";
	}
}
function townrandom() {
	switch(Math.floor(Math.random()*5) + 1) {
		case 1:
			return towngovernment();
		case 2:
			return towninvestigative();
		case 3:
			return townkilling();
		case 4:
			return townpower();
		case 5:
			return townprotective();
	}
}
// Mafia generation functions
function mafiasupport() {
	switch(Math.floor(Math.random()*4) + 1) {
		case 1:
			return "<span class='mafia'>Agent</span><br>";
		case 2:
			return "<span class='mafia'>Blackmailer</span><br>";
		case 3:
			return "<span class='mafia'>Consigliere</span><br>";
		case 4:
			return "<span class='mafia'>Consort</span><br>";
	}
}
function mafiakilling() {
	switch(Math.floor(Math.random()*2) + 1) {
		case 1:
			return "<span class='mafia'>Godfather</span><br>";
		case 2:
			return "<span class='mafia'>Mafioso</span><br>";
	}
}
function mafiadeception() {
	switch(Math.floor(Math.random()*3) + 1) {
		case 1:
			return "<span class='mafia'>Beguiler</span><br>";
		case 2:
			return "<span class='mafia'>Framer</span><br>";
		case 3:
			return "<span class='mafia'>Janitor</span><br>";
	}
}
function mafiarandom() {
	switch(Math.floor(Math.random()*3) + 1) {
		case 1:
			return mafiasupport();
		case 2:
			return mafiakilling();
		case 3:
			return mafiadeception();
	}
}
// Triad generation functions
function triadsupport() {
	switch(Math.floor(Math.random()*4) + 1) {
		case 1:
			return "<span class='triad'>Administrator</span><br>";
		case 2:
			return "<span class='triad'>Liason</span><br>";
		case 3:
			return "<span class='triad'>Silencer</span><br>";
		case 4:
			return "<span class='triad'>Vanguard</span><br>";
	}
}
function triadkilling() {
	switch(Math.floor(Math.random()*2) + 1) {
		case 1:
			return "<span class='triad'>Dragon Head</span><br>";
		case 2:
			return "<span class='triad'>Enforcer</span><br>";
	}
}
function triaddeception() {
	switch(Math.floor(Math.random()*3) + 1) {
		case 1:
			return "<span class='triad'>Deceiver</span><br>";
		case 2:
			return "<span class='triad'>Forger</span><br>";
		case 3:
			return "<span class='triad'>Incense Master</span><br>";
	}
}
function triadrandom() {
	switch(Math.floor(Math.random()*3) + 1) {
		case 1:
			return triadsupport();
		case 2:
			return triadkilling();
		case 3:
			return triaddeception();
	}
}
// Neutral generation functions
function neutralbenign() {
	switch(Math.floor(Math.random()*4) + 1) {
		case 1:
			return "<span class='neutral'>Amnesiac</span><br>";
		case 2:
			return "<span class='neutral'>Executioner</span><br>";
		case 3:
			return "<span class='neutral'>Jester</span><br>";
		case 4:
			return "<span class='neutral'>Survivor</span><br>";
	}
}
function neutralevil() {
	switch(Math.floor(Math.random()*8) + 1) {
		case 1:
			return "<span class='neutral'>Arsonist</span><br>";
		case 2:
			return "<span class='neutral'>Auditor</span><br>";
		case 3:
			return "<span class='neutral'>Cultist</span><br>";
		case 4:
			return "<span class='neutral'>Electrocutioner</span><br>";
		case 5:
			return "<span class='neutral'>Mass Murderer</span><br>";
		case 6:
			return "<span class='neutral'>Serial Killer</span><br>";
		case 7:
			return "<span class='neutral'>Witch</span><br>";
		case 8:
			return "<span class='neutral'>Witch Doctor</span><br>";
	}
}
function neutralkilling() {
	switch(Math.floor(Math.random()*4) + 1) {
		case 1:
			return "<span class='neutral'>Arsonist</span><br>";
		case 2:
			return "<span class='neutral'>Mass Murderer</span><br>";
		case 3:
			return "<span class='neutral'>Serial Killer</span><br>";
		case 4:
			return "<span class='neutral'>Electrocutioner</span><br>";
	}
}
function neutralrandom() {
	switch(Math.floor(Math.random()*3) + 1) {
		case 1:
			return neutralbenign();
		case 2:
			return neutralevil();
		case 3:
			return neutralkilling();
	}
}