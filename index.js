#! /usr/bin/env node

const program = require('commander');
const download = require('download-git-repo');
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const ora = require('ora');
const handlebars = require('handlebars');
const chalk = require('chalk');
const symbols = require('log-symbols');

const packageJson = require('./package.json');

program
	.version(packageJson.version, '-v, --version')
	.command('init <name>')
	.description('create a react app')
	.action((name) => {
		const root = path.resolve(name);
		if (!fs.existsSync(name)) {
			console.log(`Creating a new React app in ${chalk.green(root)}.`);
			const spinner = ora('Start download...');
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
					}
					const fileName = `${name}/package.json`;
					if (fs.existsSync(fileName)) {
						const content = fs.readFileSync(fileName).toString();
						const result = handlebars.compile(content)(meta);
						fs.writeFileSync(fileName, result);
					}
					console.log(symbols.success, chalk.green(`Success! Created ${name} at ${root}`));
					console.log();
					console.log('Inside that directory, you can run several commands:');
					console.log();
					console.log(chalk.cyan('npm start'));
					console.log('Starts the development server.');
					console.log();
					console.log(chalk.cyan('npm run build'));
					console.log('Bundles the app into static files for production.');
					console.log();
					console.log('We suggest that you begin by typing:');
					console.log();
					console.log(chalk.cyan('  cd'), root);
					console.log(chalk.cyan('npm start'));
					console.log();
					console.log('Happy hacking!');
				}
			})
		} else {
			console.log(symbols.error, chalk.red('project name has been existed'));
		}
	});

program.parse(process.argv);