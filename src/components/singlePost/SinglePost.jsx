import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="singlePostImg" />
        <h1 className="singlePostTitle">
            Lorem ipsum dolor sit amet.
            <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash"></i>
            </div>
        </h1>
        <div className="singlePostInfo">
            <span className="singlePostAuthor">Autthor: <b>Vinay</b></span>
            <span className="singlePostDate">2 hours ago</span>
        </div>
        <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus obcaecati facere quas repudiandae architecto repellendus dolorum nostrum tempora ipsum tempore blanditiis soluta omnis, ea quidem nemo dolorem libero quibusdam facilis accusamus unde sit velit? Minus tempora doloribus reprehenderit omnis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates a voluptate ipsum quae in quasi facere officiis sequi repellendus facilis ipsa consequuntur molestiae eius, dolorem voluptatem perferendis, quidem harum vero.</p>
      </div>
    </div>
  )
}
