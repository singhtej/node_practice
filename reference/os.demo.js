const os = require('os');

// Platform
console.log(os.platform());

// CPU Arch
console.log(os.arch());

// CpU Core Info
console.log(os.cpus());

// Free Memory
console.log(os.freemem());

// Total Memory
console.log(os.totalmem());

// Home directory of the current user
console.log(os.homedir());

// Hostname of the operating system
console.log(os.hostname);

// system uptimr in numbers of seconds
console.log(os.uptime());