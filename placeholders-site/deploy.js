const fs = require('fs')
const { execSync } = require('child_process')

const homepages = {
	// knotfun: 'https://knotfun.github.io/KnotFun',
	placeholders: 'https://placeholdersstudio.github.io/placeholders',
}

const remotes = {
	// knotfun: 'https://github.com/KnotFun/KnotFun.git',
	placeholders: 'https://github.com/PlaceHoldersStudio/placeholders.git',
}

function deploy(target) {
	console.log(`\n📦 Deploying to: ${target}...\n`)

	const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'))
	pkg.homepage = homepages[target]
	fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2))

	execSync('npm run build', { stdio: 'inherit' })

	//   const remote = target === 'knotfun' ? 'origin' : 'placeholders';

	execSync(`npx gh-pages -d build -r ${remotes[target]}`, { stdio: 'inherit' })

	delete pkg.homepage
	fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2))
}

const args = process.argv.slice(2)
// if (args.length === 0 || args[0] === 'all') {
if (args.length === 0 || args[0] === 'all' || args[0] === 'placeholders') {
	// deploy('knotfun');
	deploy('placeholders')
	// } else if (args[0] === 'knotfun' || args[0] === 'placeholders') {
	// deploy(args[0]);
} else {
	// console.error('Usage: node deploy.js [knotfun|placeholders|all]')
	console.error('Usage: node deploy.js [placeholders|all]')
	process.exit(1)
}
