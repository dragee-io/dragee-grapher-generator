import { Command } from 'commander';
import { generatorHandler } from './src/command.handler.ts';

export const generateGrapher = new Command('generate-grapher')
    .alias('gg')
    .summary('generates a new grapher project')
    .description(
        'Generates a new grapher project.\nBased on a standard dragee grapher template, with mandatory dependancies and a sample graph.'
    )
    .requiredOption('-n, --name <string>', 'name of the new grapher project')
    .requiredOption('-od, --output-dir <string>', 'output dir for the new grapher project')
    .action(generatorHandler);
