// Copyright (C) 2012-present, The Authors. This program is free software: you can redistribute it and/or  modify it under the terms of the GNU Affero General Public License, version 3, as published by the Free Software Foundation. This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more details. You should have received a copy of the GNU Affero General Public License along with this program.  If not, see <http://www.gnu.org/licenses/>.

import PolisNet from '../../../util/net'
import React from 'react'
import PropTypes from 'prop-types'
import Url from '../../../util/url'
import { connect } from 'react-redux'
import { Heading, Box, Button } from 'theme-ui'
import ComponentHelpers from '../../../util/component-helpers'
import NoPermission from '../no-permission'

@connect((state) => state.zid_metadata)
class ReportsList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      reports: []
    }
  }

  async getData() {
    const { match } = this.props
    const reportsPromise = PolisNet.polisGet('/api/v3/reports', {
      conversation_id: match.params.conversation_id
    })

    let reports = await reportsPromise;
    
    if (reports.length > 1){
      reports = reports.slice(reports.length - 1);
    }
    
    this.setState({
      loading: false,
      reports: reports
    })

    return;
  }

  async componentDidMount() {
    const { zid_metadata } = this.props

    /*
    if (zid_metadata.is_mod) {
      this.getData()
    }
    */

    await this.getData();
    if (this.state.reports.length === 0){
      await this.createReportClicked();
    }

  }

  async createReportClicked() {
    const { match } = this.props;  
    await PolisNet.polisPost('/api/v3/reports', {
      conversation_id: match.params.conversation_id
    });
    await this.getData();
    return;
  }

  render() {
    if (ComponentHelpers.shouldShowPermissionsError(this.props)) {
      return <NoPermission />
    }

    if (this.state.loading) {
      return <div>Loading Reports...</div>
    }
    return (
      <Box>
        <Heading
          as="h3"
          sx={{
            fontSize: [3, null, 4],
            lineHeight: 'body',
            mb: [3, null, 4]
          }}>
          Report
        </Heading>
        {/* 
        <Box sx={{ mb: [3, null, 4] }}>
          <Button onClick={this.createReportClicked.bind(this)}>
            Create report url
          </Button>
        </Box>
        */}
        {this.state.reports.map(report => {
          return (
            <Box sx={{ mb: [2] }} key={report.report_id}>
              <a
                target="_blank"
                rel="noreferrer"
                href={Url.urlPrefix + 'report/' + report.report_id}>
                {Url.urlPrefix}report/{report.report_id}
              </a>
            </Box>
          )
        })}
      </Box>
    )
  }
}

ReportsList.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      conversation_id: PropTypes.string
    })
  }),
  zid_metadata: PropTypes.shape({
    is_mod: PropTypes.bool
  })
}

export default ReportsList
