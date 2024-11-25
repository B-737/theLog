function addFlight(){
    let date = document.getElementById("date").value;
    let registration = document.getElementById("registration").value;
    let departure = document.getElementById("departure").value;
    let arrival = document.getElementById("arrival").value
    let offBlock = document.getElementById("offblock").value;
    let onBlock = document.getElementById("onblock").value;
    let airborne = document.getElementById("airborne").value;
    let landed = document.getElementById("landed").value;
    let pilotFlying = document.getElementById("pilotFlying").value;
    let safetyPilot = document.getElementById("safetyPilot").value;

console.log(date + registration + departure + arrival + offBlock + onBlock + airborne + landed + pilotFlying + safetyPilot);
}