'use strict'

const config = require('./config.js')
const reekoh = require('demo-reekoh-node')
const _plugin = new reekoh.plugins.ExceptionLogger()
// let connectionString

/**
 * Emitted when device data is received.
 * This is the event to listen to in order to get real-time data feed from the connected devices.
 *  @param {error} error The Error object to be handled/logged.
 */
_plugin.on('exception', (error) => {
  // TODO: Send the error to the error/bug tracking service. error is an instance of PlatformError Custom Error Object.
  console.log(error)
})

/**
 * Emitted when the platform bootstraps the plugin.
 * The plugin should listen once and execute its init process.
 */
_plugin.once('ready', () => {

  let err = config.validate(_plugin.config)

  if (err) {
    return console.error('Config Validation Error: \n', err)
  }

  /**
 * Example:
 *
 * var connectionString = options.connstring;
 */

  // TODO: Initialize the connection to the error/bug tracking service here.
  console.log('Exception Logger has been initialized.')
})
