'use babel';
'use strict';

import { Bot } from 'discord-graf';
import { stripIndents } from 'common-tags';
import version from './version';

export default new Bot({
	name: 'LaffeyChan',
	version: version,
	about: stripIndents`
		**LaffeyChan** v${version} created by 𝓐𝔂𝓪 (Laffey-Chan).
		Source code and information: https://github.com/Ayanamin13/laffeychan
	`,
	updateURL: 'https://github.com/Ayanamin13/laffeychan/blob/main/.gitignore/package.json',
	clientOptions: {
		disableEveryone: true,
		messageCacheLifetime: 120,
		messageSweepInterval: 60
	}
});
