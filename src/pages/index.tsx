import { buttons } from '../../database/buttons'
import styles from '/styles/index.module.css'

export default function Home() {

    let i = 0;
    const parallax = [];

    while(i <= 8) {
        parallax.push(
            <div className={"parallax__layer parallax__layer__" + i} key={i}>
                <img src={"https://firewatchgame.com/images/parallax/parallax" + i++ + ".png"} alt="alt:)"/>
            </div>
        )
    }
    return (
        <>
            <div id={"wrapper"} style={{backgroundColor: '#FFAF1B'}}>
                <div id={"navigation-wrapper"} className={"max-w-7xl mx-auto sm:px-6 lg:px-8"}>
                    <div id={"navigation"} className={"container flex flex-wrap justify-between"}>
                        <div id={"navigation-buttons-left"} className={"flex items-center space-x-3"}>
                            {
                                buttons.navbar.map(([title, url]) => (
                                    <a href={url} key={url} className={"text-white"}>{title}</a>
                                ))
                            }
                        </div>
                    </div>
                </div>
                {parallax}
                <div className={"site"}>
                    <div id={"contents"} className={"max-w-7xl mx-auto sm:px-6 lg:px-8 text-white"}>
                        <section id={"landing-page"}>
                            <div className={"flex justify-center"}>
                                <a className={"font-semibold text-3xl"}>
                                    Experience the abyss like never before
                                </a>
                            </div>
                            <div className={"grid grid-cols-2 gap-4 place-items-center py-12"}>
                                <div className={"bg-gray-600 rounded-2xl"} style={{height: 400, width: 400}}>
                                    image
                                </div>
                                <div>
                                    <div>
                                        <a className={"text-xl"}>
                                            explore and contribute to the project on the <br/>
                                            build server! <br/>
                                        </a>
                                        <div id={"spacer"} className={"h-4"} />
                                        <div className={"flex justify-center"}>
                                            <a className={"bg-gray-700 shadow-inner px-2 text-lg text-gray-200"}>
                                                build.mineinabyss.com
                                            </a>
                                        </div>
                                    </div>
                                    <div id={"spacer"} className={"h-8"} />
                                    <div>
                                        <a className={"text-xl"}>
                                            Partake in events, fight the numerous creatures <br/>
                                            of the abyss and make a name for yourself alongside <br/>
                                            other players in our active and dedicated survival server <br/>
                                        </a>
                                        <div className={"flex justify-center"}>
                                            <a className={"bg-gray-700 shadow-inner px-2 text-lg text-gray-200"}>
                                                survive.mineinabyss.com
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section id={"features"}>
                            <div className={"py-12"}> features </div>
                            <div className={"grid grid-cols-3 place-items-center"}>
                                <div>
                                    <div> img </div>
                                    <div> img </div>
                                    <div> img </div>
                                    <div> img </div>
                                </div>
                                <div>
                                    this is text
                                </div>
                                <div>
                                    <div> img </div>
                                    <div> img </div>
                                    <div> img </div>
                                    <div> img </div>
                                </div>
                            </div>
                        </section>
                        <section id={"contributors"}>
                            <div className={"flex justify-center font-semibold text-3xl pt-12"}>
                                Meet our amazing teams who helped make the abyss a reality
                            </div>
                            <div className={"flex space-x-8 justify-center py-8"}>
                                {
                                    buttons.contributors.map(([name, url, bg]) => (
                                        <a href={url} key={name} className={"shadow-xl rounded-xl bg-center  px-16 py-9 text-xl font-bold hover:underline"} style={{backgroundImage: `url(${bg})`}}>{name}</a>
                                    ))
                                }
                            </div>
                            <div className={"flex justify-center"}>
                                <a className={"font-semibold text-2xl"}> Want to join our team? </a>
                            </div>
                            <div className={"flex justify-center"}>
                                click here to find out how!
                            </div>
                        </section>
                        <div id={"spacer"} className={"h-12"} />
                        <section id={"community"}>
                            <div className={"flex justify-center py-4"}>
                                Were happy to say that our community is x members strong <br/>
                                and continuing to grow each day.
                            </div>
                            <div className={"grid grid-cols-2 place-items-center gap-4 py-6"}>
                                <div>
                                    community gallery
                                </div>
                                <div>
                                    community posts or something?
                                </div>
                            </div>
                            <div id={"spacer"} className={"h-4"} />
                            <div className={"flex justify-center"}>
                                discord button
                            </div>
                        </section>
                        <section id={"support"}>
                            <div className={"flex justify-center py-12"}>
                                confused on where to go? <br/>
                            </div>
                            <div className={"grid grid-cols-3 place-items-center gap-8"}>
                                <div>
                                    starter guide
                                </div>
                                <div>
                                    FAQ
                                </div>
                                <div>
                                    additional help
                                </div>
                            </div>
                        </section>
                        <div id={"spacer"} className={"h-12"} />
                        <section id={"footer"}>
                            <div id={"text-thing"} className={"text-white"}>
                                hello this is a site for testing parallax now in: <img alt="alt-again" src="https://cdn.discordapp.com/attachments/838991750584074240/963271680845836368/cooltext408621478289695.gif"/><br/>
                                all artwork still belongs to <a href={"https://www.camposanto.com"} className={"text-blue-600 hover:underline"}> campo santo </a> and the <a href={"https://www.firewatchgame.com"} className={"text-blue-600 hover:underline"}> firewatch team </a> <br/>
                                <br/>
                                if you would like to check out this now OFFICIAL!!! repo <a href={"https://github.com/MineInAbyss/mia-github.io"} className={"text-blue-600 hover:underline"}> click here! </a>
                                <br/>
                                made with love ❤️
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}
