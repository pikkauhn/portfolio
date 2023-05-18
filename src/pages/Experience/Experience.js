import React, { useEffect, useState } from 'react'
import './Experience.css'
import { Link } from 'react-router-dom'
import experience from '../../assets/jsons/experience.json'

function Experience() {
  const expTitle = experience[0].Title;
  const eduTitle = experience[1].Title;
  const expDetails = experience[2].Details;
  const eduDetails = experience[2].Details;
  const [details, setDetails] = useState("");

  return (
    <div>
      <div className="expHeader">
        <Link to="#">Experience</Link>
        <Link to="#">Projects</Link>
      </div>
      <div className="subTitleContainer">
        <div className="subTitle">
          <h2>Work Related</h2>
          <div className="detailsBlock">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut tortor purus. Sed rhoncus finibus mollis. Morbi porta tellus non urna pellentesque, non placerat risus facilisis. Mauris eleifend arcu augue, nec lacinia ex scelerisque a. Quisque ut felis nec turpis pharetra lobortis at sit amet turpis. In ac lorem eget urna tempor congue et et risus. Vivamus sit amet nibh vel nunc malesuada luctus ac at eros. Aliquam erat volutpat. Morbi eget lorem sit amet ligula eleifend suscipit vel ac justo. Vestibulum iaculis augue sit amet orci cursus tristique. Vivamus nec eleifend mauris. Sed interdum sollicitudin lacus, eget malesuada justo faucibus ut. Fusce posuere, nisl id tincidunt vulputate, velit dui cursus ex, id semper risus nisi a mauris. Nunc aliquet auctor ex, eget euismod ex bibendum in.
            </p>
          </div>
        </div>
      </div>
      <div className="expItems">
        {expTitle.map((data, idx) => {
          return (
            <Link to="#" className="items" key={idx}>{data}</Link>
          )
        }
        )}

      </div>
      <div className="subTitle">
        <h2>Education</h2>
      </div>
      <div className="eduItems">
        {eduTitle.map((data, idx) => {
          return (
            <Link to="#" className="items" key={idx}>{data}</Link>
          )
        }

        )}
      </div>

    </div>
  )
}

export default Experience