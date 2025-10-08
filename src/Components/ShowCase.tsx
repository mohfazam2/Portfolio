import { Trophy, Briefcase, Package } from "lucide-react"
export const ShowCase = () => {
    return (
        <div className="w-[20%] bg-[#ff6467] h-full">
            <div className="grid grid-rows-3 p-6 gap-4">



                <div className="grid grid-cols-3 gap-6 rounded-lg">
                    <div className="btn-shadow col-span-1 bg-[#fafafa] flex justify-center items-center border-2 rounded">
                        <Trophy size={28} />
                    </div>

                    <div className="grid col-span-2 bg-[#fafafa] justify-center items-center border-2 rounded btn-shadow">
                        <span className="font-bold p-2 text-[15px]">3X Hackathons Wins</span>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-6 rounded">
                    <div className="grid col-span-2 bg-[#fafafa] h-12 justify-center items-center border-2 rounded btn-shadow">
                        <b className="font-bold p-2 text-[12px]">6+ Month's of Experience</b>
                    </div>
                    <div className="col-span-1 bg-[#fafafa] flex justify-center items-center border-2 rounded btn-shadow">
                        <Briefcase size={28} />
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-6 rounded">
                    <div className="col-span-1 bg-[#fafafa] h-12 flex justify-center items-center border-2 rounded btn-shadow">
                        <Package  size={28} />
                    </div>

                    <div className="grid col-span-2 bg-[#fafafa] justify-center items-center border-2 rounded btn-shadow">
                        <b className="font-bold p-2 text-xl">Projects</b>
                    </div>
                </div>



            </div>
        </div>
    )
}