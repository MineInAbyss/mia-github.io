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

    const array = [
        ['button 1', 'link'],
        ['button2', 'link'],
        ['buttonN', 'link']
    ]

    return (
        <>
            <div id={"wrapper"} style={{backgroundColor: '#FFAF1B'}}>
                <div id={"navigation-wrapper"} className={"max-w-7xl mx-auto sm:px-6 lg:px-8"}>
                    <div id={"navigation"} className={"container flex flex-wrap justify-between"}>
                        <div id={"navigation-buttons-left"} className={"flex items-center space-x-3"}>
                            {
                                array.map(([title, url]) => (
                                    <a href={url}>{title}</a>
                                ))
                            }
                        </div>
                    </div>
                </div>
                {parallax}
                <div className={"site"}>
                    <div id={"contents"} className={"max-w-7xl mx-auto sm:px-6 lg:px-8"}>
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
