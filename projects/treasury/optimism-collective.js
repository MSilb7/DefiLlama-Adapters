const { nullAddress, treasuryExports } = require("../helper/treasury");

const treasury = "0x2501c477d0a35545a387aa4a3eee4292a9a8b3f0";
const vestingAddress = "0x2A82Ae142b2e62Cb7D10b55E323ACB1Cab663a26";
const OP = "0x4200000000000000000000000000000000000042"; //OP Token

module.exports = treasuryExports({
  optimism: {
    tokens: [ 
        nullAddress,
        OP,
     ],
    owners: [treasury,vestingAddress],
    ownTokens: [OP],
  },
})
