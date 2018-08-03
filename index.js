#! /usr/bin/env node

const program = require('commander');
const download = require('download-git-repo');
const inquirer = require('inquirer');
const fs = require('fs');
const ora = require('ora');
const handlebars = require('handlebars');
const chalk = require('chalk');
const symbols = require('log-symbols');

program.version('1.0.0', '-v, --version')
				.command('init <name>')
				.action((name) => {
					if (!fs.existsSync(name)) {
						inquirer.prompt([
							{
								name: 'description',
								message: 'Please input description'
							},
							{
								name: 'author',
								message: 'Please input author'
							}
						]).then((answers) => {
							const spinner = ora('start download...');
							spinner.start();
							// https://github.com/YanYuanFE/react-start-app.git
							download('github:YanYuanFE/react-start-app', name, (err) => {
								if (err) {
									spinner.fail();
									console.log(symbols.error, chalk.red(err));
								} else {
									spinner.succeed();
									const meta = {
										name,
										description: answers.description,
										author: answers.author,
									}
									const fileName = `${name}/package.json`;
									if (fs.existsSync(fileName)) {
										const content = fs.readFileSync(fileName).toString();
										const result = handlebars.compile(content)(meta);
										fs.writeFileSync(fileName, result);
									}
									console.log(symbols.success, chalk.green('react project init success !'))
								}
							})
						})
					} else {
						console.log(symbols.error, chalk.red('project name has been existed'));
					}
				});

program.parse(process.argv);