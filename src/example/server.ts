/**
 * File with server-side script example
 **/

import { addEventHandler } from 'mtasa-lua-types/types/mtasa/server/function/event';
import { Player } from 'mtasa-lua-types/types/mtasa/server/oop/Player';
import { outputChatBox } from 'mtasa-lua-types/types/mtasa/server/function/output';
import { firstLetterUpperCase } from './utils';
import { root, source } from 'mtasa-lua-types/types/mtasa/server/variables';

addEventHandler('onPlayerJoin', root, function () {
    const player = source as unknown as Player;

    const name = firstLetterUpperCase(player.name);
    outputChatBox(`Welcome, ${name}!`);
});
