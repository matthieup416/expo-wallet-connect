import './crypto-polyfill.js'
import '@walletconnect/react-native-compat'
import { W3mButton, W3mAccountButton } from '@web3modal/wagmi-react-native'
import { View, StyleSheet, Pressable, Text } from 'react-native'
import { WagmiConfig } from 'wagmi'
import { mainnet, polygon, arbitrum } from 'viem/chains'
import {
  createWeb3Modal,
  defaultWagmiConfig,
  Web3Modal,
  useWeb3Modal,
} from '@web3modal/wagmi-react-native'

const projectId = 'xxxxxx'

const metadata = {
  name: 'Web3Modal RN',
  description: 'Web3Modal RN Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
  redirect: {
    native: 'YOUR_APP_SCHEME://',
    universal: 'YOUR_APP_UNIVERSAL_LINK.com',
  },
}

const chains = [mainnet, polygon, arbitrum]

const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

createWeb3Modal({
  projectId,
  chains,
  wagmiConfig,
})

export default function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
      <Web3Modal />
      <View style={styles.centeredView}>
        <W3mButton />
        {/* <W3mButton /> */}
      </View>
    </WagmiConfig>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
})
