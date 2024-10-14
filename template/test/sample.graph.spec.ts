import { describe, expect, test } from 'bun:test';
import { type Dependency, DependencyType } from '@dragee-io/type/common';
import templateGenerator from '..';

const graphId = 'template/sample-graph';
const sampleGraph = templateGenerator.graphs.filter(graph => graph.id === graphId)[0];

describe('Sample Asserter', () => {
    test('assert with no dragees', () => {
        const graphResult = sampleGraph.handler([]);
        expect(graphResult).toBeEmpty();
    });

    test('assert with dragees', () => {
        const dependancy: Dependency = {
            dragee1: DependencyType.FIELD
        };
        const graphResult = sampleGraph.handler([
            {
                name: 'dragee1',
                profile: 'template/test',
                depends_on: []
            },
            {
                name: 'dragee2',
                profile: 'template/test',
                depends_on: [dependancy]
            }
        ]);

        expect(graphResult).toBe('To Be implemented');
    });
});
