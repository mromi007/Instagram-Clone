import React, { useState } from "react";
import Post from "./Post/Post";
import Suggestions from "./Suggestions";
import "./Timeline.css";

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "omi123",
      postImage:
        "https://resources.thomascook.in/images/holidays/sightSeeing/Burjkhalifadubai850.jpg",
      likes: 154,
      timestamp: "2d",
    },
    {
      user: "Salman Khan",
      postImage:
        "https://th-thumbnailer.cdn-si-edu.com/69-CZPc_CnCn6505Q33GRrgq7ZQ=/800x600/filters:focal(1471x1061:1472x1062)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/b6/30/b630b48b-7344-4661-9264-186b70531bdc/istock-478831658.jpg",
      likes: 432,
      timestamp: "2d",
    },
    {
      user: "marry",
      postImage:
        "https://media1.thrillophilia.com/filestore/6k89okl90llxkpaivdaorrog17ep_Dubai_Frame_2a468cf635.jpg",
      likes: 140,
      timestamp: "2d",
    },
    {
      user: "Prince",
      postImage:
        "https://www.arabianbusiness.com/cloud/2022/07/26/Sheikh-Hamdan.jpg",
      likes: 14,
      timestamp: "2d",
    },
  ]);

  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post) => (
            <Post
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  );
}

export default Timeline;

