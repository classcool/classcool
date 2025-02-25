"use client";

import { getAddress } from "viem";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { counterAbi } from "../../../ponder/abis/generated";
import CounterDeploy from "../../../../foundry/broadcast/Counter.s.sol/31337/run-latest.json";
import { useWriteContract, useReadContract } from "wagmi";

const address = getAddress(CounterDeploy.transactions[0]!.contractAddress);

function App() {
	const account = useAccount();
	const { connectors, connect, status, error } = useConnect();
	const { disconnect } = useDisconnect();
	const { writeContractAsync } = useWriteContract();
	const increment = async () => {
		console.log("Increment");
		const result = await writeContractAsync({
			abi: counterAbi,
			address: address,
			functionName: "increment",
		});
		console.log("tx:", result);
	};

	return (
		<>
			<div>
				<h2>Account</h2>

				<div>
					status: {account.status}
					<br />
					addresses: {JSON.stringify(account.addresses)}
					<br />
					chainId: {account.chainId}
				</div>

				{account.status === "connected" && (
					<button type="button" onClick={() => disconnect()}>
						Disconnect
					</button>
				)}
			</div>

			<div>
				<h2>Connect</h2>
				{connectors.map((connector) => (
					<button
						key={connector.uid}
						onClick={() => connect({ connector })}
						type="button"
					>
						{connector.name}
					</button>
				))}
				<div>{status}</div>
				<div>{error?.message}</div>
			</div>
			<div>
				<button type="button" onClick={() => increment()}>
					increment
				</button>
			</div>
		</>
	);
}

export default App;
