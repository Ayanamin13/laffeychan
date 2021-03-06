'use babel';
'use strict';

import yargs from 'yargs';
import bot from './bot';
import version from './version';

bot.config.defaults.log = 'laffeychan.log';
bot.config.defaults.storage = 'laffeychan-storage';
bot.config.loadDefaults();

export const config = bot.config.yargs(yargs)
	.usage('$0 [command] [options]')
	.example('$0 --token SomeAPITokenGoesHere', 'Starts the bot using a token')
	.example('$0 --email SomeGuy@SomeSite.com --password SomeCrazyPassword123', 'Starts the bot using an email and password')
	.example('$0 --config settings.yml', 'Starts the bot using a config file')
	.example('$0 completion', 'Outputs Bash completion script')
	.epilogue(`LaffeyChan v${version} by 𝓐𝔂𝓪 (Laffey-Chan): https://github.com/Ayanamin13/laffeychan/`)

	// Database
	.option('database', {
		type: 'string',
		default: 'laffeychan.sqlite3',
		alias: 'd',
		describe: 'Path to SQLite3 database file',
		group: 'Database:',
		normalize: true
	})
	.option('database-verbose', {
		type: 'boolean',
		alias: 'V',
		describe: 'Whether or not SQLite3 should be put into verbose mode',
		group: 'Database:'
	})

	// General
	.option('analytics', {
		type: 'boolean',
		default: true,
		alias: 'A',
		describe: 'Whether or not to enable anonymous, non-unique, non-identifiable analytics',
		group: 'General:'
	})
	.option('shard-count', {
		type: 'number',
		describe: 'Number of shards to spawn (only for laffeychan-sharder)',
		group: 'General:'
	})

	// General yargs
	.help()
	.alias('help', 'h')
	.group('help', 'Special:')
	.version(version)
	.alias('version', 'v')
	.group('version', 'Special:')
	.completion('completion')
	.wrap(yargs.terminalWidth())
.argv;
export default config;
