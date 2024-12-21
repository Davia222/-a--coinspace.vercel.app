import React from 'react'
import verify from "../assets/verify.png"
import Courtyard from "../assets/nftSecImages/courtyard.png"
import lilPudgys from "../assets/nftSecImages/lilPudgys.png"
import nakamigos from "../assets/nftSecImages/nakamigos.png"
import animus from "../assets/nftSecImages/animus.png"
import cloneX from "../assets/nftSecImages/cloneX.png"
import doodles from "../assets/nftSecImages/doodles.png"
import ens from "../assets/nftSecImages/ens.png"
import seedworld from "../assets/nftSecImages/seedworld.png"
import pudgyPenguins from "../assets/nftSecImages/pudgyPenguins.png"
import redacted from "../assets/nftSecImages/redacted.png"



function SingleNft({cloneXFunc,CourtyardFunc,DoodlesFunc,EnsEthFunc,LilPudgysFunc,NakamigosFunc, PudgyPenFunc, RedactedRemiFunc, RtfkktAnimusFunc, SeedWorldFunc}) {
  return (
    <>
    <section className='Trending-Nfts'>

        {/* part 1 - 5 */}

        <div className='part1-5'>

            <section className='staticstics1'>
                <div className="staticstics1_1 text-sm">Rank</div>
                <div className="staticstics1_2 text-sm">Collection</div>
                <div className="staticstics1_3 text-sm">Floor Price</div>
                <div className="staticstics1_4 text-sm">Volume</div>
               
            </section>

            <section className="part1">
                <div className="part1_1 text-sm">1</div>
                <div className="part1_2">
                    <div className='partImgDiv'><img src={Courtyard} alt="" className='partImg' onClick={CourtyardFunc} /></div>

                    <p className='nftNameP text-sm'>Courtyard.io <img src={verify} alt="" className='verify'/></p>
                </div>
                <div className="part1_3 text-sm">16 MATIC</div>
                <div className="part1_4 text-sm text-sm">10 ETH</div>
            </section>

            <section className="part2">
                <div className="part2_1 text-sm">2</div>
                <div className="part2_2">
                    <div className='partImgDiv'><img src={lilPudgys} onClick={LilPudgysFunc} alt="" className='partImg' /></div>

                    <p className='nftNameP text-sm'>Lil pudgys <img src={verify} alt="" className='verify'/></p>
                </div>
                <div className="part2_3 text-sm">0.92 ETH</div>
                <div className="part2_4 text-sm">85 ETH</div>
            </section>

            <section className="part3">
                <div className="part3_1 text-sm">3</div>
                <div className="part3_2">
                <div className='partImgDiv'><img src={nakamigos} onClick={NakamigosFunc} alt="" className='partImg' /></div>

<p className='nftNameP text-sm'>Nakamigos <img src={verify} alt="" className='verify'/></p>
                </div>
                <div className="part3_3 text-sm">0.009 ETH</div>
                <div className="part3_4 text-sm">6 ETH</div>
            </section>

            <section className="part4">
                <div className="part4_1 text-sm">4</div>
                <div className="part4_2 text-sm">
                <div className='partImgDiv'><img src={ens} onClick={EnsEthFunc} alt="" className='partImg' /></div>

<p className='nftNameP text-sm'>ENS: Ethereum... <img src={verify} alt="" className='verify'/></p>
                </div>
                <div className="part4_3 text-sm">0.01 ETH</div>
                <div className="part4_4 text-sm">6 ETH</div>
            </section>

            <section className="part5">
                <div className="part5_1 text-sm">5</div>
                <div className="part5_2 text-sm">
                <div className='partImgDiv'><img src={animus} onClick={RtfkktAnimusFunc} alt="" className='partImg' /></div>

<p className='nftNameP text-sm'>RTFKT Animus ... <img src={verify} alt="" className='verify'/></p>
                </div>
                <div className="part5_3 text-sm">0.13 ETH</div>
                <div className="part5_4 text-sm">8 ETH</div>
            </section>

        </div>

        {/* part 6 - 10 */}

        <div className='part6-10'>

            <section className='statictics2'>
                <div className="statictics2_1 text-sm">Rank</div>
                <div className="statictics2_2 text-sm">Collection</div>
                <div className="statictics2_3 text-sm">Floor Price</div>
                <div className="statictics2_4 text-sm">Volume</div>
               
            </section>

            <section className="part6">
                <div className="part6_1 text-sm">6</div>
                <div className="part6_2 text-sm">
                <div className='partImgDiv'><img src={seedworld} onClick={SeedWorldFunc} alt="" className='partImg' /></div>

<p className='nftNameP text-sm'>Seedworld Van... <img src={verify} alt="" className='verify'/></p>
                </div>
                <div className="part6_3 text-sm">0.30 ETH</div>
                <div className="part6_4 text-sm">7 ETH</div>
            </section>

            <section className="part7">
                <div className="part7_1 text-sm">7</div>
                <div className="part7_2 text-sm">
                <div className='partImgDiv'><img src={doodles} onClick={DoodlesFunc} alt="" className='partImg' /></div>

<p className='nftNameP text-sm'>Doodles <img src={verify} alt="" className='verify'/></p>
                </div>
                <div className="part7_3 text-sm">1.89 ETH</div>
                <div className="part7_4 text-sm">45 ETH</div>
            </section>

            <section className="part8">
                <div className="part8_1 text-sm">8</div>
                <div className="part8_2 text-sm">
                <div className='partImgDiv'><img src={redacted} onClick={RedactedRemiFunc} alt="" className='partImg' /></div>

<p className='nftNameP text-sm'>Redacted Remi... <img src={verify} alt="" className='verify'/></p>
                </div>
                <div className="part8_3 text-sm">1.75 ETH</div>
                <div className="part8_4 text-sm">42 ETH</div>
            </section>

            <section className="part9">
                 <div className="part9_1 text-sm">9</div>
                 <div className="part9_2 text-sm">
                 <div className='partImgDiv'><img src={cloneX} onClick={cloneXFunc} alt="" className='partImg' /></div>

<p className='nftNameP text-sm'>Clone X - XT... <img src={verify} alt="" className='verify'/></p>
                 </div>
                 <div className="part9_3 text-sm">0.32 ETH</div>
                 <div className="part9_4 text-sm">9 ETH</div>
            </section>

            <section className="part10">
                 <div className="part10_1 text-sm">10</div>
                 <div className="part10_2 text-sm">
                 <div className='partImgDiv'><img src={pudgyPenguins} onClick={PudgyPenFunc} alt="" className='partImg' /></div>

<p className='nftNameP text-sm'>pudgy penguins <img src={verify} alt="" className='verify'/></p>
                 </div>
                 <div className="part10_3 text-sm">11.9 ETH</div>
                 <div className="part10_4 text-sm text-sm">238 ETH</div>
            </section>
        </div>

    </section>
    </>
  )
}

export default SingleNft
