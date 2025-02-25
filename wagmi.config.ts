import { defineConfig } from "@wagmi/cli";
import { foundry, react, actions } from "@wagmi/cli/plugins";

export default defineConfig({
	out: "ponder/abis/generated.ts",
	contracts: [],
	plugins: [
		actions({
			getActionName: "legacy",
			overridePackageName: "@wagmi/core",
		}),
		foundry({
			project: "foundry",
			artifacts: "out",
			forge: {
				clean: true,
				build: true,
				path: "~/.config/.foundry/bin/forge",
				rebuild: true,
			},
			include: ["*.json"],
			exclude: [
				"Common.sol/**",
				"Components.sol/**",
				"Script.sol/**",
				"StdAssertions.sol/**",
				"StdInvariant.sol/**",
				"StdError.sol/**",
				"StdCheats.sol/**",
				"StdMath.sol/**",
				"StdJson.sol/**",
				"StdStorage.sol/**",
				"StdUtils.sol/**",
				"Vm.sol/**",
				"console.sol/**",
				"console2.sol/**",
				"Test.sol/**",
				"IMulticall3.sol/**",
				"**.s.sol/*.json",
				"**.t.sol/*.json",
			],
		}),
	],
});
