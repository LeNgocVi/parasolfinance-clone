import "./App.css";
import haha from "./haha.svg";
import game from "./game.svg";
import built from "./buitl.svg";

function App() {
  return (
    <div className="App">
      <nav className="relative bg-purple-2 -bg-gradient-to-r from-purple-1 to-purple-2">
        <div className="max-w-7xl mx-auto flex whitespace-nowrap justify-between justify-center gap-x-4 py-3 px-3 sm:px-6 lg:px-5">
          <a
            href="https://explorer.solana.com/address/PFo38bhqnYn9ntEs6GHN5LAi26QX1tBxMabmqu5LtX9"
            target="_blank"
            className="flex justify-center truncate items-center gap-1 font-bold text-sm text-white -bg-gray-900 border border-purple-200 rounded-full px-4 py-1"
            rel="noreferrer"
          >
            <i class="fas fa-check"></i>
            Contract Address:
            <span className="truncate">
              PFo38bhqnYn9ntEs6GHN5LAi26QX1tBxMabmqu5LtX9
            </span>
          </a>
          <a
            href="https://parasol.finance/"
            className="flex justify-center items-center gap-1 hidden lg:flex font-bold text-sm text-white border border-purple-200 rounded-full pl-4 pr-1 py-1"
          >
            <i className="fas fa-calendar-plus"></i>
            Add to Bookmark <i class="fas fa-lock"></i> parasol.finance
            <span className="flex gap-2 ml-2 items-center px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-white bg-opacity-50 rounded-l-full">
              <i class="fab fa-windows"></i>Ctrl+D
            </span>
            <span className="flex gap-2 items-center px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-white bg-opacity-50 rounded-r-full">
              <i class="fab fa-apple"></i>Cmd+D
            </span>
          </a>
          <a
            href="https://t.me/parasolfinance"
            target="_blank"
            className="flex justify-center items-center gap-2 font-bold text-sm text-white border border-purple-200 rounded-full px-4 py-1"
            rel="noreferrer"
          >
            <i class="fas fa-paper-plane"></i>
            <span className="hidden lg:block"> t.me/parasolfinance |</span>Join
            Now
          </a>
        </div>
      </nav>
      <body>
        <div className="relative">
          <div className="max-w-7xl md:mt-6 text-gray-200 mx-auto px-5">
            <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
              <div className="">
                <img
                  alt=""
                  aria-hidden="true"
                  src="https://raw.githubusercontent.com/huynguyenngocdev/parasol-finance-clone/1fe0c282fb5ffbfa8b8af18196bd342fd74b7a95/assets/images/parasol_logo_inverted.svg"
                  styles="
                        display: block;
                        max-width: 100%;
                        width: initial;
                        height: initial;
                        background: none;
                        opacity: 1;
                        border: 0px;
                        margin: 0px;
                        padding: 0px;
                      "
                />
              </div>

              <nav class="hidden md:flex items-baseline space-x-10">
                <a class="font-bold text-sm hover:text-gray-300" href="/swap">
                  Swap
                </a>
                <div class="relative">
                  <button
                    class="group inline-flex gap-x-1 items-center font-bold text-sm hover:text-gray-300"
                    id="headlessui-popover-button-1"
                    type="button"
                    aria-expanded="false"
                  >
                    <span>Launchpad</span>
                    <i class="fas fa-angle-down"></i>
                  </button>
                </div>
                <a class="font-bold text-sm hover:text-gray-300" href="/tiers">
                  NFT Access Keys
                </a>
                <div class="relative">
                  <button
                    class="group inline-flex gap-x-1 items-center font-bold text-sm hover:text-gray-300"
                    id="headlessui-popover-button-3"
                    type="button"
                    aria-expanded="false"
                  >
                    <span>Tools</span>
                    <i class="fas fa-angle-down"></i>
                  </button>
                </div>
                <div class="relative">
                  <button
                    class="group inline-flex items-center font-bold text-sm hover:text-white"
                    id="headlessui-popover-button-5"
                    type="button"
                    aria-expanded="false"
                  >
                    <span>More</span>
                    <i class="fas fa-angle-down"></i>
                  </button>
                </div>
              </nav>
              <div className="hidden md:flex items-center gap-x-5 justify-end md:flex-1 lg:w-0">
                <a
                  href="https://coinmarketcap.com/currencies/parasol-finance/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-white-bg-opacity-60 px-4 py-2 font-medium flex items-center text-sm gap-x-2"
                >
                  <img
                    src="https://parasol.finance/assets/logos/parasol-logo-mark-full-color-rgb.svg"
                    className="w-4 h-4"
                    alt="psol-logo"
                  />
                  <span>$0.1102</span>
                </a>
                <button className="inline-flex items-center px-4 py-2 gap-x-2 text-base font-medium rounded-md bg-purple-2 -bg-gradient-to-r from-purple-1 to-purple-2 text-white hover:bg-white hover:text-purple-2 hover:from-purple-2 hover:to-purple-1">
                  <i class="fas fa-wallet"></i>
                  Connect Wallet
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-6 lg:gap-y-24">
          <section className="mt-6">
            <div className="mx-auto max-w-7xl px-5 py-6 grid grid-cols-12 gap-0">
              <div className="col-span-12 lg:col-span-6  lg:text-left lg:flex lg:items-center">
                <div className="pb-3">
                  <a
                    href="https://solana.com/"
                    className="inline-flex items-center text-white  bg-opacity-0 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                  >
                    <img className="h-7" src={built}></img>
                    <span class="ml-4 text-sm">Built on Solana Blockchain</span>
                    <i class="fas fa-chevron-right "></i>
                  </a>
                  <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-7 lg:text-4xl xl:text-6xl">
                    <span className="md:block">The First Community</span>
                    <span className="text-transparent bg-clip-text bg-purple-2 leading-normal whitespace-nowrap grid sm:block">
                      Governed IDO Platform
                    </span>
                  </h1>
                  <p className="mt-7  text-gray-200 font-medium text-xl">
                    Parasol Finance is the first-ever community governed IDO
                    platform built<br></br> on Solana with the needs of both
                    projects and investors alike
                  </p>
                  <div className="flex  mt-6 sm:justify-between">
                    <p className="text-gray-200 text-lg font-bold mb-3 truncate  hhhh">
                      The first launchpad with a NFT allocation system.
                    </p>
                  </div>
                  <div className="mt-8 grid1 lg:flex gap-3 grid-cols-1 lg:grid-cols-2 justify-start">
                    <a
                      className="button px-8 bg-none bg-purple-2 py-3 text-base"
                      href="/projects"
                    >
                      Browse Upcoming IDOs
                    </a>
                    <a
                      className="button border border-white bg-none except py-3 text-base"
                      href="/swap"
                    >
                      Buy $PSOL With USDC
                    </a>
                  </div>
                </div>
                <div className="image-body">
                  <img src="../content.png"></img>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="logo1 mx-auto px-5 max-w-7xl">
              <div className="logo2">
                <img src="https://solana.com/_next/static/media/dark-horizontal.c3a5eb36.svg"></img>
                <img src="https://assets-global.website-files.com/5f6b7190899f41fb70882d08/5f760a499b56c47b8fa74fbb_chainlink-logo.svg"></img>
                <img src="https://d33wubrfki0l68.cloudfront.net/4d28f1aa5d604d17e30aab990edc037e4cd2e405/3e97c/img/seeded_full-wording_logo.svg"></img>
                <img src={game}></img>
                <img src={haha}></img>
              </div>
            </div>
          </section>
          <section>
            <div className="mx-auto px-5 max-w-7xl">
              <div className="upcoming ">
                <div>
                  <p className=" idos">Upcoming IDOs</p>
                  <p>
                    We only display IDOs that are featured or have been
                    balloted.
                  </p>
                </div>
                <div>
                  <button className="filter">
                    {" "}
                    FILTER BY STUTUS <i class="fas fa-angle-down"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className=" card mx-auto px-5 max-w-7xl">
              <div className="card1">
                <div className="img1">
                  <img src="https://firebasestorage.googleapis.com/v0/b/parasol-finance-21.appspot.com/o/projects%2F2T9hVadPUQhKyjHL1qsZi3XZmJjGGvhYGzH81QBTPaHz%2Flogin-page.png?alt=media&token=13549a50-8370-47cf-a93e-3bdfaeaa7901"></img>
                </div>
                <div className="card-body">
                  <div className="pd-1">
                    <h1 className="name-card">MOST Game</h1>
                  </div>
                  <p className="pd-2">
                    MOTS Game is a P2E and NFT mining game developed on the
                    Solana network.
                  </p>
                  <div className="pd-2">
                    <div className="token">
                      <p>Token Price</p>
                      <span>----------------------</span>
                      <p>$0.007</p>
                    </div>
                    <div className="token">
                      <p>IDO Start Date</p>
                      <span>----------------------</span>
                      <p>5/5/2022</p>
                    </div>
                    <div className="token">
                      <p>IDO End Date</p>
                      <span>----------------------</span>
                      <p>9/5/2022</p>
                    </div>
                  </div>
                  <div className="token">
                    <button className="text-base bg1">
                      <i class="fas fa-wallet"></i> Participate in IDO
                    </button>
                    <button className="text-base bg2">More Info</button>
                  </div>
                </div>
              </div>
              <div className="card1">
                <div className="img1">
                  <img src="https://firebasestorage.googleapis.com/v0/b/parasol-finance-21.appspot.com/o/projects%2F5f8weMkCZvATqv1rdDjPqa5XXNWEgqrpSV7RWs9McKBz%2FACDX%20IDO%20FULL%20BNNR%203500x1750.png?alt=media&token=1bd9e2f5-c94b-4991-bf60-9bba685fd1fb"></img>
                </div>
                <div className="card-body">
                  <div className="pd-1">
                    <h1 className="name-card">MOST Game</h1>
                  </div>
                  <p className="pd-2">
                    MOTS Game is a P2E and NFT mining game developed on the
                    Solana network.
                  </p>
                  <div className="pd-2">
                    <div className="token">
                      <p>Token Price</p>
                      <span>----------------------</span>
                      <p>$0.007</p>
                    </div>
                    <div className="token">
                      <p>IDO Start Date</p>
                      <span>----------------------</span>
                      <p>5/5/2022</p>
                    </div>
                    <div className="token">
                      <p>IDO End Date</p>
                      <span>----------------------</span>
                      <p>9/5/2022</p>
                    </div>
                  </div>
                  <div className="token">
                    <button className="text-base bg1">
                      <i class="fas fa-wallet"></i> Participate in IDO
                    </button>
                    <button className="text-base bg2">More Info</button>
                  </div>
                </div>
              </div>
              <div className="card1">
                <div className="img1">
                  <img src="https://firebasestorage.googleapis.com/v0/b/parasol-finance-21.appspot.com/o/projects%2F452DHQwe3SuRmxLfCPRrHqH3nKt9RgHpfpAajt76XjD2%2Falf_covere.jpg?alt=media&token=30c96b8c-75eb-4673-a028-e7da4927df07"></img>
                </div>
                <div className="card-body">
                  <div className="pd-1">
                    <h1 className="name-card">MOST Game</h1>
                  </div>
                  <p className="pd-2">
                    MOTS Game is a P2E and NFT mining game developed on the
                    Solana network.
                  </p>
                  <div className="pd-2">
                    <div className="token">
                      <p>Token Price</p>
                      <span>----------------------</span>
                      <p>$0.007</p>
                    </div>
                    <div className="token">
                      <p>IDO Start Date</p>
                      <span>----------------------</span>
                      <p>5/5/2022</p>
                    </div>
                    <div className="token">
                      <p>IDO End Date</p>
                      <span>----------------------</span>
                      <p>9/5/2022</p>
                    </div>
                  </div>
                  <div className="token">
                    <button className="text-base bg1">
                      <i class="fas fa-wallet"></i> Participate in IDO
                    </button>
                    <button className="text-base bg2">More Info</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="viewall">
              <a className="buttonviewall" href="#">
                View All Project <i class="fas fa-angle-double-right"></i>
              </a>
            </div>
          </section>
        </div>
        <footer className="footer">
          <div className="mx-auto max-w-7xl px-5 py-5 grids">
            <div className="footer-left txt-left ">
              <a className="">
                <img
                  alt=""
                  aria-hidden="true"
                  src="https://raw.githubusercontent.com/huynguyenngocdev/parasol-finance-clone/1fe0c282fb5ffbfa8b8af18196bd342fd74b7a95/assets/images/parasol_logo_inverted.svg"
                  styles="
                        display: block;
                        max-width: 100%;
                        width: initial;
                        height: initial;
                        background: none;
                        opacity: 1;
                        border: 0px;
                        margin: 0px;
                        padding: 0px;
                      "
                />
              </a>
              <p className="text-base  txt-left ppp">
                Parasol Finance is the first-ever community governed IDO
                platform built on Solana with the needs of both projects and
                investors alike.
              </p>
              <div className="icon-footer">
                <i class="fab fa-github"></i>
                <i class="fab fa-twitter"></i>
                <i class="fas fa-paper-plane"></i>
                <i class="fab fa-discord"></i>
                <i class="fab fa-medium-m"></i>
              </div>
            </div>
            <div className="footer-middle text-right">
              <div className="parasol1">
                <h3>PARASAL FINANCE</h3>
                <ul className="mt-4">
                  <li>About Parasol</li>
                  <li>Documentation</li>
                  <li>Github Organization</li>
                  <li>Token Address</li>
                </ul>
              </div>
              <div className="">
                <h3>USEFUL LINKS</h3>
                <ul className="mt-4">
                  <li>About Parasol</li>
                  <li>Documentation</li>
                  <li>Github Organization</li>
                  <li>Token Address</li>
                </ul>
              </div>
            </div>
            <div className="footer-right text-right">
              <div className="parasol1">
                <h3>SOCIAL LINKS</h3>
                <ul className="mt-4">
                  <li>Twiter</li>
                  <li>Telegram</li>
                  <li>Discord</li>
                  <li>Medium</li>
                </ul>
              </div>
              <div>
                <h3>LEGAL</h3>
                <ul className="mt-4">
                  <li>Contact Us</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="py-10">
            <div className="mx-auto max-w-7xl px-5 footer-right1">
              <p>Copyright © 2022 Parasol Finance. All rights reserved.</p>
              <div className="footer-right2">
                <span className="pad1">Build with </span>
                <i class="fas fa-heart pad1"></i>
                <p className="pad1">in Europe |</p>
                <i class="fab fa-github pad1"></i>
                <p className="pad1">Offical Github | Crafted by Clint</p>
                <i class="fas fa-wallet pad1"></i>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </div>
  );
}

export default App;
