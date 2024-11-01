import { useRecoilState, useSetRecoilState } from "recoil"
import { selectedJobAtom } from "../../../store/atoms/selectedPost"
import { jobnumberatom } from "../../../store/atoms/jobnumber"
import { useEffect, useState } from "react"

const JobExpand = ({post}) => {
    const selectedJob = useRecoilState(selectedJobAtom)[0]
    const jobid = useRecoilState(jobnumberatom)
    const setSelectedJob = useSetRecoilState(selectedJobAtom)

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleDescription = () => {
        setIsExpanded(!isExpanded);
    };

    const buttonHandler = () => {
        if (selectedJob.url) {
            window.open(selectedJob.url, '_blank');
        }
    };

    useEffect(() => {
        setSelectedJob(post.find(item => item.id === jobid[0]))
    },[jobid])


    return (
        <div className="w-full h-fit p-5 border-2">
            <div>
                <div className="flex gap-2">
                <h1 className="bg-remotego  bg-opacity-10 text-remotego font-semibold w-fit px-3 p-1 rounded-3xl">{selectedJob.jobIndustry}</h1>
                <h1 className="bg-remotego  bg-opacity-10 text-remotego font-semibold w-fit px-3 p-1 rounded-3xl">Remote</h1>
                </div>
                <div className="flex mt-5 items-center mb-5 justify-between">
                    <div className="flex items-center gap-3">
                    <img src={selectedJob.companyLogo} alt=""  className="size-12 rounded-full"/>
                    <div>
                        <h1 className="text-3xl font-semibold">{selectedJob.companyName}</h1>
                        <h1 className="text-2xl font-medium">{selectedJob.jobTitle}</h1>
                    </div>
                    </div>
                    <div>
                        <button onClick={buttonHandler} className="h-10 w-32 rounded-3xl bg-remotego text-white font-semibold ">Apply Now</button>
                    </div>
                </div>
            </div>
            <div className="">
                <div 
                    dangerouslySetInnerHTML={{__html : isExpanded ? selectedJob.jobDescription : selectedJob.jobExcerpt}} 
                    className="overflow-hidden"
                ></div>
                <button onClick={toggleDescription} className="text-blue-500">
                    {isExpanded ? "Read Less" : "Read More"}
                </button>
            </div>
            <div className="flex mt-5 mb-5 w-full font-semibold text-xl">
                Job Location : <h1>{selectedJob.jobGeo}</h1>
            </div>
            <div >
                <h1 className="text-2xl font-semibold">Base Pay</h1>
                <div className="w-full bg-slate-50 h-36 p-5 space-y-3">
                    <h1 className="text-remotego font-semibold text-2xl">${selectedJob.annualSalaryMin} -  ${selectedJob.annualSalaryMax}/yr</h1>
                    <h1 className="font-medium text-xl">Median Salary : ${selectedJob.annualSalaryMax / 2}/yr</h1>
                </div>
            </div>
        </div>
    )
}

export default JobExpand