const teamMemberCard = () => {
    return (
        <>
            <div className={"bg-gray-700"}>
                <div className={"justify-between flex px-5 py-3"}>
                    <div className={"grid grid-cols-1 place-items-center"}>
                        <a>
                            img
                        </a>
                    </div>
                    <div className={"w-8 h-10"} />
                    <div>
                        <a> name </a> <br/>
                        <a> title </a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default teamMemberCard