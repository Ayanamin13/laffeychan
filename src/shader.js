@@ -41,6 +41,11 @@ export const config = bot.config.yargs(yargs)
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
  1  src/sharder.js 
@@ -10,6 +10,7 @@ import config from './config';

const manager = new ShardingManager(path.join(__dirname, 'laffeychan.js'), {
	token: config.token,
	totalShards: config.shardCount || 'auto',
	shardArgs: process.argv.slice(2)
});
manager.on('launch', shard => {
