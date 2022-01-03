import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar/navbar'
import '../Styles/Walletpage.css';

const Wallet = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>

            <div className="main-section">
                <div className="hero">
                    <div className="content-box-lg">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <h1 className='wallet-heading'>Connect Wallet</h1>
                                </div>
                            </div>
                            <div className="cards-container">

                                <Link to={"/Formpage"}>
                                <div className="cards metamask">
                                    <h6>Metamask</h6>
                                    <img src="https://pages.consensys.net/hubfs/metamask-fox.png" alt="" />
                                </div>
                                </Link>
                                
                                <Link to={"/Formpage"}>
                                <div className="cards trust">
                                    <h6>Trust</h6>
                                    <img src="https://avatars1.githubusercontent.com/u/32179889?s=280&v=4" alt="" />
                                </div>
                                </Link>

                                <Link to={"/Formpage"}>
                                <div className="cards coinbase">
                                    <h6>Coinbase</h6>
                                    <img src="https://global-uploads.webflow.com/5b0c471ddb589cf22d4477a4/5cec15f8c0831c35aa6fe349_coinbase-app-icon.png" alt="" />
                                </div>
                                </Link>


                                <Link to={"/Formpage"}>
                                <div className="cards ledger">
                                    <h6>Ledger</h6>
                                    <img src="https://www.ledger.com/wp-content/themes/ledger-v2/public/images/ledger-logo-short.svg" alt="" />
                                </div>
                                </Link>

                                <Link to={"/Formpage"}>
                                <div className="cards trezor">
                                    <h6>Trezor</h6>
                                    <img src="https://www.hulacoins.de/images/content/136-trezor-wallet-logo-pm.jpg" alt="" />
                                </div>
                                </Link>

                                <Link to={"/Formpage"}>
                                <div className="cards formatic">
                                    <h6>Formatic</h6>
                                    <img src="https://goswapp.net/wp-content/uploads/2021/07/formatic.png" alt="" />
                                </div>
                                </Link>

                                <Link to={"/Formpage"}>
                                <div className="cards portis">
                                    <h6>Portis</h6>
                                    <img src="https://goswapp.net/wp-content/uploads/2021/07/portis.png" alt="" />
                                </div>
                                </Link>

                                <Link to={"/Formpage"}>
                                <div className="cards pocket">
                                    <h6>Pocket</h6>
                                    <img src="https://www.walletqrgenerator.online/walletconnect/assets/images/icn-token-pocket.jpg" alt="" />
                                </div>
                                </Link>

                                <Link to={"/Formpage"}>
                                <div className="cards coinmoni">
                                    <h6>Coinmoni</h6>
                                    <img src="https://www.walletqrgenerator.online/walletconnect/assets/images/icn-coinmoni-wallet.png" alt="" />
                                </div>
                                </Link>
                                
                                <Link to={"/Formpage"}>
                                <div className="cards aave">
                                    <h6>AAVE</h6>
                                    <img src="https://www.walletqrgenerator.online/walletconnect/assets/images/icn-aave-wallet.png" alt="" />
                                </div>
                                </Link>

                                <Link to={"/Formpage"}>
                                <div className="cards monero">
                                    <h6>Monero</h6>
                                    <img src="https://www.walletqrgenerator.online/walletconnect/assets/images/icn-monero-wallet.png" alt="" />
                                </div>
                                </Link>

                                <Link to={"/Formpage"}>
                                <div className="cards binance">
                                    <h6>Binance</h6>
                                    <img src="https://www.walletqrgenerator.online/walletconnect/assets/images/icn-binance-smart-chain.png" alt="" />
                                </div>
                                </Link>

                                <Link to={"/Formpage"}>
                                <div className="cards digitex">
                                    <h6>Digitx</h6>
                                    <img src="https://www.walletqrgenerator.online/walletconnect/assets/images/icn-digitx-wallet.png" alt="" />
                                </div>
                                </Link>

                                <Link to={"/Formpage"}>
                                <div className="cards atomic">
                                    <h6>Atomic</h6>
                                    <img src="https://www.walletqrgenerator.online/walletconnect/assets/images/icn-atomic-wallet.png" alt="" />
                                </div>
                                </Link>

                                <Link to={"/Formpage"}>
                                <div className="cards enjin">
                                    <h6>Enjin</h6>
                                    <img src="https://www.walletqrgenerator.online/walletconnect/assets/images/icn-enjin-wallet.png" alt="" />
                                </div>
                                </Link>

                                <Link to={"/Formpage"}>
                                <div className="cards eidoo">
                                    <h6>Eidoo</h6>
                                    <img src="https://www.walletqrgenerator.online/walletconnect/assets/images/icn-eidoo-wallet.png" alt="" />
                                </div>
                                </Link>

                                <Link to={"/Formpage"}>
                                <div className="cards protocol">
                                    <h6>Protocol</h6>
                                    <img src="https://www.walletqrgenerator.online/walletconnect/assets/images/icn-protocol.png" alt="" />
                                </div>
                                </Link>

                                <Link to={"/Formpage"}>
                                <div className="cards squaree">
                                    <h6>Squarelink</h6>
                                    <img src="https://www.walletqrgenerator.online/walletconnect/assets/images/icn-squarelink.png" alt="" />
                                </div>
                                </Link>

                                <Link to={"/Formpage"}>
                                <div className="cards torus">
                                    <h6>Torus</h6>
                                    <img src="https://www.walletqrgenerator.online/walletconnect/assets/images/icn-torus.jpg" alt="" />
                                </div>
                                </Link>

                                <Link to={"/Formpage"}>
                                <div className="cards exodus">
                                    <h6>Exodus</h6>
                                    <img src="https://www.walletqrgenerator.online/walletconnect/assets/images/exodus.png" alt="" />
                                </div>
                                </Link>

                                <Link to={"/Formpage"}>
                                <div className="cards ronin">
                                    <h6>Ronin</h6>
                                    <img src="https://www.walletqrgenerator.online/walletconnect/assets/images/ronin.png" alt="" />
                                </div>
                                </Link>

                                <Link to={"/Formpage"}>
                                <div className="cards safepal">
                                    <h6>Safepal</h6>
                                    <img src="https://www.walletqrgenerator.online/walletconnect/assets/images/safe.jpeg" alt="" />
                                </div>
                                </Link>

                                <Link to={"/Formpage"}>
                                <div className="cards infinity">
                                    <h6>Infinity</h6>
                                    <img src="https://www.walletqrgenerator.online/walletconnect/assets/images/infi.png" alt="" />
                                </div>
                                </Link>

                                <Link to={"/Formpage"}>
                                <div className="cards solflare">
                                    <h6>Solflare</h6>
                                    <img src="https://www.walletqrgenerator.online/walletconnect/assets/images/sof.png" alt="" />
                                </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Wallet;


