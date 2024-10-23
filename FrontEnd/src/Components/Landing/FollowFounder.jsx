import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FollowFounder = () => {
  return (
    <div className='bg-white text-remotego border-2 font-semibold rounded-3xl w-40 h-10 flex items-center justify-center cursor-pointer right-10 bottom-10 fixed' onClick={() => {
        window.location.href = "https://x.com/PranavMadh"
    }}>
        <i class="fa fa-twitter" aria-hidden="true"></i>
        Follow Founder
    </div>
  )
}

export default FollowFounder