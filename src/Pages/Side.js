import React from 'react'
import Gallery from '../Component/Gallery'
import Nav from '../Component/Nav'
import Section from '../Component/Section'
const Side = () => {
    return (
        <><Nav />
            <section className='pt-40 p-12 bg-white  '>

                {/* side quests  */}
                <div className="flex flex-col wfull justify-center space-x-5">
                    {/* text  */}
                    <div className="flex flex-col w-full justify-center py-5">
                        <h2 className="font-bold text-4xl text-center font-Birthstone p-8"> Side Quests</h2>
                        <p className=" text-center text-[16px] leading-[1.5]">A lot of my recent work has been in AAA which is often cloaked under a shadowy cloud of NDAs and paroled by ominous all-knowing corporate attorneys (think dementors, but with leather briefcase-satchels overflowing with litigation documentation, all written in Latin of course). So it suffices to say that I can't chat too much about that; you can find my work history including all those projects here. But these projects I made in my spare time.
                            Labors of love, and sometimes, rarely, profitable.</p>
                    </div>
                    <div className="w-full flex justify-center flex-col items items-center">
                        <Gallery />
                    </div>
                </div>


                <Section></Section>
            </section>
            <div className=" w-full h-[70px]  bg-gray-100"></div>
        </>
    )
}

export default Side