const packageJson = require('./package.json');

if (!process.argv[2]) {
    console.error('No version to check against provided. Usage `npm check-version <version>`');
    process.exit(1);
}

if (!packageJson) {
    console.error('No package.json found');
    process.exit(1);
}

if (packageJson.version !== process.argv[2]) {
    console.error(`Package.json version '${packageJson.version}' and provided version '${process.argv[2]}' do not match.`);
    process.exit(1);
}

// eslint-disable-next-line no-console
console.log(`Package.json version '${packageJson.version}' and provided version '${process.argv[2]}' match!`);

process.exit();
