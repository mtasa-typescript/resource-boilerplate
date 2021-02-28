/**
 * File with client-side script example
 **/

import { addEventHandler } from 'mtasa-lua-types/types/mtasa/client/function/event';
import { resourceRoot } from 'mtasa-lua-types/types/mtasa/deprecated/MTA';
import { outputChatBox } from 'mtasa-lua-types/types/mtasa/client/function/output';
import { Element } from 'mtasa-lua-types/types/mtasa/client/oop/Element';
import { getTime } from 'mtasa-lua-types/types/mtasa/client/function/world';

addEventHandler('onClientResourceStart', resourceRoot as Element, function() {
    const [hours, minutes] = getTime();
    outputChatBox('TypeScript Resource Boilerplate works.' +
        `In-game time: ${hours}:${minutes}`);
});