document.addEventListener('DOMContentLoaded', function() {
    const clocks = [
        { id: 'israelClock', timezone: 'Asia/Jerusalem' },
        { id: 'panamaClock', timezone: 'America/Panama' },
        { id: 'spainClock', timezone: 'Europe/Madrid' },
        { id: 'newYorkClock', timezone: 'America/New_York' },
        { id: 'moroccoClock', timezone: 'Africa/Casablanca' }
    ];

    function updateClocks() {
        clocks.forEach(clock => {
            const element = document.getElementById(clock.id);
            const time = new Date().toLocaleTimeString('en-US', { timeZone: clock.timezone });
            element.querySelector('.time').textContent = time;
        });
    }

    updateClocks(); 
    setInterval(updateClocks, 1000);
});
