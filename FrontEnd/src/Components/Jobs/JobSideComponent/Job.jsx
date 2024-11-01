import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { jobnumberatom } from '../../../store/atoms/jobnumber';

const Job = ({data}) => {
    const setJobId = useSetRecoilState(jobnumberatom)
    const jobid = useRecoilState(jobnumberatom)
    const spanStyle = 'bg-remotego bg-opacity-10 text-remotego font-semibold p-1 px-3 rounded-2xl'
    return (
        <div className="border-2 w-[90%] my-5 rounded-xl hover:ring-1 hover:ring-remotego p-4 ml-5"  onClick={() => {
           setJobId(data.id)
        }} >
            <div className='flex items-center justify-between mb-3'>
                <div className='flex gap-2 md:flex-row flex-col'>
                    <span className={spanStyle}>{data.pubDate}</span>
                    <span className={spanStyle}>{data.jobIndustry}</span>
                    <span className={spanStyle}>Level : {data.jobLevel}</span>
                </div>
                <div>
                    <FontAwesomeIcon 
                            icon={faStar} 
                            size="lg" 
                            className="cursor-pointer border-2 rounded-full p-1 text-remotego hover:bg-remotego hover:text-white"
                    />
                </div>
            </div>
            <div className='bg-slate-50 rounded-3xl p-2'>
                <div className="flex items-center gap-3 pb-3">
                    <img src={data.companyLogo} alt="company_logo" className="size-12 rounded-full"/>
                    <div>
                    <h1 className="font-semibold text-3xl">{data.companyName}</h1>
                    <h2 className="font-medium text-xl">{data.jobTitle}</h2>
                    </div>
                </div>
                <div >
                <div>
                    Location : {data.jobGeo}
                </div>
                </div>
            </div>
        </div>
    )
}

export default Job;