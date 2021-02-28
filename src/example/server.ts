/**
 * File with server-side script example
 **/

import { addEventHandler } from 'mtasa-lua-types/types/mtasa/server/function/event';
import { root } from '../../types/additional';
import { source } from 'mtasa-lua-types/types/mtasa/deprecated/MTA';
import { Player } from 'mtasa-lua-types/types/mtasa/server/oop/Player';
import { outputChatBox } from 'mtasa-lua-types/types/mtasa/server/function/output';
import { firstLetterUpperCase } from './utils';


addEventHandler('onPlayerJoin', root, function() {
    const player = source as Player;

    const name = firstLetterUpperCase(player.name);
    outputChatBox(`Welcome, ${name}!`);
});