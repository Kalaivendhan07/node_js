// The os module in Node.js provides operating system-related utility methods and properties. It allows you to interact with the underlying OS and retrieve useful system-related information like CPU details, memory usage, network interfaces, and file paths.

// os.arch() – Returns the operating system CPU architecture.
// os.platform() – Returns the platform the Node.js process is running on.
// os.cpus() – Returns information about each CPU/core installed.
// os.freemem() – Returns the amount of free system memory in bytes.
// os.totalmem() – Returns the total amount of system memory in bytes.
// os.homedir() – Returns the home directory of the current user.
// os.hostname() – Returns the hostname of the operating system.
// os.networkInterfaces() – Returns network interfaces available on the system.
// os.uptime() – Returns the system uptime in seconds.
// os.userInfo() – Returns information about the current user.

const os=require('os');

console.log(os.arch());

console.log(os.totalmem());

console.log(os.freemem());

console.log(os.hostname());

console.log(os.homedir());

console.log(os.cpus());

console.log(os.platform());