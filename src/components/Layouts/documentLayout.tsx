const documentLayout = ({content, title}) => {
    return (
        <>
            <div id={"wrapper"} className={"bg-gray-700"} style={{backgroundImage: 'url("https://mineinabyss.com/assets/lineart.png")'}}>
                <div className={"flex text-xl font-bold text-gray-400 max-w-4xl mx-auto py-6 justify-between"}>
                    <div>
                        /<a href={"/"} className={"hover:underline hover:text-gray-300"}>Home</a>/
                        <a href={""} className={"hover:text-gray-300 hover:underline"}>{title}</a>
                    </div>
                </div>
                <div id={"container"} className={"shadow-xl max-w-4xl mx-auto bg-gray-600 h-screen mb-12"}>
                    {content}
                </div>
            </div>
        </>
    )
}
export default documentLayout