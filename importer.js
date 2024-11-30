        const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwUwfKeWO_DQUSmo7Dw0Qy7eXD6xxJjjlfBg8OEUGHzRYyrBUBLbsni3eZNSR2c1INd/exec'; // Replace with your Apps Script web app URL

        function processData() {
            const emailContent = document.getElementById('emailContent').value;
            const parsedDataElement = document.getElementById('parsedData');
            const apiStatusElement = document.getElementById('apiStatus');

            const lines = emailContent.split('\n');
            const dateRegex = /\d{4}\/\d{2}\/\d{2}/;
            const crewRegex = /Flight Deck Crew/;

            let date = lines.find(line => dateRegex.test(line)).trim();
            let flights = [];
            let currentFlight = {};
            let crewSection = false;
            let crewMap = {};

            lines.forEach((line, i) => {
                line = line.trim();
                if (!line) return;

                if (line.startsWith('FlightNumber')) {
                    if (Object.keys(currentFlight).length) {
                        flights.push(currentFlight);
                    }
                    currentFlight = { date };
                } else if (crewRegex.test(line)) {
                    crewSection = true;
                }

                if (crewSection) {
                    const match = line.match(/^(\w+)\s+:\s+(\w+)\s+:\s+(.+)/);
                    if (match) {
                        const [_, code, role, name] = match;
                        crewMap[code] = { role, name };
                    }
                } else {
                    const [key, value] = line.split(/\s*:\s*/);
                    if (key && value) {
                        currentFlight[key.replace(/\s+/g, '')] = value;
                    }
                }
            });

            if (Object.keys(currentFlight).length) {
                flights.push(currentFlight);
            }

            flights = flights.map(flight => {
                const pilotFlying = crewMap[flight.PilotFlyingTakeOff]?.name || crewMap[flight.PilotFlyingLanding]?.name || '';
                return [
                    flight.date, flight.FlightNumber, flight.Registration, flight.CityPair.split('-')[0].trim(),
                    flight.CityPair.split('-')[1].trim(), flight.STD, flight.STA, flight.Block,
                    flight.TripTaxi, flight.Reserves, flight.Uplift, flight.Dep, flight.Arr,
                    flight.BurnOff, flight.BurnDiff, flight.ReasonForExtraFuel, flight.Adult, flight.Child,
                    flight.Infant, flight.ActualPax, flight.Freight, flight.PlacardWeight, flight.Airborne,
                    flight.Landed, flight.Totalflight, flight.OffBlock, flight.OnBlock, flight.TotalBlock,
                    pilotFlying, flight.CaptainRemarks, crewMap[flight.VerifiedBy?.split(',')[0]]?.name || '', '', '',
                    '', ''
                ];
            });

            parsedDataElement.textContent = JSON.stringify(flights, null, 2);

            // Send data to the Apps Script web app
            fetch(SCRIPT_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(flights)
            })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        apiStatusElement.textContent = 'Data successfully added to Google Sheets!';
                    } else {
                        apiStatusElement.textContent = `Error: ${data.message}`;
                    }
                })
                .catch(error => {
                    apiStatusElement.textContent = `Error: ${error.message}`;
                });
        }