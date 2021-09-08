/**
 * File with client-side script example
 **/

import { EventNames } from 'mtasa-lua-types/client/event/all_event_names';
import { Event } from 'mtasa-lua-types/client/mtasa';
import { mtasa } from 'mtasa-lua-types/client';

mtasa.addEventHandler<Event.OnClientResourceStart>(
    EventNames.OnClientResourceStart,
    mtasa.resourceRoot,
    function () {
        const [hours, minutes] = mtasa.getTime();

        mtasa.outputChatBox(
            'TypeScript Resource Boilerplate works.' +
                `In-game time: ${hours}:${minutes}`,
        );
    },
);
