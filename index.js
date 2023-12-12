function greeting(name) {
  return `Hello ${name}! 🤩`;
}

function safeGreeting(name) {
  return name ? greeting(name) : "No name provided! 💩";
}

module.exports = {
  greeting,
  safeGreeting,
};
