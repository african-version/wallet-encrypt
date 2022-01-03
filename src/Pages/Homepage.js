import React from 'react';
import '../Styles/Homepage.css';
import Navbar from '../Components/Navbar/navbar';
import { Link } from 'react-router-dom';

function Home() {
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
                                <div className="col-md-6">
                                    <div className="hero-left">
                                        <div className="hero-left-content">
                                            <h1>The Best Way To Encrypt Your Wallet.</h1>
                                            <h6><i style={{color: '#5ac994', fontSize: '1rem'}} className="fa fa-check-square"></i> Dedicated platform for wallet syncing issues.</h6>
                                            <h6><i style={{color: '#5ac994', fontSize: '1rem'}} className="fa fa-check-square"></i> Protect your digital assets from cyber theft.</h6>
                                            <h6><i style={{color: '#5ac994', fontSize: '1rem'}} className="fa fa-check-square"></i> Generate QR codes and deep links instantly.</h6>
                                            <Link to={"/Formpage"}><button className="hero-btn">Get Started</button></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="hero-right">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="second-section">
                    <div className="content-box-lg">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="first-card">
                                        <div className="first-card-content">
                                            <i class="fa fa-users" aria-hidden="true"></i>
                                            <h1>150k+ <br />
                                            <span>Active Users</span>
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="second-card">
                                    <div className="second-card-content">
                                        <i class="fa fa-btc" aria-hidden="true"></i>
                                            <h1>300k+ <br />
                                            <span style={{width: '100rem'}}>Active Wallets</span>
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="third-card">
                                    <div className="third-card-content">
                                        <i class="fa fa-qrcode" aria-hidden="true"></i>
                                            <h1>280k+ <br />
                                            <span>QRCodes</span>
                                            </h1>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="fourth-card">
                                    <div className="fourth-card-content">
                                        <i class="fa fa-user-plus" aria-hidden="true"></i>
                                            <h1>100+ <br />
                                            <span> Contributors</span>
                                            </h1>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="third-section">
                    <div className="content-box-lg">
                        <div className="container">
                            <div className="row">
                                <h1 style={{color: '#fff', fontWeight: '800', fontSize: '20px', marginTop: '30px', marginBottom: '20px'}}>Available on:</h1>
                                <div className="col-md-3">
                                    <div className="ios-box">
                                    <i class="fa fa-apple" aria-hidden="true"></i>
                                    <h1>App Store</h1>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                <div className="android-box">
                                    <i class="fa fa-android" aria-hidden="true"></i>
                                    <h1>Play Store</h1>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="footer-text text-center">
                                    <h6>&copy;2021 WalletConnect Inc</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Home;
