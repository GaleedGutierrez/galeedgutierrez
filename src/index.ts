import * as fs from 'fs';

const MARKDOWN_TEMPLATE = fs.readFileSync('README.md.tpl', { encoding: 'utf-8' });

const ICONS_SIZE_PLACEHOLDER = '%{{icon_size}}%';
const ICON_SIZE = '35px';

const newMarkdown = MARKDOWN_TEMPLATE.replaceAll(ICONS_SIZE_PLACEHOLDER, ICON_SIZE);

fs.writeFileSync('README.md', newMarkdown);