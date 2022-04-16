import { buttons } from '../../database/buttons'

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
                                    <a href={url} key={url}>{title}</a>
                                ))
                            }
                        </div>
                    </div>
                </div>
                {parallax}
                <div className={"site"}>
                    <div id={"contents"} className={"max-w-7xl mx-auto sm:px-6 lg:px-8"}>
                        <section id={"hero"}>
                            <div id={"logo?"}/>
                            <div className={"flex text-2xl text-gray-200 space-x-5 pt-8"}>
                                <a className={"bg-gray-600 shadow-lg"}> 129.996.948:225265 </a>
                                <a className={"bg-gray-600 shadow-lg"}> 129.996.948:225265 </a>
                            </div>
                        </section>
                        <div id={"text-notif"}>
                            hello this is a site for testing parallax now in: <img alt="alt-again" src="https://cdn.discordapp.com/attachments/838991750584074240/963271680845836368/cooltext408621478289695.gif"/><br/>
                            all artwork still belongs to <a href={"https://www.camposanto.com"} className={"text-blue-600 hover:underline"}> campo santo </a> and the <a href={"https://www.firewatchgame.com"} className={"text-blue-600 hover:underline"}> firewatch team </a> <br/>
                            <br/>
                            if you would like to check out this now OFFICIAL!!! repo <a href={"https://github.com/MineInAbyss/mia-github.io"} className={"text-blue-600 hover:underline"}> click here! </a>
                            <br/>
                            made with love ❤️
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
