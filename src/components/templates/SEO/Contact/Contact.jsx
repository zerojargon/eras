import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid, FormGroup, FormControl, ControlLabel, Row, Col } from 'react-bootstrap'
import { Map } from '../../../atoms'
import { ContactForm } from '../../../organisms/SEO'

export default class Contact extends Component {

  constructor(props) {
    super(props)
  }

  static propTypes = {
  }

  render() {
    return [
      <Map
        pointer={{ lat: 50.840568, lng: 0.463319 }}
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px`, marginTop: `-25px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />,
      <Grid className="t-contact-us">
        <Row>
          <Col sm={8}>
            <h2>Contact us below:</h2>
            <ContactForm
              onSubmit={this.props.onSubmit}
            />
          </Col>

          <Col sm={4}>
            <h2>Where are we?</h2>
            <p>Find us at...</p>
            <address>
              Eras of Style,<br/>
              Terminus Road,<br/>
              Bexhill,<br/>
              East Sussex,<br/>
              TN39 3LR
            </address>

            <hr />

            <h2>Telephone:</h2>
            <p>Call us on <a href="tel:01424217640">01424 217640</a></p>

            <hr />

            <h2>Email:</h2>
            <p>Email us at <a href="mailto:info@erasofstyle.com">info@erasofstyle.com</a></p>


          </Col>
        </Row>

        <hr />

        <Row>
          <Col sm={8}>
            <h2>Find us...</h2>

            <h3>By car:</h3>
              <p><strong>Via the A259 (Main Coast Road):</strong></p>
              <p>
                Where the A259 crosses the A269 at Bexhill, turn left (if westbound) or right (if eastbound) at the traffic crossing onto the A269 London Road.<br />
                Take the immediate right on this road into Beeching Road Industrial Estate.
                Continue to the end of this road, and turn right. <br />
                We are then immediately on your right.
              </p>

            <h3>By train:</h3>
            <p>
              Alight at Bexhill Station. Exit the station and turn left, heading back parallel to the station along the one-way Station Road. <br />
              At the end of this road bear left, and take the first exit off the roundabout onto Buckhurst Place. <br />
              Rather than following this road around to the left, bear right onto Terminus Road. <br />
              Follow this road for roughly 200 yards, and we are on the right.
            </p>
          </Col>

          <Col sm={4}>
            <h2>Opening Times:</h2>
            <p><strong>Monday:</strong> 10:00 – 17:00</p>
            <p><strong>Tuesday:</strong> 10:00 – 17:00</p>
            <p><strong>Wednesday:</strong> 10:00 – 17:00</p>
            <p><strong>Thursday:</strong> 10:00 – 17:00</p>
            <p><strong>Friday:</strong> 10:00 – 17:00</p>
            <p><strong>Saturday:</strong> 10:00 – 17:00</p>
            <p><strong>Sunday:</strong> Closed</p>
          </Col>
        </Row>

      </Grid>
    ]
  }

}
