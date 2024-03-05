import { useMetaMask } from '@/hooks/useMetaMask';
import { formatAddress } from '@/utils';

export function Navigation() {
  const { wallet, hasProvider, isConnecting, connectMetaMask } = useMetaMask();

  return (
    <div>
      <div>
        <div>Vite + React & MetaMask</div>
        <div>
          {!hasProvider && (
            <a href="https://metamask.io" target="_blank" rel="noreferrer">
              Install MetaMask
            </a>
          )}
          {window.ethereum?.isMetaMask && wallet.accounts.length < 1 && (
            <button disabled={isConnecting} onClick={connectMetaMask}>
              Connect MetaMask
            </button>
          )}
          {hasProvider && wallet.accounts.length > 0 && (
            <a
              className="text_link tooltip-bottom"
              href={`https://etherscan.io/address/${wallet.accounts[0]}`}
              target="_blank"
              data-tooltip="Open in Block Explorer"
              rel="noreferrer"
            >
              {formatAddress(wallet.accounts[0])}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
