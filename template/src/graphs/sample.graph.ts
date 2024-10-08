/**
 * **sample-graph :**
 * Template placeholder basic sample graph
 *
 * Graph comments need to respect {@link https://github.com/microsoft/tsdoc | TSDoc} specification in order to
 * be correctly parsed for documentation.
 *
 * @module Sample Graph
 *
 */
import type { Dragee } from '@dragee-io/type/common';

const drawSampleGraph = (dragees: Dragee[]) => {
    if (!dragees?.length) return '';
    return 'To Be implemented';
};

export default {
    label: 'Sample Graph',
    handler: drawSampleGraph
};
