import React, { Component } from 'react'
import { Route, Link, Redirect } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import styles from './ApplicationList.module.scss';
import Profile from './Profile';
import { applications } from '../mockup_data';
import ApplicationCard from './ApplicationCard';
import SubNavbar from '../common/SubNavbar';

class ApplicationList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      applications: null
    }
  }
  componentDidMount() {
    this.setState({
      applications: applications
    })
  }
  render() {
    let applicationList = <div>Nie masz żadnych zgłoszeń</div>
    if (this.state.applications !== null && this.state.applications !== undefined) {
      applicationList =
        <ul styleName="application-list">
          {
            this.state.applications.map(application =>
              <li styleName="application-list__item" key={application.id}>
                <ApplicationCard application={application} />
              </li>
            )
          }
        </ul>
    }
    return (
      <div>
        <SubNavbar links={this.props.subNavbarLinks} match={this.props.match} />
        <Profile match={this.props.match} />
        <h2>Moje zgłoszenia</h2>
        {applicationList}
      </div>
    )
  }
}

export default CSSModules(ApplicationList, styles);