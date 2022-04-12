import {useEffect, useState} from "react";

export default function Home() {

    var i = 0
    var x = []

    while(i <= 8) {
        x.push(
            <div className={"parallax__layer parallax__layer__" + i}>
                <img src={"https://firewatchgame.com/images/parallax/parallax" + i++ + ".png"} />
            </div>
        )
    }

    return (
        <>
            <div className={"wrapper"}>
                {x}
                <div className={"site"}>
                    <div id={"text"} className={"p-5"}>
                        hello this is a site for testing parallax now in: <img src="https://cdn.discordapp.com/attachments/838991750584074240/963271680845836368/cooltext408621478289695.gif"/><br/>
                        all artwork still belongs to <a href={"https://www.camposanto.com"} className={"text-blue-600 hover:underline"}> campo santo </a> and the <a href={"https://www.firewatchgame.com"} className={"text-blue-600 hover:underline"}> firewatch team </a> <br/>
                        <br/>
                        if you would like to check out this now OFFICIAL!!! repo <a href={"https://github.com/MineInAbyss/mia-github.io"} className={"text-blue-600 hover:underline"}> click here! </a>
                        <br/>
                        made with love ❤️
                    </div>
                </div>
            </div>
        </>
    )
}
