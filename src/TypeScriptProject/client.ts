/**
 * File with client-side script example
 **/

import { addEventHandler } from 'mtasa-lua-types/types/mtasa/client/function/event';
import { outputChatBox } from 'mtasa-lua-types/types/mtasa/client/function/output';
import { getTime } from 'mtasa-lua-types/types/mtasa/client/function/world';
import { resourceRoot } from 'mtasa-lua-types/types/mtasa/client/variables';
import { EventNames } from 'mtasa-lua-types/types/mtasa/client/event/all_event_names';
import { Event } from 'mtasa-lua-types/types/mtasa/client/mtasa';

addEventHandler<Event.OnClientResourceStart>(EventNames.OnClientResourceStart, resourceRoot, function () {
    const [hours, minutes] = getTime();

    outputChatBox('TypeScript Resource Boilerplate works.' + `In-game time: ${hours}:${minutes}`);
});


