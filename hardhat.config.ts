// import { HardhatUserConfig } from "hardhat/config";
// import "@nomicfoundation/hardhat-toolbox";
// import "@nomiclabs/hardhat-ethers";
// import "hardhat-deploy";
// import "@nomiclabs/hardhat-etherscan"; // Correct plugin for Etherscan
// import "@typechain/hardhat";
// import "solidity-coverage";
// import * as dotenv from "dotenv";

// dotenv.config();

// if (!process.env.PRIVATE_KEY) {
//   throw new Error("No private key");
// }

// if (!process.env.CELOSCAN_API_KEY) {
//   throw new Error("No celoscan key");
// }

// const config: HardhatUserConfig = {
//   solidity: {
//     version: "0.8.20",
//     settings: {
//       optimizer: {
//         enabled: true,
//         runs: 800,
//       },
//       evmVersion: "berlin",
//       metadata: {
//         bytecodeHash: "none",
//       },
//     },
//   },
//   networks: {
//     alfajores: {
//       url: "https://alfajores-forno.celo-testnet.org",
//       accounts: [process.env.PRIVATE_KEY],
//     },
//     celo: {
//       url: "https://forno.celo.org",
//       accounts: [process.env.PRIVATE_KEY],
//     },
//   },
//   etherscan: {
//     apiKey: {
//       alfajores: process.env.CELOSCAN_API_KEY,
//       celo: process.env.CELOSCAN_API_KEY,
//     },
//     customChains: [
//       {
//         network: "alfajores",
//         chainId: 44787,
//         urls: {
//           apiURL: "https://api-alfajores.celoscan.io/api",
//           browserURL: "https://alfajores.celoscan.io",
//         },
//       },
//       {
//         network: "celo",
//         chainId: 42220,
//         urls: {
//           apiURL: "https://api.celoscan.io/api",
//           browserURL: "https://celoscan.io/",
//         },
//       },
//     ],
//   },
//   namedAccounts: {
//     deployer: 0,
//   },
//   paths: {
//     tests: "ts-src/test",
//     deploy: "ts-src/deploy",
//   },
// };

// export default config;

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";

dotenv.config();

if (!process.env.PRIVATE_KEY) {
  throw new Error("No private key");
}

// if (!process.env.CELOSCAN_API_KEY) {
//   throw new Error("No celoscan key");
// }

const config: HardhatUserConfig = {
  solidity:{
    version: "0.8.24",
    settings: {
            optimizer: {
              enabled: true,
              runs: 800,
            },
            evmVersion: "berlin",
            metadata: {
              bytecodeHash: "none",
            },
          },
          

  } ,
  networks: {
        alfajores: {
          url: "https://alfajores-forno.celo-testnet.org",
          accounts: [process.env.PRIVATE_KEY],
        },
        celo: {
          url: "https://forno.celo.org",
          accounts: [process.env.PRIVATE_KEY],
        },
      },
      etherscan: {
            apiKey: {
              alfajores: process.env.CELOSCAN_API_KEY,
              celo: process.env.CELOSCAN_API_KEY,
            },
            customChains: [
              {
                network: "alfajores",
                chainId: 44787,
                urls: {
                  apiURL: "https://api-alfajores.celoscan.io/api",
                  browserURL: "https://alfajores.celoscan.io",
                },
              },
              {
                network: "celo",
                chainId: 42220,
                urls: {
                  apiURL: "https://api.celoscan.io/api",
                  browserURL: "https://celoscan.io/",
                },
              },
            ],
          },
          // namedAccounts: {
          //       deployer: 0,
          //     },
          //     paths: {
          //       tests: "ts-src/test",
          //      // deploy: "ts-src/deploy",
          //     },
          
      
};

export default config;

// Alfajores: 0x1BA65aF4E10C31F4CBB25C236f6BD477DB5b60bd
//Celo Mainnet: 0xefC63b54AB1C8e8480A86F77d69971367C1cf87C