'use client'

import React, { ReactNode } from 'react'
import { WagmiConfig, createConfig, configureChains, mainnet } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { InjectedConnector } from 'wagmi/connectors/injected'

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [publicProvider()],
)
 
const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
  connectors: [new InjectedConnector({ chains })]
})

type Props = {
  children: ReactNode
}

export default function Provider({children}: Props) {
  return (
    <WagmiConfig config={config}>
    {children}
  </WagmiConfig>
  )
}