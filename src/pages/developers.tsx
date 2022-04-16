export default function developers() {
    return (
        <>
            <div id={"wrapper"} className={"bg-gray-700"} style={{backgroundImage: 'url("https://mineinabyss.com/assets/lineart.png")'}}>
                <div className={"flex text-white text-xl font-bold text-gray-400 max-w-4xl mx-auto py-6 justify-between"}>
                    <div>
                        /<a href={'/'} className={"hover:underline hover:text-gray-300"}>Home</a>/
                        <a href={''} className={"hover:text-gray-300 hover:underline"}>Developers</a>
                    </div>
                </div>
                <div id={"container"} className={"shadow-xl max-w-4xl mx-auto sm:px-6 lg:px-4 bg-gray-600 h-screen mb-12"}>
                    <div id={"spacer"} className={"h-10"}/>
                    <div className={"flex justify-center text-gray-300 text-2xl font-bold"}>
                        Senior Developers
                    </div>
                    <div className={"flex justify-center space-x-4"}>
                        <div>
                            we
                        </div>
                        <div>
                            live
                        </div>
                        <div>
                            in
                        </div>
                    </div>
                    <div className={"flex justify-center text-gray-300 text-2xl font-bold"}>
                        Developers
                    </div>
                    <div className={"flex justify-center space-x-4"}>
                        <div>
                            perpetual
                        </div>
                        <div>
                            torment
                        </div>
                        <div>
                            forever
                        </div>
                    </div>
                    <div className={"flex justify-center text-gray-300 text-2xl font-bold"}>
                        Junior Developers
                    </div>
                    <div className={"flex justify-center space-x-4"}>
                        <div>
                            and
                        </div>
                        <div>
                            ever
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}