import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  HECO_MAINNET = 128,
  HECO_TESTNET = 256,
  OEC_MAINNET = 66
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const FACTORY_ADDRESS = {
  [ChainId.HECO_MAINNET]: '0xb0da7a82e0ed8827d8e4f0142ed3fac7267ac76e',
  [ChainId.HECO_TESTNET]: '0xb0da7a82e0ed8827d8e4f0142ed3fac7267ac76e',
  [ChainId.OEC_MAINNET]: '0x0dDF434108DF168b347428De9C8F595471364A48'
}

export const INIT_CODE_HASH = {
  [ChainId.HECO_MAINNET]: '0x027960b0c056d8d79af00ab060189d77676d39cf76d170490c80bf265d96cea6',
  [ChainId.HECO_TESTNET]: '0x027960b0c056d8d79af00ab060189d77676d39cf76d170490c80bf265d96cea6',
  [ChainId.OEC_MAINNET]: '0x39049b80b4bd4fa78c175418c9994a334451144332c03e8b77b994857fc62178'
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _998 = JSBI.BigInt(998)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
