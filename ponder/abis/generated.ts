import {
  createReadContract,
  createWriteContract,
  createSimulateContract,
  createWatchContractEvent,
} from '@wagmi/core/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Counter
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const counterAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'increment',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'number',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'newNumber', internalType: 'uint256', type: 'uint256' }],
    name: 'setNumber',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'number',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Increment',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'number',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newNumber',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'SetNumber',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Action
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link counterAbi}__
 */
export const readCounter = /*#__PURE__*/ createReadContract({ abi: counterAbi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link counterAbi}__ and `functionName` set to `"number"`
 */
export const readCounterNumber = /*#__PURE__*/ createReadContract({
  abi: counterAbi,
  functionName: 'number',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link counterAbi}__
 */
export const writeCounter = /*#__PURE__*/ createWriteContract({
  abi: counterAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link counterAbi}__ and `functionName` set to `"increment"`
 */
export const writeCounterIncrement = /*#__PURE__*/ createWriteContract({
  abi: counterAbi,
  functionName: 'increment',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link counterAbi}__ and `functionName` set to `"setNumber"`
 */
export const writeCounterSetNumber = /*#__PURE__*/ createWriteContract({
  abi: counterAbi,
  functionName: 'setNumber',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link counterAbi}__
 */
export const prepareWriteCounter = /*#__PURE__*/ createSimulateContract({
  abi: counterAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link counterAbi}__ and `functionName` set to `"increment"`
 */
export const prepareWriteCounterIncrement =
  /*#__PURE__*/ createSimulateContract({
    abi: counterAbi,
    functionName: 'increment',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link counterAbi}__ and `functionName` set to `"setNumber"`
 */
export const prepareWriteCounterSetNumber =
  /*#__PURE__*/ createSimulateContract({
    abi: counterAbi,
    functionName: 'setNumber',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link counterAbi}__
 */
export const watchCounterEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: counterAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link counterAbi}__ and `eventName` set to `"Increment"`
 */
export const watchCounterIncrementEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: counterAbi,
    eventName: 'Increment',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link counterAbi}__ and `eventName` set to `"SetNumber"`
 */
export const watchCounterSetNumberEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: counterAbi,
    eventName: 'SetNumber',
  })
