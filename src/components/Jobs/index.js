import {Component} from 'react'
import Header from '../Header'
import JobData from '../JobData'
import './index.css'

class Jobs extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="jobContainer">
          <JobData />
        </div>
      </>
    )
  }
}

export default Jobs
