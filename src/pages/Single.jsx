import React from 'react'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <div className="user">
          <img src="https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <div className="info">
            <span>Jerónimo</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>

            <img src={Delete} alt="" />
          </div>
        </div>

        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </h1>
        <p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque hic officiis nemo ad dolores possimus omnis expedita ex, illo totam enim magnam consectetur iste at natus reiciendis eveniet neque tenetur.</p>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid cumque unde doloribus, magnam, consequatur voluptatem modi illum porro quidem numquam nostrum earum. Atque animi voluptatum inventore tempora quibusdam ullam voluptatem.
          </p>
        </p>
      </div>
      <Menu />
    </div>
  )
}

export default Single