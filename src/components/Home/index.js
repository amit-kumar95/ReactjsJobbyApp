import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="homeContainer">
      <h1 className="homeHeading">
        Find The Job That
        <br /> Fits Your Life
      </h1>
      <h1 className="homeHeadingSm"> Find The Job That Fits Your Life</h1>

      <p className="homeParagraph">
        Millions of people are searching for jobs, salary
        <br /> information, company reviews. Find the job that fits your
        <br />
        abilities and potential.
      </p>

      <p className="homeParagraphSm">
        Millions of people are searching for jobs, salary information, company
        reviews. Find the job that fits your abilities and potential.
      </p>
      <Link to="/jobs" className="linkStl">
        <button className="findJobButton" type="button">
          Find Jobs
        </button>
      </Link>
    </div>
  </>
)

export default Home
