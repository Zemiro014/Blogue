import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const posts = [
    {
      id: 1,
      title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat commodi sapiente, amet voluptatibus praesentium nulla consectetur nemo voluptate in temporibus! Ea, officia sit modi in sint veritatis necessitatibus! Delectus, rem.",
      img: "https://images.pexels.com/photos/1395958/pexels-photo-1395958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 2,
      title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat commodi sapiente, amet voluptatibus praesentium nulla consectetur nemo voluptate in temporibus! Ea, officia sit modi in sint veritatis necessitatibus! Delectus, rem.",
      img: "https://images.pexels.com/photos/1998630/pexels-photo-1998630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 3,
      title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat commodi sapiente, amet voluptatibus praesentium nulla consectetur nemo voluptate in temporibus! Ea, officia sit modi in sint veritatis necessitatibus! Delectus, rem.",
      img: "https://images.pexels.com/photos/4113834/pexels-photo-4113834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 4,
      title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat commodi sapiente, amet voluptatibus praesentium nulla consectetur nemo voluptate in temporibus! Ea, officia sit modi in sint veritatis necessitatibus! Delectus, rem.",
      img: "https://images.pexels.com/photos/616838/pexels-photo-616838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ]
  return (
    <div className='home'>
      <div className="posts">
        {posts.map(item => (
          <div className="post" key={item.id}>
            <div className="img">
              <img src={item.img} alt="" />
            </div>
            <div className="content">
              <Link className='link' to={`/post/${item.id}`}>
                <h1>{item.title}</h1>
              </Link>
              <p>{item.desc}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home