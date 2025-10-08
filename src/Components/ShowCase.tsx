import { Trophy } from "lucide-react"
export const ShowCase = () => {
    return (
        <div className="w-[25%] bg-[#ff6467] h-full">
            <div className="grid grid-rows-3 p-6 gap-5">
                <div className="grid grid-cols-3 rounded">
                    <div className="col-span-1 bg-[#fafafa] h-12 w-14 flex justify-center items-center rounded">
                        <Trophy size={28} />
                    </div>

                    <div className="grid col-span-2 bg-[#fafafa] rounded justify-center items-center">
                        3X Hackathons Wins
                    </div>
                </div>


                <div className=" grid grid-cols-3 gap-6 rounded">
                    <div className="grid col-span-2 gap-12 bg-[#fafafa] rounded justify-center items-center">
                        <span>3X Hackathons Wins</span>
                    </div>

                    <div className="col-span-1 bg-[#fafafa] h-12 w-14 flex justify-center items-center rounded">
                        <Trophy size={28} />
                    </div>
                </div>



                <div className="grid grid-cols-3 rounded">
                    <div className="col-span-1 bg-[#fafafa] h-12 w-14 flex justify-center items-center rounded">
                        <Trophy size={28} />
                    </div>

                    <div className="grid col-span-2 bg-[#fafafa] rounded justify-center items-center">
                        3X Hackathons Wins
                    </div>
                </div>


            </div>
        </div>
    )
}