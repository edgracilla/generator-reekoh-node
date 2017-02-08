'use strict'

let reekoh = require('demo-reekoh-node')
let _plugin = new reekoh.plugins.Logger()
// let connection

/**
 * Emitted when device data is received.
 * This is the event to listen to in order to get real-time data feed from the connected devices.
 * * @param {string} logData The log data represented as string. Can be a JSON String.
 */
_plugin.on('log', (logData) => {
  // TODO: Send the log (title + description) to the logging service using the initialized connection..
  console.log(logData)
})

/**
 * Emitted when the platform bootstraps the plugin.
 * The plugin should listen once and execute its init process.
 */
_plugin.once('ready', () => {
  /**
   * var connectionString = options.connstring;
   * connection = loggingService.connect(connectionString);
   *
   */
  console.log('Logger has been initialized.')
})
