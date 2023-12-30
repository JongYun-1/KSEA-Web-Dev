import './membersPage.css';

import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'


import team_picture from '../../assets/IMG_2629.jpg'
import test_picture from '../../assets/5138BA98-19A9-4C8B-BE4C-8AB0B4AD8A57.png'
import logo from '../../assets/KSEA YG PURDUE LOGO.png'

/* Member introduction profile functions */
function PersonCard(props) {
  const { name, role, major, email } = props;

  return (
      <div className = "col-lg-4">
          <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140">
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#ebe8e6" /><text x="50%" y="50%" fill="#82918b"
                  dy=".3em">140x140</text>
          </svg>
          <h4>{name} <span className="text-muted"> | {role}</span></h4>
          <p>{major}</p>
          <p>{email}</p>
      </div>
  );
}

function Header() {
  return (
    <div id = "heading">
      <div id='heading_text'>
        <a href = "/">
          <img alt = "heading_text" width= "300vw" height='auto'  src={logo}/>
          {/* <img alt = "heading_text" width="500" height="150" src={logo}/> */}
        </a>

        <Nav>
            <NavDropdown id='nav_text' title='About'>
            <NavDropdown.Item id='nav_subtext' href="/about">About KSEA</NavDropdown.Item>
            <NavDropdown.Item id='nav_subtext' href="/members">Members</NavDropdown.Item>
            <NavDropdown.Item id='nav_subtext' href="/events">Events</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link id='nav_text' href="/calendar">Calendar</Nav.Link>
            <Nav.Link id='nav_text' href="/announcement">Announcement</Nav.Link>
            <Nav.Link id='nav_text'>Photo</Nav.Link>
            <Nav.Link id='nav_text' href="/research">Research</Nav.Link>
        </Nav>
      </div>
    </div>
  )
}

function Members() {
  return (
      <div id='body'>
        <hr className="body_line" align="center"></hr>
        <div className='body_jumbo'>
          <Jumbotron id='jumbo_body'>
            <h1 className='jumbo_title'>Who are we?</h1>
            <p className='jumbo_text'>
              KSEA YG PURDUE는 퍼듀의 한인 이공계 학생들의 발전을 위해 힘쓰는 동아리입니다.
              </p>
            <div className="row">
              <PersonCard name="Nawon Lee" role="President" major="Genetics" email="placeholder@purdue.edu" />
              <PersonCard name="Jinwoo Jeong" role="Vice-President" major="Computer Science" email="placeholder@purdue.edu" />
              <PersonCard name="Seungbin Kwon" role="Treasurer" major="Biomedical Engineering" email="placeholder@purdue.edu" />
              <PersonCard name="Seungju Park" role="Public Relations TL" major="Industrial Engineering" email="placeholder@purdue.edu" />
              <PersonCard name="공 석" role="Event TL" major="Placeholder" email="placeholder@purdue.edu" />
              <PersonCard name="Jongyun Won" role="Website TL" major="Computer Science" email="placeholder@purdue.edu" />
            </div>
          </Jumbotron>
        </div>
        <hr className="body_line" align="center"></hr>

        <Button className='contact'>Contact Us</Button>

        <footer>
          KSEA YG Purdue
                <br></br>
                In 2020 by web dev team
            </footer>
      </div>
  )
}

function MembersPage(props) {
  return (
    <div>
    <Header />
    <Members />
    </div>
  )
}

export default MembersPage