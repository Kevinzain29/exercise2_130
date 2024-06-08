const updateTime = () => {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date = now.toLocaleDateString('en-US', options);
    const time = now.toLocaleTimeString();
    document.getElementById('time').innerHTML = `${date} ${time}`;
};

setInterval(updateTime, 1000);