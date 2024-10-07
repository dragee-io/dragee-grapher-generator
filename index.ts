import { Command } from 'commander';
import { generatorHandler } from './src/command.handler.ts';

export const generateGrapher = new Command('generate-grapher')
    .alias('gg')
    .requiredOption('-n, --name <string>', 'name of the grapher project')
    .requiredOption('-od, --output-dir <string>', 'output dir for the grapher project')
    .action(generatorHandler);
