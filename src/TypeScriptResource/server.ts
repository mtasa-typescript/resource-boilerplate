/**
 * File with server-side script example
 **/

import { EventNames } from 'mtasa-lua-types/types/mtasa/server/event/all_event_names';
import { Event } from 'mtasa-lua-types/types/mtasa/server/mtasa';
import { firstLetterUpperCase } from './utils';
import { mtasa } from 'mtasa-lua-types/types/mtasa/server';

mtasa.addEventHandler<Event.OnPlayerJoin>(
    EventNames.OnPlayerJoin,
    mtasa.root,
    function () {
        const player = mtasa.source as unknown as mtasa.Player;

        const name = firstLetterUpperCase(player.name);
        mtasa.outputChatBox(`Welcome, ${name}!`);
    },
);

mtasa.addCommandHandler('typescript-example-command', function (player) {
    player.money += 1;
    mtasa.outputChatBox(`+1$ to ${player.name}`);
});
