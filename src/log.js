import chalk from 'chalk';

const level = process.env.LOG_LEVEL || 'debug';
const log = require('console-log-level')({level});
const {trace, debug, info, warn, error, fatal} = log;

log.trace = (...args) => log::trace(chalk.gray('[trace]'), ...args);
log.debug = (...args) => log::debug(chalk.white('[debug]'), ...args);
log.info = (...args) => log::info(chalk.green('[info]'), ...args);
log.warn = (...args) => log::warn(chalk.yellow('[warn]'), ...args);
log.error = (...args) => log::error(chalk.red('[error]'), ...args);
log.fatal = (...args) => log::fatal(chalk.bgRed('[fatal]'), ...args);

export default log;
