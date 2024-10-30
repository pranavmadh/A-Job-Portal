const Post = () => {
    return (
        <div className="my-4 border-2 p-7 rounded-xl hover:border-remotego">
        <div>
            <img src="" alt="" />
            <div className="md:flex justify-between">
                <h1 className="font-semibold bg-remotego bg-opacity-10 text-remotego p-1 w-fit rounded-lg px-4">Pranav Adukkadukkam</h1>
                <h2 className="text-slate-600">Student at Manipal Dubai</h2>
            </div>
        </div>
        <div className="my-3">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam debitis necessitatibus animi hic tempora, aspernatur libero sequi praesentium quod, quasi ipsum nihil! Ullam, quis ratione distinctio eum animi doloribus quibusdam.</p>
        </div>
        <div className="flex">
            <div>
                Like
            </div>
            <div>
                Comment
            </div>
            <div>
                Share
            </div>
        </div>
        </div>
    )
}

export default Post