import DocumentLayout from "../components/Layouts/documentLayout";
import TeamMemberCard from "../components/teamMemberCard";

export default function developers() {
    return (
        <>
            <DocumentLayout title={'Developers'} content={
                <>
                    <div className={"h-12"}/>
                    <div>
                        <div className={"flex justify-center text-gray-400 text-2xl font-bold py-12"}>
                            Senior Developers
                        </div>
                        <div className={"flex space-x-4 justify-center"}>
                            <TeamMemberCard />
                            <TeamMemberCard />
                        </div>
                    </div>
                    <div>
                        <div className={"flex justify-center text-gray-400 text-2xl font-bold py-12"}>
                            Developers
                        </div>
                        <div className={"grid grid-cols-1 place-items-center gap-4 md:flex md:justify-center"}>
                            <div className={"flex space-x-4"}>
                                <TeamMemberCard />
                                <TeamMemberCard />
                            </div>
                            <div className={"flex space-x-4"}>
                                <TeamMemberCard />
                                <TeamMemberCard />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={"flex justify-center text-gray-400 text-2xl font-bold py-12"}>
                            Junior Developers
                        </div>
                        <div className={"grid grid-cols-1 place-items-center gap-4 md:flex md:justify-center"}>
                            <div className={"flex space-x-4"}>
                                <TeamMemberCard />
                                <TeamMemberCard />
                            </div>
                            <div className={"flex space-x-4"}>
                                <TeamMemberCard />
                                <TeamMemberCard />
                            </div>
                        </div>
                    </div>
                </>
            }/>
        </>
    )
}