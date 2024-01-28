# Project Name
AxisDAO (Decentralized Autonomous Organization)

## Introduction
Welcome to the GitHub repository for Axis, a sample (fictional) Decentralized Autonomous Organization (DAO) that serves as a basic primer to understanding DAO processes and use cases. Advanced libraries such as OpenZeppelin have been purposely omitted for educational purposes. This project is dedicated to anyone curious about the DOA paradigm, like facilitating decentralized governance, enabling community-led initiatives, etc.

## Features
- **Create proposals** 
- **Vote on proposals with a quorum**
- **Coming soon**: Staking, fee sharing w holders, etc

## Getting Started
This section provides instructions on how to set up the project locally using Hardhat. 

### Prerequisites
This project depends upon the following prerequisite software
- **Node.js**: Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that executes JavaScript code outside a web browser
- **Hardhat**: Hardhat is an Ethereum development environment designed for professionals. It facilitates building, testing, and deploying smart contracts, and is known for its flexibility and extensibility. Featuring a built-in Ethereum Virtual Machine (EVM), Hardhat allows developers to run Ethereum nodes locally, enabling easy testing and debugging of blockchain applications. 
- **Git**: Git is a distributed version control system designed for tracking changes in source code during software development. It is known for its speed, data integrity, and support for distributed, non-linear workflows. Git enables multiple developers to work together on the same codebase, allowing them to branch, merge, and track their code history efficiently. It is widely used in software development for its robust branching and merging capabilities, facilitating collaborative work and version control in small to large-scale projects.
- **Code editor**: Visual Studio Code (VSCode) and Sublime Text Editor are free, open-source, and powerful code editors that offer built-in support for JavaScript, TypeScript, and Node.js, with a rich ecosystem of extensions for other languages. Both are known for fast performance, ease of use, customization options, Git control, syntax highlighting, intelligent code completion, snippets, and code refactoring.


### Steps
Hardhat is a popular development environment for Ethereum, allowing you to compile, deploy, test, and debug your Ethereum software. Here's a step-by-step guide to get you started:

- **Step 1**: Download and Install Node.js: If you don't have Node.js installed, download and install it from nodejs.org.

- **Step 2**: Verify Node.js Installation: Open your terminal and check if Node.js and npm (Node Package Manager) are installed correctly:
```
node -v
npm -v
```

- **Step 3**: Clone the DAO repository:
Visit the Repository's URL: github.com/chcrowe/dao. Click the clone repo button. Open a terminal and navigate to your desired folder. Clone the repository and navigate to the cloned repo directory. Use the cd command to change directories. For example:
```
git clone https://github.com/chcrowe/dao
cd dao
```

- **Step 4**: Initialize and install node package dependencies into the project directory.
```
npm init -y
```

- **Step 5**: Install Hardhat using npm
```
npm install --save-dev hardhat
```

- **Step 6**: Start the hardhat node
```
npm install --save-dev hardhat
```

- **Step 7**: Run units tests (localhost)
```
npx hardhat test ./test/DAO.js
npx hardhat test ./test/Token.js
```

- **Step 8**: Deploy solidity smart contracts to the hardhat node instance
```
npx hardhat run ./scripts/deploy.js --network localhost
```

- **Step 9**: Seed initial dao holder funds
```
npx hardhat run ./scripts/seed.js --network localhost
```

- **Step 10**: launch dao dapp
```
npm run start
```
