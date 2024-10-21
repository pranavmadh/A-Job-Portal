const UserReview = ({name,profilePic,review}) => {
    return (
        <div className="flex md:w-[19%] items-center gap-3 border-2 p-4 rounded-2xl">
            <img src={profilePic} alt="profile" className="size-12 rounded-full border-2 border-remotego" />
            <div>
                <h1 className="font-semibold">{name} - Hired</h1>
                <p>"{review}"</p>
            </div>
        </div>
    )
}

export default UserReview